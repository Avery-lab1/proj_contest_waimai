@echo off
title PriceShield - 价格歧视识别平台开发服务
chcp 65001 > nul
echo ========================================================
echo   PriceShield 算法价格歧视识别平台 - 自动启动服务
echo ========================================================
echo.
echo [1/3] 正在切换至项目工作目录...
cd /d "%~dp0"
echo.
echo [2/3] 正在启动 Vite 本地开发服务器 (并自动打开浏览器)...
echo.
echo 提示：如未自动打开网页，请手动在浏览器访问 http://localhost:5173/
echo      如需退出服务，请在窗口中按 Ctrl + C
echo.
echo [3/3] 执行命令: npm run dev -- --open
echo.
call npm run dev -- --open
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] npm run dev 执行失败，尝试使用 npm.cmd...
    call npm.cmd run dev -- --open
)
pause
