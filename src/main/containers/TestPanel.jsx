import React, { useState } from 'react';
// sample JSON to pass down as props. Will be able to remove as the project evolves.
// import { largeData, smallData } from '../dummyData';
import DataTree from '../components/DataTree.jsx';
import DataCanvas from './DataCanvas.jsx';

// will need to get data from the get request to pass to the formatted view

const TestPanel = (props) => {
  const { treeCount, updateTreeCount, data, setTests, tests } = props;
  const [testsListCounter, setTestsListCounter] = useState(0);
  const dataTreeOptions = {
    onAdd: true,
    onEdit: true,
    onDelete: true,
    enableClipboard: false,
  };

  function saveUpdatedTree (newData, arrayPosition) {
    const testsClone = [...tests];
    testsClone[arrayPosition].payload = newData;
    setTests(testsClone);
  };

  const testsList = [];
  let i = 0;
  tests.forEach((test) => {
    testsList.push(

      <DataTree
        treeCount={i}
        key={'TestPanelDataTree' + i}
        data={data}
        options={dataTreeOptions}
        saveUpdatedTree={saveUpdatedTree}
      />

    );
    i += 1;
  });

  function createNewTest () {
    const testsClone = [...tests];
    testsClone.push({ 'payload': data, status: '' });

    // the ID of the test will be the same as the position in the array 
    setTestsListCounter(testsListCounter + 1);
    setTests(testsClone);
  };

  return (
    <section className='panel' >
      <p>Test panel</p>
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
      {/* <DataTree data={largeData}/> */}

    </section>
  );
};

export default TestPanel;
