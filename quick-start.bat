@echo off
echo 🚀 AI Interface Prototype - Quick Start
echo ======================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org/
    echo Required version: 18.0 or higher
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version
echo ✅ npm detected
npm --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    echo Try running: npm cache clean --force
    pause
    exit /b 1
)

echo.
echo 🎉 Setup complete!
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open your browser to: http://localhost:3000
echo.
echo For more detailed instructions, see SETUP.md
echo.
pause