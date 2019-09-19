import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import store from '../../../thingsToImplement/redux/reduxStore.js'
// import styled from 'styled-components';
import React, { Component } from 'react';
// import Panels from './Panels.jsx';
// import { TestsProvider } from '../testsContext';
import XPanels from '../xcontainers/XPanels';

// const App = () => (
//   <div>
//     <TestsProvider>
//       <Panels />
//     </TestsProvider>
//   </div>
// );

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <XPanels/>
      </Provider>
    )
  }
}
// const App = () => (
//   <div>
//     <XPanels />
//   </div>
// );
export default hot(App);
