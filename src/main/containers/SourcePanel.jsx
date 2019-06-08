import React, { useState } from 'react';
import UrlBar from './../components/urlBar.jsx';

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
    <UrlBar SourceOrDest="source" requestBody='' />
    </section>
  );
};

export default SourcePanel;
