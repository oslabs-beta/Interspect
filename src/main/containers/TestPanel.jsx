import React, { useState } from 'react';
import ViewTest from '../components/ViewTest.jsx';

// will need to get data from the get request to pass to the formatted view

const TestPanel = (props) => {
  const [mockups, setData] = useState([props.data]);
  // sample JSON to pass down as props. Will be able to remove as the project evolves.
  const data = {
    firstName: 'Hello2',
    lastName: 'Joe',
    phones: [
      '123-45-67',
      '987-65-43',
    ],
  };

  return (
    <section className='panel' >
      <p>Test panel</p>
      <ViewTest testdata={data} style= {{ maxHeight: '400px', overflow: 'auto' }}/>
    </section>
  );
};

export default TestPanel;
