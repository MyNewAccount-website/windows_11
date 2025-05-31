@echo off

start "" chrome.exe --kiosk --app="https://mynewaccount-website.github.io/windows_11/index.html" --disable-popup-blocking --disable-web-security --user-data-dir=C:\temp\chrome_test

exit
