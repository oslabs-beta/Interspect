import React, { useState } from 'react';

const TestPanel = (props) => {
  const [mockups, setData] = useState([props.data]);

  return (
    <section className='panel'>
      <p>Test panel</p>
    </section>
  )
};

export default TestPanel;