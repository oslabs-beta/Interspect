import React, { useState } from 'react';
import RequestBar from '../components/RequestBar.jsx';
import StyledPanel from './StyledPanel.jsx';
import PerformanceMetrics from '../components/PerformanceMetrics.jsx';

const SourcePanel = (props) => {
  const {
    setData, active, onClickFunction, datacanvas, fetchTimes, setFetchTimes,
  } = props;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (active) {
    return (
      <StyledPanel active={active} style={{ cursor: 'default' }}>
        <RequestBar SourceOrDest='source' setData={setData} setFetchTimes={setFetchTimes} />
        {datacanvas}
        { (fetchTimes.length > 0)
          && (fetchTimes.reduce(reducer) > 0)
          && <PerformanceMetrics fetchTimes={fetchTimes} /> }
      </StyledPanel>
    );
  }

  return (
    <StyledPanel
      onClick={onClickFunction}
      active={active}
      style={{ cursor: 'pointer' }}
    >
      <h1>Source</h1>
    </StyledPanel>
  );
};

export default SourcePanel;
