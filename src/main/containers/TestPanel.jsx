import React, { useState, useContext } from 'react';
// sample JSON to pass down as props. Will be able to remove as the project evolves.
// import { largeData, smallData } from '../dummyData';
import StyledPanel from './StyledPanel.jsx';
import { TestsContext } from '../testsContext';
import Button from '../components/Button.jsx';
import DataTree from '../components/DataTree.jsx';

// will need to get data from the get request to pass to the formatted view
const TestPanel = (props) => {
  const {
    active, datacanvas, data, onClickFunction, setTestsDiff, testsDiff, setCursor,
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
    // Update tests
    const testsClone = [...tests];
    testsClone[arrayPosition].payload = newData;
    setTests(testsClone);

    // Update tests differences/changes
    const testsDiffClone = [...testsDiff];
    // for deletion-- find better syntax
    if (!testsDiffClone[arrayPosition][namespace]) {
      testsDiffClone[arrayPosition][namespace] = {};
    }
    testsDiffClone[arrayPosition][namespace][name] = newValue;
    setTestsDiff(testsDiffClone);
  }

  const testsDisplayList = [];
  let i = 0;
  tests.forEach((test) => {
    testsDisplayList.push(
      <div>
        <h3 id={`title_${i}`}>NAME</h3>
        <DataTree
          treeId={i}
          key={`TestPanelDataTree ${i}`}
          data={test.payload}
          options={dataTreeOptions}
          saveUpdatedTree={saveUpdatedTree}
        />
      </div>,
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
            {datacanvas}
            {data && <Button enabled={true} onClick={createNewTest}> New Test </Button>}
          </div>
          {testsDisplayList}
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
