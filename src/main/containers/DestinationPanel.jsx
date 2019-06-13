import React, { useState } from 'react';
import RequestBar from '../components/RequestBar.jsx';
import ResponseComponent from '../components/ResponseComponent.jsx';
import StyledPanel from './StyledPanel.jsx';

const DestinationPanel = (props) => {
  const { tests, setTests, active, onClickFunction } = props;

  // will be props.testBodies but not connected yet :D
  const responseComponentsList = [];
  for (let i = 0; i < tests.length; i += 1) {
    responseComponentsList.push(
      <ResponseComponent
        status={tests[i].status}
        payload={tests[i].payload}

        // fix later
        key={'DestPanelTest'+i}
      />,
    );
  }

  if (active) {
    return (
      <StyledPanel active={active}>
        <h1>Data destination panel</h1>
        <RequestBar
          SourceOrDest='dest'
          tests={tests}
          setTests={setTests}
        />
  
        {responseComponentsList}
      </StyledPanel>
    );
  }
  return (
    <StyledPanel onClick={onClickFunction} active={active}>
      <h1>Data destination panel</h1>
    </StyledPanel>
  );
};

export default DestinationPanel;
