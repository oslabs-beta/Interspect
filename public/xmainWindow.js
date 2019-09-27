
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const os = require('os');

const express = require('express');
const {router} = require('../src/main/xserver/xroutes/xroutes.js');
const exApp = express();
const server = require('http').Server(exApp);
// require('electron-reload')(__dirname);




let PORT = 3000;
let serverIsOn = false;
// let itemsToSend; //(FOR DESTINATION PANEL)


let mainWindow;
function createWindow() {

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
    icon: './icon_png.png',
  });

  mainWindow.loadURL(isDev ? 'http://localhost:8080' : `file://${__dirname}/../../dist/index.html`);

  // if (isDev) {
  //   BrowserWindow.addDevToolsExtension(
  //     path.join(os.homedir(), './Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.0.6_0'),
  //   );
  // }

  // if (serverIsOn) {
    exApp.use(express.urlencoded({ encoded: true }))
    exApp.use(express.json());

    exApp.use('/', router);

    exApp.get('*', (req, res) => {
      console.log("ERROR: CODE IS BROKEN");
      res.status(404).send('ERROR: CODE IS BROKEN');
    });

    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  // }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

}

// function setPort(portNum) { PORT = portNum; }
// const setPort = (portNum) => {PORT = portNum;}
// export default setPort;
// function setItemsToSend(bodyItems) { itemsToSend = bodyItems; }
// function setServerOn(server_status) { serverIsOn = server_status; }



app.on('ready', createWindow);
//app.on('window-all-closed', function() { app.quit(); })


// module.exports = {
//   setPort,
//   setItemsToSend,
//   setServerOn,
// }
