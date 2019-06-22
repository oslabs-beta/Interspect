const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const os = require('os');
const bodyParser = require('body-parser');

if (isDev) {
  console.log('Running in development');
} else {
  console.log('Running in production');
}

let mainWindow;

function createWindow() {
  const expressApp = require('express')();
  expressApp.use(bodyParser.urlencoded({ extended: true }));
  const server = require('http').Server(expressApp);
  const io = require('socket.io')(server);

  server.listen(3001);

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
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

  // http.listen(80);

  const poster = io.on('connection', function(socket) {
    console.log('a user connected');

    expressApp.post('/posturl', (request, response) => {
      socket.emit('post_received', request.body);
      response.status(200);
      response.end();
    });

    expressApp.patch('/posturl', (request, response) => {
      socket.emit('post_received', request.body);
      response.status(200);
      response.end();
    });

    expressApp.delete('/posturl', (request, response) => {
      socket.emit('post_received', request.body);
      response.status(200);
      response.end();
    });
  });
}
app.on('ready', createWindow);
