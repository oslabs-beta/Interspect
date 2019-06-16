import React, { useState, useContext } from 'react';
import DataCanvas from './DataCanvas.jsx';
import RequestBar from '../components/RequestBar.jsx';
import StyledPanel from './StyledPanel.jsx';
import { TestsContext } from './../testsContext.js';


const SourcePanel = (props) => {
  const {
    treeCount, updateTreeCount, data, setData, active, onClickFunction, setCursor
  } = props;

  const [tests, setTests] = useContext(TestsContext);

  const dataTreeOptions = {
    onAdd: false,
    onEdit: false,
    onDelete: false,
    enableClipboard: false,
  };

  if (active) {
    return (
      <StyledPanel active={active} onMouseOver={() => setCursor('default')}>
        <RequestBar SourceOrDest='source' setData={setData} />
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
