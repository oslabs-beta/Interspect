import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
const { BrowserWindow } = require('electron').remote

const LoginComponent = () => {
  let [redirectNeeded, setRedirectNeeded] = useState(false);

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
      {redirectNeeded && <Redirect to="/github-init" />}
      <h1> Dis Login </h1>
      <button onClick={authorizeWithGithub}>Login with Github</button>
    </div>
  )
};

export default LoginComponent;
