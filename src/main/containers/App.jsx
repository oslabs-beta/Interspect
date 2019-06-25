import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import React from 'react';
import Panels from './Panels.jsx';
import { TestsProvider } from '../testsContext';
import Nodatasvg from '../../renderer/Nodatasvg.jsx';

const App = () => (
  <div>
    <TestsProvider>
      <Panels />
    </TestsProvider>
  </div>
);
export default hot(App);
