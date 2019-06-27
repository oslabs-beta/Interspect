const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const os = require('os');
const bodyParser = require('body-parser');
const expressApp = require('express')();
const server = require('http').Server(expressApp);
const {ipcMain} = require('electron')

if (isDev) {
  console.log('Running in development');
} else {
  console.log('Running in production');
}

let mainWindow;

function createWindow() {
  expressApp.use(bodyParser.urlencoded({ extended: true }));
  expressApp.use(bodyParser.json());

  server.listen(3001);

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
    icon: './icon_png.png'
  });

  mainWindow.loadURL(isDev ? 'http://localhost:8080' : `file://${__dirname}/../dist/index.html`);

  if (isDev) {
    BrowserWindow.addDevToolsExtension(
      path.join(os.homedir(), './Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0'),
    );
  }
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const handleRequest = (request, response) => {
    try {
      if (request.headers['content-type'].includes('json')
        || request.headers['content-type'].includes('xml')) {
        mainWindow.webContents.send('post_received', request.body);
        response.status(200);
        response.end();
      } else {
        response.status(400);
        response.end();
      }
    } catch {
      response.status(500);
      response.end();
    }
  };


  expressApp.post('/posturl', (request, response) => {
    handleRequest(request, response);
  });

  expressApp.patch('/posturl', (request, response) => {
    handleRequest(request, response);
  });

  expressApp.put('/posturl', (request, response) => {
    handleRequest(request, response);
  });

  expressApp.delete('/posturl', (request, response) => {
    handleRequest(request, response);
  });
}

app.on('ready', createWindow);
