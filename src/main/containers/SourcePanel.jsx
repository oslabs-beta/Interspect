import React, { useState } from 'react';
import DataCanvas from './DataCanvas.jsx';
import RequestBar from '../components/RequestBar.jsx';
import StyledPanel from './StyledPanel.jsx';

const SourcePanel = (props) => {
  const {
    treeCount, updateTreeCount, data, setData, setTests, active, onClickFunction
  } = props;

  const dataTreeOptions = {
    onAdd: false,
    onEdit: false,
    onDelete: false,
    enableClipboard: false,
  };

  if (active) {
    return (
      <StyledPanel active={active}>
        <h1>Data source panel</h1>
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
    <StyledPanel onClick={onClickFunction} active={active}>
      <h1>Data source panel</h1>
    </StyledPanel>
  );
};

export default SourcePanel;
