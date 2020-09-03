const { remote, ipcRenderer } = require('electron');
const Mousetrap = require('mousetrap');
console.log("[INFO] Started!");

document.getElementById('min-btn').addEventListener('click', () => {
    remote.getCurrentWindow().minimize();
});

// Allowing the user reload the application.
Mousetrap.bind(['command+r', 'ctrl+r'], () => {
    console.log("[RELOAD] Application reloaded.");
    remote.getCurrentWindow().reload();
    return false;
});

// Allowing the user Dev Tools, maybe deleted in a future.
Mousetrap.bind(['ctrl+shift+i'], () => {
    console.log("[DEV TOOLS] Dev Tools has been open.");
    remote.getCurrentWindow().webContents.openDevTools();
    return false;
});

let responses = ["Loading.", "FanFuckingTastic.", "Amazing dude.", "worrrrrrking", "Loooooooool", "test1", "test2", "discord copy", "electron's real shit"];
let result = Math.floor((Math.random() * responses.length));
var message = document.getElementById('message');
message.innerHTML = responses[result];

document.getElementById('max-btn').addEventListener('click', () => {
    const currentWindow = remote.getCurrentWindow();
    if (currentWindow.isMaximized()) {
        currentWindow.restore();
    } else {
        currentWindow.maximize();
    }
});

document.getElementById('close-btn').addEventListener('click', () => {
    remote.app.quit();
});