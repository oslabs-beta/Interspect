import React, { useState } from 'react';
import RequestBar from './../components/RequestBar.jsx';
import ResponseComponent from '../components/ResponseComponent.jsx';

const DestinationPanel = (props) => {
  const { tests, setStatuses, statuses } = props;

  // will be props.testBodies but not connected yet :D
  const responseComponentsList = [];
  for (let i = 0; i < tests.length; i++) {
    responseComponentsList.push(
      <ResponseComponent
        status={statuses[i]}
        payload={tests[i]}

        // fix later
        key={tests[i]}
      />
    );
  };

  return (
    <section className='panel'>
      <p> Data destination panel </p>
      <RequestBar
        SourceOrDest='dest'
        tests={tests}
        setStatuses={setStatuses}
        statuses={statuses}
      />

      {responseComponentsList}
    </section>
  );
};

export default DestinationPanel;
