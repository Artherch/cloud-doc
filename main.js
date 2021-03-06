const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPerferences: {
      nodeIntegration: true
    }
  })
  mainWindow.webContents.openDevTools();
  const urlLocation = isDev ? 'http://localhost:3000' : ''
  mainWindow.loadURL(urlLocation)
})
