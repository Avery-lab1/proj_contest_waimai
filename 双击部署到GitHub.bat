@echo off
title PriceShield - GitHub Pages Deployment

cd /d "%~dp0"

echo ========================================================
echo   PriceShield GitHub Pages - Auto Deployment Script
echo ========================================================
echo.

:: Configure GitHub repo URL
set "GITHUB_REPO=git@github.com:Avery-lab1/proj_contest_waimai.git"

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

:: Create or switch to gh-pages branch
git checkout -b gh-pages 2>nul
if %errorlevel% neq 0 (
    git checkout gh-pages
)

echo.
echo [3/4] Committing build files...
git add -A
git commit -m "auto deploy"

echo.
echo [4/4] Pushing to GitHub Pages branch...
echo Pushing to: %GITHUB_REPO%
git push -f "%GITHUB_REPO%" gh-pages:gh-pages

if %errorlevel% equ 0 goto DEPLOY_SUCCESS
goto DEPLOY_FAILED

:DEPLOY_SUCCESS
cd ..
echo.
echo ========================================================
echo   DEPLOYMENT SUCCESSFUL!
echo.
echo   Please configure GitHub Pages on GitHub website:
echo   1. Open your GitHub repository in browser:
echo      https://github.com/Avery-lab1/proj_contest_waimai
echo   2. Go to "Settings" -> "Pages"
echo   3. Under "Build and deployment" -> "Branch", select "gh-pages"
echo   4. Click "Save"
echo   5. Wait a few minutes, your site will be live!
echo ========================================================
goto END

:DEPLOY_FAILED
cd ..
echo.
echo [ERROR] Push failed. Please check:
echo 1. Whether you have configured SSH keys for GitHub on this PC.
echo 2. Whether you have write permission to the repository.
goto END

:END
pause
