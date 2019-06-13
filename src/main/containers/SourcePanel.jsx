import React, { useState } from 'react';
import DataCanvas from './DataCanvas.jsx';
import RequestBar from '../components/RequestBar.jsx';
import StyledPanel from './StyledPanel.jsx';

const SourcePanel = (props) => {
  const {
    treeCount, updateTreeCount, data, setData, setTests, active, onClickFunction, setCursor
  } = props;

  const dataTreeOptions = {
    onAdd: false,
    onEdit: false,
    onDelete: false,
    enableClipboard: false,
  };

  if (active) {
    return (
      <StyledPanel active={active} onMouseOver={() => setCursor('default')}>
        <RequestBar SourceOrDest='source' setData={setData} setTests={setTests} />
        <DataCanvas
          treeCount={treeCount}
          updateTreeCount={updateTreeCount}
          data={data}
          options={dataTreeOptions}
        />
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
