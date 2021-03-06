import React, { useState, useContext } from 'react';
import RequestBar from '../components/RequestBar.jsx';
import ResponseComponent from '../components/ResponseComponent.jsx';
import StyledPanel from './StyledPanel.jsx';
import { TestsContext } from '../testsContext';
import PerformanceMetrics from '../components/PerformanceMetrics.jsx';

const DestinationPanel = (props) => {
  const {
    active, data, fetchTimes, hContentType, onClickFunction, setFetchTimes,
  } = props;
  const [tests, setTests] = useContext(TestsContext);

  const responseComponentsList = [];
  for (let i = 0; i < tests.length; i += 1) {
    responseComponentsList.push(
      <ResponseComponent
        status={tests[i].status}
        data={data}
        payload={tests[i].payload}
        name={tests[i].name}
        diff={tests[i].diff}
        expectedStatus={tests[i].expectedStatus}
        // fix later
        key={`DestPanelTest ${i}`}
      />,
    );
  }

  const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

  if (active) {
    return (
      <StyledPanel active={active} style={{ cursor: 'default' }}>
        <div>
          <RequestBar
            SourceOrDest='dest'
            fetchTimes={fetchTimes}
            setFetchTimes={setFetchTimes}
            contentType={hContentType}
          />
          {responseComponentsList}
          {(fetchTimes.length > 0)
            && (fetchTimes.reduce(sumReducer) > 0)
            && <PerformanceMetrics fetchTimes={fetchTimes} />}
        </div>
      </StyledPanel>
    );
  }

  // only returned if not active
  return (
    <StyledPanel onClick={onClickFunction} active={active} style={{ cursor: 'pointer' }}>
      <h1>Destination</h1>
    </StyledPanel>
  );
};

export default DestinationPanel;
