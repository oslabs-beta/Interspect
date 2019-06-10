import React, { useState } from 'react';
import RequestBar from '../components/RequestBar.jsx';

const SourcePanel = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  return (
    <section className='panel'>
    <p>Data source panel</p>
      {/*
        Request bar
        Data canvas
      */}
    <RequestBar SourceOrDest='source' requestBody='' />
    </section>
  );
};

export default SourcePanel;
