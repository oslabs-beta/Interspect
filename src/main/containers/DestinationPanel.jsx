import React, { useState, useContext } from 'react';
import RequestBar from '../components/RequestBar.jsx';
import ResponseComponent from '../components/ResponseComponent.jsx';
import StyledPanel from './StyledPanel.jsx';
import { TestsContext } from './../testsContext.js';


const DestinationPanel = (props) => {
  const { active, onClickFunction, testsDiff, setCursor } = props;
  const [tests, setTests] = useContext(TestsContext);

  const responseComponentsList = [];
  for (let i = 0; i < tests.length; i += 1) {
    responseComponentsList.push(
      <ResponseComponent
        status={tests[i].status}
        payload={testsDiff[i]}

        // fix later
        key={`DestPanelTest ${i}`}
      />,
    );
  }

  if (active) {
    return (
      <StyledPanel active={active} onMouseOver={() => setCursor('default')}>
        <h1>Data destination panel</h1>
        <RequestBar
          SourceOrDest='dest'
          tests={tests}
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
