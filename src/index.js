require('update-electron-app')({
  repo: 'Aexhell/eaglr-desktop',
  updateInterval: '1 minute',
  logger: require('electron-log')
});

const fs = require('fs');
const electron = require('electron');
const { dialog, Menu, shell, app, BrowserWindow } = electron;
const path = require('path');
const url = require('url');
const logger = require("electron-log");
const client = require("discord-rich-presence")('750893006403403866');
const superagent = require("superagent");

logger.info('App starting...');
let win;

client.updatePresence({
  state: 'Navegando',
  startTimestamp: Date.now(),
  largeImageKey: 'large',
  instance: true,
});

function createWindow() {
  Menu.setApplicationMenu(null);
  win = new BrowserWindow({
    width: 1180,
    height: 620,
    frame: true,
    icon: __dirname + "/media/icon.ico",
    movable: true,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true
    }
  });

  // win.loadFile("../src/html/index.html");
  win.loadURL("https://eaglr.net/");
  win.setMinimumSize(980, 620);
  win.once('ready-to-show', () => {
    win.show();
  });
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  };
});