import React, { useState } from 'react';
import DataCanvas from './DataCanvas.jsx';
import RequestBar from '../components/RequestBar.jsx';
import StyledPanel from './StyledPanel.jsx';

const SourcePanel = (props) => {
  const {
    treeCount, updateTreeCount, data, setData,
  } = props;

  const dataTreeOptions = {
    onAdd: false,
    onEdit: false,
    onDelete: false,
    enableClipboard: false,
  };

  return (
    <StyledPanel>
      <h1>Data source panel</h1>
      <RequestBar SourceOrDest='source' setData={setData}/>
      <DataCanvas
        treeCount={treeCount}
        updateTreeCount={updateTreeCount}
        data={data}
        options={dataTreeOptions}
      />
    </StyledPanel>
  );
};

export default SourcePanel;
