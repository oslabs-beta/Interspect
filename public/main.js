const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

if (isDev) {
  console.log('Running in development');
} else {
  console.log('Running in production');
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  mainWindow.loadURL(isDev ? 'http://localhost:8080' : `file://${__dirname}/../dist/index.html`);

  const path = require('path')
  const os = require('os')

  BrowserWindow.addDevToolsExtension(
    path.join(os.homedir(), './Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0'),
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
app.on('ready', createWindow);
