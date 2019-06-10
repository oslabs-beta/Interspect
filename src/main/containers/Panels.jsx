import React, { useState } from 'react';
import SourcePanel from './SourcePanel.jsx';
import TestPanel from './TestPanel.jsx';
import DestinationPanel from './DestinationPanel.jsx';

const Panels = () => {
  const [activePanel, setActivePanel] = useState('source');
  const [dataTreeCount, setDataTreeCount] = useState(0);

  return (
    <section>
      <SourcePanel treeCount={dataTreeCount} updateTreeCount={setDataTreeCount}/>
      <TestPanel treeCount={dataTreeCount} updateTreeCount={setDataTreeCount}/>
      <DestinationPanel/>
    </section>
  );
};

export default Panels;
