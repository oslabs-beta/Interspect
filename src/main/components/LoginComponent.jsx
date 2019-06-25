import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from './../components/Button'
const { BrowserWindow } = require('electron').remote

const LoginComponent = (props) => {
  const {setLoggedIn} = props;
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
      setTimeout(() => {
        if (authWindow.webContents.getURL().includes('success-no-projs')) {
          authWindow.close();
          setLoggedIn(true);
          setToolRedirect(true);
        } else if (authWindow.webContents.getURL().includes('success-has-projs')) {
          authWindow.close();
          setLoggedIn(true);
          setProjectsPageRedirect(true);
        } else {
          checkIfLoggedIn();
        }
      }, 2000)
    }

    checkIfLoggedIn();
  };

  return (
    <div>
      {toolRedirect && <Redirect to="/tool" />} 
      {projectsPageRedirect && <Redirect to="/myprojects" />} 
      <center>
        <h1> Welcome to InterSpect </h1>
        <Button onClick={authorizeWithGithub} enabled={true}>Login with Github</Button> <br/><br/>
        <Button onClick={() => {setToolRedirect(true)}} enabled={true}>Continue Without Saving</Button>
      </center>
    </div>
  )
};

export default LoginComponent;
