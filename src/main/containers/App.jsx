import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Panels from './Panels.jsx';
import { TestsProvider } from '../testsContext';
import LoginComponent from './../components/LoginComponent.jsx';
import SavedProjects from './SavedProjects.jsx';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LoginComponent} />
      <TestsProvider>
        <Route path="/tool" component={Panels} />
        <Route path="/myprojects" component={SavedProjects} />
      </TestsProvider>
    </Router>
  );
}

export default hot(App);
