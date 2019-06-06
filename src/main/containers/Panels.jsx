import React, { useState } from 'react';
import SourcePanel from './SourcePanel.jsx';
import TestPanel from './TestPanel.jsx';
import DestinationPanel from './DestinationPanel.jsx';

const Panels = () => {
  const [activePanel, setActivePanel] = useState('source');

  return (
    <section>
      <SourcePanel/>
      <TestPanel/>
      <DestinationPanel/>
    </section>
  );
};

export default Panels;
