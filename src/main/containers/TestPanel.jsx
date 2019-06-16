import React, { useState, useContext } from 'react';
// sample JSON to pass down as props. Will be able to remove as the project evolves.
// import { largeData, smallData } from '../dummyData';
import DataTree from '../components/DataTree.jsx';
import DataCanvas from './DataCanvas.jsx';
import StyledPanel from './StyledPanel.jsx';
import { TestsContext } from './../testsContext.js';

// will need to get data from the get request to pass to the formatted view

const TestPanel = (props) => {
  const {
    active, treeCount, updateTreeCount, data, onClickFunction, setTestsDiff, testsDiff, setCursor
  } = props;
  
  const [tests, setTests] = useContext(TestsContext);

  const [testsListCounter, setTestsListCounter] = useState(0);
  const dataTreeOptions = {
    onAdd: true,
    onEdit: true,
    onDelete: true,
    enableClipboard: false,
  };
  
  function saveUpdatedTree(newData, arrayPosition, newValue, name, namespace) {
    const testsClone = [...tests];
    const testsDiffClone = [...testsDiff];
    testsClone[arrayPosition].payload = newData;

    if (!testsDiffClone[arrayPosition][namespace]) {
      testsDiffClone[arrayPosition][namespace] = {};
    }
    testsDiffClone[arrayPosition][namespace][name] = newValue;

    setTests(testsClone);
    setTestsDiff(testsDiffClone);
  }

  const testsList = [];
  let i = 0;
  tests.forEach((test) => {

    testsList.push(
      <DataTree
        treeCount={i}
        key={`TestPanelDataTree ${i}`}
        data={test.payload}
        options={dataTreeOptions}
        saveUpdatedTree={saveUpdatedTree}
      />,
    );
    i += 1;
  });

  function createNewTest() {
    const testsClone = [...tests];
    const testsDiffClone = [...testsDiff];
    testsClone.push({ payload: data, status: '' });
    testsDiffClone.push({});
  
    // the ID of the test will be the same as the position in the array
    setTestsListCounter(testsListCounter + 1);
    setTests(testsClone);
    setTestsDiff(testsDiffClone);
  }

  if (active) {
    return (
        <StyledPanel active={active} onMouseOver={() => setCursor('default')}>
          <h1>Test panel</h1>
          <div>
            <p>Server Response:</p>
            <DataCanvas
              data={data}
              updateTreeCount={updateTreeCount}
              options={dataTreeOptions}
            />
            <button onClick={createNewTest}> New Test </button>
          </div>
          
          {testsList}
        </StyledPanel>
    )
  }

  return (
    <StyledPanel
      onClick={onClickFunction}
      active={active}
      onMouseOver={() => setCursor('pointer')} >
        <h1>Test panel</h1>
    </StyledPanel>
  )
};

export default TestPanel;
