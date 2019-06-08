import React, { useState } from 'react';
import DataCanvas from './DataCanvas';

const SourcePanel = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  return (
    <section className='panel'>
      <h1>Data source panel</h1>
      {/* Request bar will go here */}
      <DataCanvas data={undefined}/>
    </section>
  );
};

export default SourcePanel;
