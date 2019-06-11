import React, { useState } from 'react';
import SourcePanel from './SourcePanel.jsx';
import TestPanel from './TestPanel.jsx';
import DestinationPanel from './DestinationPanel.jsx';

const Panels = () => {
  const [activePanel, setActivePanel] = useState('source');
  const [dataTreeCount, setDataTreeCount] = useState(0);
  const [data, setData] = useState(undefined);

  // Tests are objects with 
  // { payload: JSON that represents test, 
  //   status: initial value of '' }; 

  const [tests, setTests] = useState(
    [ JSON.stringify({ message: 'hello by joe', created_by: 'joe' }), 
      JSON.stringify({ message: 'hello by conor', created_by: 'conor' }) ]
  );
  const [statuses, setStatuses] = useState(['', '']);

  return (
    <section>
      <SourcePanel
        treeCount={dataTreeCount}
        updateTreeCount={setDataTreeCount}
        data={data}
        setData={setData}
      />
      <TestPanel
        treeCount={dataTreeCount}
        updateTreeCount={setDataTreeCount}
        setData={setData}
      />
      <DestinationPanel
        tests={tests}
        statuses={statuses}
        setStatuses={setStatuses}
      />
    </section>
  );
};

export default Panels;
