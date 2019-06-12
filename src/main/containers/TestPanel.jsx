import React, { useState } from 'react';
import DataTree from '../components/DataTree.jsx';
// sample JSON to pass down as props. Will be able to remove as the project evolves.
import { largeData, smallData } from '../dummyData';

// will need to get data from the get request to pass to the formatted view

const TestPanel = (props) => {
  const {treeCount, updateTreeCount, data, setTests, tests} = props;
  let testsListCounter = 0;

  const testsList = [];
  tests.forEach((test) => {
    testsList.push( <TestComponent data={test} /> );
  });

  function saveTest () {
    const testsClone = [...tests];
    const arrayPosition = Number(e.target.id.slice(9));
    setTests();
  };

  function createNewTest() {
    testsList.push(
      <TestComponent
        data={data}
        saveTest={saveTest}
        key={testsListCounter}
      />
    );

    // the ID of the TestComponent will be 
    // the same as the position in the array 
    testsListCounter += 1;
    setTests(testsList);
  };

  return (
    <section className='panel' >
      <p>Test panel</p>
      <TestComponent data={data} main={true} />
      <button onClick={createNewTest}> New Test </button>
      {testsList}
      {/* <DataTree data={largeData}/> */}
    </section>
  );
};

export default TestPanel;
