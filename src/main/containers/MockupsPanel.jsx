import React, { useState, useContext } from 'react';
import StyledPanel from './StyledPanel.jsx';
import { TestsContext } from '../testsContext';
import Button from '../components/Button.jsx';
import Select from '../components/InlineSelect.jsx';
import Mockup from '../components/Mockup.jsx';


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
    // for deletion—find better syntax
    if (!testsClone[arrayPosition].diff[namespace]) {
      testsClone[arrayPosition].diff[namespace] = {};
    }
    testsClone[arrayPosition].diff[namespace][name] = newValue;
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
      payload: data, status: '', name: `Test #${tests.length + 1}`, diff: {},
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
      payload: data[createTestIndex], status: '', name: `Test #${tests.length + 1}`, diff: data[createTestIndex],
    });
    setTests(testsClone);
  }

  const options = [];
  if (data) {
    const testKeys = Object.keys(data)
    for (let i = 0; i < testKeys.length; i += 1) {
      if (typeof data[testKeys[i]] === 'object') {
        options.push(<option value={testKeys[i]}>{testKeys[i]}</option>);
      }
    }
  }

  function changeTestIndex(e) {
    const { value } = e.target;
    setCreateTestIndex(value);
  }

  if (active) {
    return (
      <StyledPanel active={active} style={{ cursor: 'default' }}>
        <div>
          {data && <h3>Server Response</h3>}
          {datacanvas}
          {data &&
            <div>
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
            </div>}
        </div>
        {mockupsListDisplay}
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
