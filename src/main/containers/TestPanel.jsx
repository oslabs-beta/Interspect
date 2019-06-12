import React, { useState } from 'react';
// sample JSON to pass down as props. Will be able to remove as the project evolves.
import { largeData, smallData } from '../dummyData';
import TestComponent from '../components/TestComponent.jsx';
import DataTree from '../components/DataTree.jsx';
import DataCanvas from './DataCanvas.jsx';

// will need to get data from the get request to pass to the formatted view

const TestPanel = (props) => {
  const {treeCount, updateTreeCount, data, setTests, tests} = props;
  const [testsListCounter, setTestsListCounter] = useState(0);
  const dataTreeOptions = {
    onAdd: true,
    onEdit: true,
    onDelete: true,
    enableClipboard: false,
  };

  const testsList = [];
  let i = 0;
  tests.forEach((test) => {
    console.log('yo test here:', test);
    testsList.push(

      // <TestComponent
      //   data={test.payload}
      //   // binding may be necessary 
      //   saveTest={saveTest}
      //   listPosition={i}
      //   key={i}
      // />

      <DataTree
        treeCount={i}
        key={i}
        data={data}
        options={dataTreeOptions}
      />

    );
    i += 1;
  });

  function saveTest (newData, arrayPosition) {
    const testsClone = [...tests];
    testsClone[arrayPosition].payload = JSON.parse(newData);
    setTests(testsClone);
  };

  function createNewTest() {
    const testsClone = [...tests];
    console.log('datahere', data);
    testsClone.push( { 'payload': data, status: '' } );

    // the ID of the TestComponent will be 
    // the same as the position in the array 
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
        {/* <p>{((data) ? data.slice(150) : '')}</p> */}
        <button onClick={createNewTest}> New Test </button>
      </div>
      {/* <TestComponent data={data} main={true} /> */}

      {testsList}
      {/* <DataTree data={largeData}/> */}

    </section>
  );
};

export default TestPanel;
