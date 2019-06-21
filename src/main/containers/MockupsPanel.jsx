import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import StyledPanel from './StyledPanel.jsx';
import { TestsContext } from '../testsContext';
import Button from '../components/Button.jsx';
import DataTree from '../components/DataTree.jsx';
// import NameForm from '../components/NameForm.jsx';
import Mockup from '../components/Mockup.jsx';

// will need to get data from the get request to pass to the formatted view
const MockupsPanel = (props) => {
  const {
    active, datacanvas, data, onClickFunction, setTestsDiff, testsDiff,
  } = props;

  const [tests, setTests] = useContext(TestsContext);
  const [testsListCounter, setTestsListCounter] = useState(0);

  const mockupsListDisplay = [];
  let i = 0;
  tests.forEach((test, index) => {
    const { name } = test;

    mockupsListDisplay.push(
      // Creates a component for each test to display name and data
      <Mockup key={index} test={test} index={index}/>,
    );
    i += 1;
  });

  function createNewTest() {
    const testsClone = [...tests];
    const testsDiffClone = [...testsDiff];
    testsClone.push({ payload: data, status: '', name: '' });
    testsDiffClone.push({});

    // the ID of the test will be the same as the position in the array
    setTestsListCounter(testsListCounter + 1);
    setTests(testsClone);
    setTestsDiff(testsDiffClone);
  }

  if (active) {
    return (
        <StyledPanel active={active} style={{cursor: 'default'}}>
          <div>
            {data && <h3>Server Response</h3>}
            {datacanvas}
            {data && <Button enabled={true} onClick={createNewTest}>New Test</Button>}
          </div>
          {mockupsListDisplay}
        </StyledPanel>
    );
  }

  return (
    <StyledPanel
      onClick={onClickFunction}
      active={active}
      style={{cursor: 'pointer'}} >
      <h1>Test</h1>
    </StyledPanel>
  );
};

export default MockupsPanel;
