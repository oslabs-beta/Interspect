import React from 'react';
import RequestBar from '../components/RequestBar.jsx';
import StyledPanel from './StyledPanel.jsx';


const SourcePanel = (props) => {
  const {
    setData, active, onClickFunction, setCursor
  } = props;


  if (active) {
    return (
      <StyledPanel active={active} onMouseOver={() => setCursor('default')}>
        <RequestBar SourceOrDest='source' setData={setData} />
        {props.datacanvas}
      </StyledPanel>
    );
  }

  return (
    <StyledPanel
      onClick={onClickFunction}
      active={active}
      onMouseOver={() => setCursor('pointer')}
    >
      <h1>Source</h1>
    </StyledPanel>
  );
};

export default SourcePanel;
