import React, { useState } from 'react';
import UrlBar from './../components/urlBar.jsx';

const DestinationPanel = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  return (
    <section className='panel'>
    <p>Data destination panel</p>
    <UrlBar SourceOrDest="dest" requestBody='' />
    </section>
  );
};

export default DestinationPanel;
