import React, { useState } from 'react';
import RequestBar from '../components/RequestBar.jsx';
import ResponseComponent from '../components/ResponseComponent.jsx';
import StyledPanel from './StyledPanel.jsx';

const DestinationPanel = (props) => {
  const { tests, setTests } = props;

  const responseComponentsList = [];
  for (let i = 0; i < tests.length; i += 1) {
    responseComponentsList.push(
      <ResponseComponent
        status={tests[i].status}
        payload={tests[i].payload}

        // fix later
        key={`DestPanelTest ${i}`}
      />,
    );
  }

  return (
    <StyledPanel>
      <p> Data destination panel </p>
      <RequestBar
        SourceOrDest='dest'
        tests={tests}
        setTests={setTests}
      />

      {responseComponentsList}
    </StyledPanel>
  );
};

export default DestinationPanel;
