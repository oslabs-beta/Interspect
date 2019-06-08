import React, { useState } from 'react';

const DestinationPanel = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  return (
    <section className='panel'>
    <p>Data destination panel</p>
    </section>
  );
};

export default DestinationPanel;