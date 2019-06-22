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

  const saveUpdatedTree = (newData, arrayPosition, newValue, name, namespace) => {
    // Update tests
    const testsClone = [...tests];
    testsClone[arrayPosition].payload = newData;
    setTests(testsClone);

    // Update tests differences/changes
    const testsDiffClone = [...testsDiff];
    // for deletion—find better syntax
    if (!testsDiffClone[arrayPosition][namespace]) {
      testsDiffClone[arrayPosition][namespace] = {};
    }
    testsDiffClone[arrayPosition][namespace][name] = newValue;
    setTestsDiff(testsDiffClone);
  };

  const mockupsListDisplay = [];
  let i = 0;
  tests.forEach((test, index) => {
    const { name } = test;

    mockupsListDisplay.push(
      // Creates a component for each test to display name and data
      <Mockup key={index} test={test} index={index} saveUpdatedTree={saveUpdatedTree} />,
    );
    i += 1;
  });

  const createNewTest = () => {
    const testsClone = [...tests];
    const testsDiffClone = [...testsDiff];
    testsClone.push({ payload: data, status: '', name: '' });
    testsDiffClone.push({});

    // the ID of the test will be the same as the position in the array
    setTestsListCounter(testsListCounter + 1);
    setTests(testsClone);
    setTestsDiff(testsDiffClone);
  };

  function createTestFromIndex() {
    // grab the number inputed
    // clone the tests => testClone
    const indexNum = document.querySelector('#indexNum').value;
    const testsClone = [...tests];

    testsClone.push({ payload: data[indexNum], status: '' });
    // grab data[numberInputed] and add it
    // update setTests
    setTests(testsClone);

    // show the diff btwn the OG data and what the test now is
    // the OG is data
    // add something to testDiff array that will show user diff btwn the OG data and the test they just created
    const testsDiffClone = [...testsDiff];

    // goal is to add to testsDiff the data at the index the user specifies
    testsDiffClone.push(data[indexNum]);

    setTestsDiff(testsDiffClone);

  }

  if (active) {
    return (
<<<<<<< HEAD:src/main/containers/TestPanel.jsx
      <StyledPanel active={active} onMouseOver={() => setCursor('default')}>
        <div>
          {data && <h3>Server Response</h3>}
          {datacanvas}
          {data && <Button enabled onClick={createNewTest}> New Test </Button>}
          {data && <Button enabled onClick={createTestFromIndex}>Create Test From index</Button>}
          {data && <input type="text" id="indexNum" />}
        </div>
        {testsDisplayList}
      </StyledPanel>
=======
        <StyledPanel active={active} style={{cursor: 'default'}}>
          <div>
            {data && <h3>Server Response</h3>}
            {datacanvas}
            {data && <Button enabled={true} onClick={createNewTest}>New Test</Button>}
          </div>
          {mockupsListDisplay}
        </StyledPanel>
>>>>>>> dev:src/main/containers/MockupsPanel.jsx
    );
  }

  return (
    <StyledPanel
      onClick={onClickFunction}
      active={active}
<<<<<<< HEAD:src/main/containers/TestPanel.jsx
      onMouseOver={() => setCursor('pointer')}
    >
=======
      style={{cursor: 'pointer'}} >
>>>>>>> dev:src/main/containers/MockupsPanel.jsx
      <h1>Test</h1>
    </StyledPanel>
  );
};

export default MockupsPanel;
