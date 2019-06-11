import React, { useState } from 'react';
import DataTree from '../components/DataTree.jsx';
// sample JSON to pass down as props. Will be able to remove as the project evolves.
import { largeData, smallData } from '../dummyData.js';

// will need to get data from the get request to pass to the formatted view

const TestPanel = (props) => {
  const [mockups, setData] = useState([props.data]);

  return (
    <section className='panel' >
      <p>Test panel</p>
      {/* <DataTree data={largeData}/> */}
    </section>
  );
};

export default TestPanel;
