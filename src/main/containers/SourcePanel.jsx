import React, { useState } from 'react';

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
    </section>
  );
};

export default SourcePanel;
