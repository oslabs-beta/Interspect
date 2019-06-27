import React, { useState, useContext } from 'react';
import StyledPanel from './StyledPanel.jsx';
import { TestsContext } from '../testsContext';
import Button from '../components/Button.jsx';
import Select from '../components/InlineSelect.jsx';
import Mockup from '../components/Mockup.jsx';
import styled from 'styled-components';
const {ipcRenderer} = require('electron')


// will need to get data from the get request to pass to the formatted view
const MockupsPanel = (props) => {
  const {
    active, datacanvas, data, onClickFunction,
  } = props;

  const [tests, setTests] = useContext(TestsContext);
  const [testsListCounter, setTestsListCounter] = useState(0);

  const saveUpdatedTree = (newData, arrayPosition, newValue, name, namespace) => {
    // Update tests
    const testsClone = [...tests];
    testsClone[arrayPosition].payload = newData;
    setTests(testsClone);
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
    testsClone.push({
      payload: data, status: '', name: `Test #${tests.length + 1}`,
    });

    // the ID of the test will be the same as the position in the array
    setTestsListCounter(testsListCounter + 1);
    setTests(testsClone);
  };

  const initialstate = (data ? Object.keys(data)[0] : undefined);
  const [createTestIndex, setCreateTestIndex] = useState(initialstate);
  function createTestFromIndex() {
    const testsClone = [...tests];
    testsClone.push({
      payload: data[createTestIndex], status: '', name: `Test #${tests.length + 1}`, diff: createTestIndex,
    });
    setTests(testsClone);
  }

  const options = [];
  if (data) {
    const testKeys = Object.keys(data);
    for (let j = 0; j < testKeys.length; j += 1) {
      // if necessary because otherwise you get errors with single values
      if (typeof data[testKeys[j]] === 'object') {
        options.push(<option value={testKeys[j]}>{testKeys[j]}</option>);
      }
    }
  }

  function changeTestIndex(e) {
    const { value } = e.target;
    setCreateTestIndex(value);
  }

  function saveFile(e) {
    ipcRenderer.send('save_file', JSON.stringify({data, tests}));
  }

  const ServerResp = styled.h3`
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  `;

  if (active) {
    return (
      <StyledPanel active={active} style={{ cursor: 'default' }}>
        <div>
          {data && <ServerResp>Server Response</ServerResp>}
          {datacanvas}
          {data
            && <div>
              <Button enabled={true} onClick={createNewTest}>New Test</Button>
              <br />
              <Button enabled onClick={createTestFromIndex}>Create Test From Index</Button>
              <Select
                name='createTestFromIndexDropdown'
                id='createTestFromIndexDropdown'
                multiple={false}
                value={createTestIndex}
                onChange={changeTestIndex}
              >
                {options}
              </Select>
              <br />
              <Button enabled onClick={saveFile}>Save Work as JSON</Button>
            </div>}
          {mockupsListDisplay}
        </div>
      </StyledPanel>
    );
  }

  return (
    <StyledPanel
      onClick={onClickFunction}
      active={active}
      style={{ cursor: 'pointer' }} >
      <h1>Test</h1>
    </StyledPanel>
  );
};

export default MockupsPanel;
