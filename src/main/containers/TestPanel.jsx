import React, { useState } from 'react';
import ViewTest from '../components/ViewTest.jsx';
// sample JSON to pass down as props. Will be able to remove as the project evolves.
import { largeData, smallData } from '../dummyData';

// will need to get data from the get request to pass to the formatted view

const TestPanel = (props) => {
  const [mockups, setData] = useState([props.data]);

  return (
    <section className='panel' >
      <p>Test panel</p>
      <ViewTest testdata={largeData}/>
    </section>
  );
};

export default TestPanel;
