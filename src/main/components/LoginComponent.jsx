import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const LoginComponent = () => {
  let [redirectNeeded, setRedirectNeeded] = useState(false);

  const authorizeWithGithub = props => {
    const metaData = {
      method: 'GET',
      'Content-type': 'application/json',
      Accept: 'text/html',
    };

    fetch('/oauth-init', metaData)
      .then(response => {
        // console.log('oauth-init-response:', response);
        setRedirectNeeded(true);
      })
      .catch(err => console.error('github-init-error:', err));
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
