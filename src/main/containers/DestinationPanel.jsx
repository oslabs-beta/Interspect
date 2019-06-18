import React, { useState, useContext } from 'react';
import RequestBar from '../components/RequestBar.jsx';
import ResponseComponent from '../components/ResponseComponent.jsx';
import StyledPanel from './StyledPanel.jsx';
import { TestsContext } from '../testsContext';
import PerformanceMetrics from './../components/PerformanceMetrics.jsx'

const DestinationPanel = (props) => {
  const {
    active, onClickFunction, testsDiff, setCursor, fetchTimes, setFetchTimes
  } = props;
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
        <RequestBar
          SourceOrDest='dest'
          fetchTimes={fetchTimes}
          setFetchTimes={setFetchTimes}
        />
        { (fetchTimes.length > 0) && (fetchTimes.reduce((acc, val) => {acc+val}) > 0) && <PerformanceMetrics fetchTimes={fetchTimes} />}
        {responseComponentsList}
      </StyledPanel>
    );
  }

  // only returned if not active
  return (
    <StyledPanel onClick={onClickFunction} active={active}>
      <h1>Destination</h1>
    </StyledPanel>
  );
};

export default DestinationPanel;
