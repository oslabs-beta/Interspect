const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const os = require('os');

const redis = require('redis');
const redisURI = process.env.REDIS_URI;
const redisClient = redis.createClient(redisURI);

const ghClientId = process.env.GH_CL_ID;
const ghClientSecret = process.env.GH_CL_SECRET;

redisClient.on('connect', function() {
  console.log('connected to redis');
});

if (isDev) {
  console.log('Running in development');
} else {
  console.log('Running in production');
}

let mainWindow;

function createWindow () {
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
}
app.on('ready', createWindow);
