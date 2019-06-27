const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const os = require('os');
const bodyParser = require('body-parser');
const expressApp = require('express')();
const server = require('http').Server(expressApp);
const {ipcMain, dialog} = require('electron');
const fs = require('fs');


if (isDev) {
  console.log('Running in development');
} else {
  console.log('Running in production');
}

let mainWindow;

function createWindow() {
  expressApp.use(bodyParser.urlencoded({ extended: true }));
  expressApp.use(bodyParser.json());

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
          console.log(request.body);
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


  expressApp.post('/', (request, response) => {
    handleRequest(request, response);
  });

  expressApp.patch('/', (request, response) => {
    handleRequest(request, response);
  });

  expressApp.put('/', (request, response) => {
    handleRequest(request, response);
  });

  expressApp.delete('/', (request, response) => {
    handleRequest(request, response);
  });

  ipcMain.on('activate_server', (event, arg) => {
    server.listen(arg);
  });

  ipcMain.on('save_file', (event, arg) => {
    console.log(event);
    dialog.showSaveDialog(mainWindow, filePath => {
      fs.writeFile(filePath, arg, (err) => {
        if (err) {
          console.log('ERROR SAVING:', err);
          mainWindow.webContents.send('saving_error', err);
        }
      });
    });
  })
}

app.on('ready', createWindow);
