import React, { useState } from 'react';
import DataCanvas from './DataCanvas';
import RequestBar from '../components/RequestBar.jsx';
import { smallData } from '../dummyData';

const SourcePanel = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(smallData);

  const { treeCount, updateTreeCount } = props;

  return (
    <section className='panel'>
      <h1>Data source panel</h1>
      <RequestBar SourceOrDest='source' requestBody='' />
      <DataCanvas treeCount={treeCount} updateTreeCount={updateTreeCount} data={data}/>
    </section>
  );
};

export default SourcePanel;
