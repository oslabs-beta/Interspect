import React from 'react';
import ReactDOM from 'react-dom';
import Panels from './containers/Panels.jsx';

const App = () => (
   <div>
      <h1>Hello world!! From REACT SIDE</h1>
      <h2>Welcome MIME team</h2>
      <Panels/>
   </div>
);
ReactDOM.render(<App/>, document.getElementById('app'));
