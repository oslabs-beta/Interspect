import React, { useState } from 'react';
import DataCanvas from './DataCanvas.jsx';
import RequestBar from '../components/RequestBar.jsx';
import { smallData } from '../dummyData';

const SourcePanel = (props) => {
  const {
    treeCount, updateTreeCount, data, setData,
  } = props;

  return (
    <section className='panel'>
      <h1>Data source panel</h1>
      <RequestBar SourceOrDest='source' setData={setData}/>
      <DataCanvas treeCount={treeCount} updateTreeCount={updateTreeCount} data={data}/>
    </section>
  );
};

export default SourcePanel;
