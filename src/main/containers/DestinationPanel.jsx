import React, { useState } from 'react';
import RequestBar from './../components/RequestBar.jsx';
import ResponseComponent from '../components/ResponseComponent.jsx';

const DestinationPanel = (props) => {
  const { tests, setTests } = props;

  // will be props.testBodies but not connected yet :D
  const responseComponentsList = [];
  for (let i = 0; i < tests.length; i++) {
    responseComponentsList.push(
      <ResponseComponent
        status={tests[i].status}
        payload={tests[i].payload}

        // fix later
        key={tests[i].payload}
      />
    );
  };

  return (
    <section className='panel'>
      <p> Data destination panel </p>
      <RequestBar
        SourceOrDest='dest'
        tests={tests}
        setTests={setTests}
      />

      {responseComponentsList}
    </section>
  );
};

export default DestinationPanel;
