import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Panels from './Panels.jsx';
import { TestsProvider } from '../testsContext';
import LoginComponent from './../components/LoginComponent.jsx';
import SavedProjects from './SavedProjects.jsx';

const App = () => {
  const [data, setData] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Route path="/" exact
        render={(props) => <LoginComponent {...props} setLoggedIn={setLoggedIn} />}
      />
      <TestsProvider>
        <Route path="/tool"
          render={(props) => <Panels {...props}
              data={data} setData={setData} setLoggedIn={setLoggedIn} loggedIn={loggedIn}
            />}
        />
        <Route path="/myprojects"
          render={(props) => <SavedProjects {...props} setData={setData} />}
        />
      </TestsProvider>
    </Router>
  );
}

export default hot(App);
