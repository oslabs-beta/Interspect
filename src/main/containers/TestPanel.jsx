import React, { useState } from 'react';
// sample JSON to pass down as props. Will be able to remove as the project evolves.
// import { largeData, smallData } from '../dummyData';
import DataCanvas from './DataCanvas.jsx';
import StyledPanel from './StyledPanel.jsx';
import Button from '../components/Button.jsx';
import DataTree from '../components/DataTree.jsx';

// will need to get data from the get request to pass to the formatted view

const TestPanel = (props) => {
  const {
    tests, active, treeCount, updateTreeCount, data,
    setTests, onClickFunction, setTestsDiff, testsDiff, setCursor,
  } = props;
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
    console.log('testsDiffClone', testsDiffClone);
    console.log('testsDiffClone[arrayPosition]', testsDiffClone[arrayPosition]);

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
          <div>
            {data && <h3>Server Response</h3>}
            <DataCanvas
              data={data}
              updateTreeCount={updateTreeCount}
              options={dataTreeOptions}
            />
            {data && <Button enabled={true} onClick={createNewTest}> New Test </Button>}
          </div>
          {testsList}
        </StyledPanel>
    );
  }

  return (
    <StyledPanel
      onClick={onClickFunction}
      active={active}
      onMouseOver={() => setCursor('pointer')} >
        <h1>Test</h1>
    </StyledPanel>
  );
};

export default TestPanel;
