import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
const { BrowserWindow } = require('electron').remote

const LoginComponent = () => {
  let [toolRedirect, setToolRedirect] = useState(false);
  let [projectsPageRedirect, setProjectsPageRedirect] = useState(false);

  const authorizeWithGithub = props => {
    const authWindow =
      new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          webSecurity: false,
        },
      });
    authWindow.loadURL('http://localhost:3006/github-init');
    authWindow.show();

    function checkIfLoggedIn () {
      console.log('checking')
      setTimeout(() => {
        if (authWindow.webContents.getURL().includes('success-no-projs')) {
          authWindow.close();
          setToolRedirect(true);
        } else if (authWindow.webContents.getURL().includes('success-has-projs')) {
          authWindow.close();
          setProjectsPageRedirect(true);
        } else {
          checkIfLoggedIn();
        }
      }, 2000)
    }

    checkIfLoggedIn();
    
    // const metaData = {
    //   method: 'GET',
    //   'Content-type': 'application/json',
    //   Accept: 'text/html',
    // };

    // fetch('http://localhost:3006/github-init', metaData)
    //   .then(response => {
    //     console.log('oauth-init-response:', response);
    //     setRedirectNeeded(true);
    //   })
    //   .catch(err => console.error('github-init-error:', err));
  };

  return (
    <div>
      {toolRedirect && <Redirect to="/tool" />} 
      {projectsPageRedirect && <Redirect to="/myprojects" />} 
      <h1> Dis Login </h1>
      <button onClick={authorizeWithGithub}>Login with Github</button>
      <button onClick={() => {setToolRedirect(true)}}>Use Without Saving</button>
    </div>
  )
};

export default LoginComponent;
