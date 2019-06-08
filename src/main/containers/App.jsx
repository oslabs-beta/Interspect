import { hot } from 'react-hot-loader/root';
import React from 'react';
import Panels from './Panels.jsx';

const App = () => (
   <div>
      <h1>Hello world!! From REACT SIDE</h1>
      <h2>Welcome MIME team</h2>
      <Panels/>
   </div>
);
export default hot(App);
