import React, { useState } from 'react';
import RequestBar from '../components/RequestBar.jsx';

const DestinationPanel = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  return (
    <section className='panel'>
    <p>Data destination panel</p>
    <RequestBar SourceOrDest='dest' requestBody='' />
    </section>
  );
};

export default DestinationPanel;
