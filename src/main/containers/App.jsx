import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Panels from './Panels.jsx';
import { TestsProvider } from '../testsContext';
import LoginComponent from './../components/LoginComponent.jsx'

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LoginComponent} />
      <Route path='/google-init' component={() => {
        window.location.href = 'http://localhost:3000/google-init';
        return null;
      }} />
      <TestsProvider>
        <Route path="/tool" component={Panels} />
      </TestsProvider>
    </Router>
  );
}

export default hot(App);
