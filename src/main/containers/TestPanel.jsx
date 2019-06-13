import React, { useState } from 'react';
// sample JSON to pass down as props. Will be able to remove as the project evolves.
// import { largeData, smallData } from '../dummyData';
import DataTree from '../components/DataTree.jsx';
import DataCanvas from './DataCanvas.jsx';
import StyledPanel from './StyledPanel.jsx';

// will need to get data from the get request to pass to the formatted view

const TestPanel = (props) => {
  const {
    tests, active, treeCount, updateTreeCount, data, setTests, onClickFunction
  } = props;
  const [testsListCounter, setTestsListCounter] = useState(0);
  const dataTreeOptions = {
    onAdd: true,
    onEdit: true,
    onDelete: true,
    enableClipboard: false,
  };
  
  
  function saveUpdatedTree(newData, arrayPosition) {
    const testsClone = [...tests];
    testsClone[arrayPosition].payload = newData;
    setTests(testsClone);
  }
    
  const testsList = [];
  let i = 0;
  tests.forEach((test) => {
    console.log('test'+i, test.payload[0]);

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
    testsClone.push({ payload: data, status: '' });
  
  // the ID of the test will be the same as the position in the array
  setTestsListCounter(testsListCounter + 1);
  setTests(testsClone);
  }

  if (active) {
    return (
      
        <StyledPanel active={active}>
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
    <StyledPanel onClick={onClickFunction} active={active}>
      <h1>Test panel</h1>
    </StyledPanel>
  )

};

export default TestPanel;
