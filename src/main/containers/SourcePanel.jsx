import React, { useState } from 'react';
import DataCanvas from './DataCanvas';
import RequestBar from '../components/RequestBar.jsx';

const SourcePanel = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);

  return (
    <section className='panel'>
      <h1>Data source panel</h1>
      <RequestBar SourceOrDest='source' requestBody='' />
      <DataCanvas data={data}/>
    </section>
  );
};

export default SourcePanel;
