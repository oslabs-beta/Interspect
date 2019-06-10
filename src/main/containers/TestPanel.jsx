import React, { useState } from 'react';
import ViewTest from '../../renderer/testWindow/formatedView/ViewTest.jsx';

// will need to get data from the get request to pass to the formated view

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
    <section className='panel'style= {{ maxHeight: '400px', overflow: 'auto' }} >
      <p>Test panel</p>
      <ViewTest testdata={data}/>
    </section>
  );
};

export default TestPanel;
