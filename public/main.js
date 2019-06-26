const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const os = require('os');
const bodyParser = require('body-parser');
const expressApp = require('express')();
const server = require('http').Server(expressApp);
const io = require('socket.io')(server);

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

  const handleRequest = (request, response, socket) => {
    try {
      if (request.headers['content-type'].includes('json')
        || request.headers['content-type'].includes('xml')) {
        socket.emit('post_received', request.body);
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

  const poster = io.on('connection', (socket) => {
    console.log('a user connected');

    expressApp.post('/posturl', (request, response) => {
      handleRequest(request, response, socket);
    });

    expressApp.patch('/posturl', (request, response) => {
      handleRequest(request, response, socket);
    });

    expressApp.put('/posturl', (request, response) => {
      handleRequest(request, response, socket);
    });

    expressApp.delete('/posturl', (request, response) => {
      handleRequest(request, response, socket);
    });
  });

  io.on('disconnect', () => {
    console.log('a user disconnected');
  });
}

app.on('ready', createWindow);
