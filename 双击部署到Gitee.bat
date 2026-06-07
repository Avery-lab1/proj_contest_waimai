@echo off
title PriceShield - Gitee Pages Deployment

cd /d "%~dp0"

echo ========================================================
echo   PriceShield Gitee Pages - Auto Deployment Script
echo ========================================================
echo.

:: Configure Gitee repo URL
set "GITEE_REPO=https://gitee.com/YOUR_USERNAME/YOUR_REPO_NAME.git"

if "%GITEE_REPO%"=="https://gitee.com/YOUR_USERNAME/YOUR_REPO_NAME.git" goto PROMPT_USER
goto CHECK_REPO

:PROMPT_USER
echo [INFO] Gitee repository URL is not configured in this script.
echo You can edit this .bat file and set GITEE_REPO variable on line 11.
echo.
set /p "GITEE_REPO=Please enter Gitee repository URL (e.g. https://gitee.com/username/project.git): "
goto CHECK_REPO

:CHECK_REPO
if "%GITEE_REPO%"=="" goto ERROR_EMPTY
goto START_BUILD

:ERROR_EMPTY
echo [ERROR] Repository URL cannot be empty. Deployment cancelled.
goto END

:START_BUILD
echo.
echo [1/4] Building the project...
call npm.cmd run build
if %errorlevel% neq 0 (
    echo.
    echo [WARNING] npm.cmd failed, trying npm...
    call npm run build
)

if not exist dist goto ERROR_NO_DIST
goto START_DEPLOY

:ERROR_NO_DIST
echo [ERROR] Build directory 'dist' was not found. Build failed.
goto END

:START_DEPLOY
echo.
echo [2/4] Preparing build assets...
cd dist

:: Initialize temp git repo
if not exist .git (
    git init
)

:: Create or switch to gitee-pages branch
git checkout -b gitee-pages 2>nul
if %errorlevel% neq 0 (
    git checkout gitee-pages
)

echo.
echo [3/4] Committing build files...
git add -A
git commit -m "auto deploy"

echo.
echo [4/4] Pushing to Gitee Pages branch...
echo Pushing to: %GITEE_REPO%
git push -f "%GITEE_REPO%" gitee-pages:gitee-pages

if %errorlevel% equ 0 goto DEPLOY_SUCCESS
goto DEPLOY_FAILED

:DEPLOY_SUCCESS
cd ..
echo.
echo ========================================================
echo   DEPLOYMENT SUCCESSFUL!
echo.
echo   Please configure Gitee Pages on Gitee website:
echo   1. Open your Gitee repository in browser
echo   2. Go to "Services" (服务) -> "Gitee Pages"
echo   3. Select branch: "gitee-pages"
echo   4. Leave deploy directory blank (root)
echo   5. Click "Start" (启动) / "Update" (更新)
echo ========================================================
goto END

:DEPLOY_FAILED
cd ..
echo.
echo [ERROR] Push failed. Please check:
echo 1. Whether your repository URL is correct: %GITEE_REPO%
echo 2. Whether you have configured Git credentials for Gitee
echo 3. Whether you have write permission to this repository
goto END

:END
pause
