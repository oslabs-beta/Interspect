import { hot } from 'react-hot-loader/root';
import React from 'react';
import Panels from './Panels.jsx';

const App = () => (
   <div>
      <h1>An Open-Source API Data Mocking Tool</h1>
      <Panels/>
   </div>
);
export default hot(App);
