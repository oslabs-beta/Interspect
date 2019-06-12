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
    [ {payload : JSON.stringify({ message: 'hello by joe', created_by: 'joe' }),
        status: '' }, 
      {payload : JSON.stringify({ message: 'hello by conor', created_by: 'conor' }),
        status: '' },
      {payload : JSON.stringify({ message: 'hello by joe2', created_by: 'joe' }),
        status: '' }, 
      {payload : JSON.stringify({ message: 'hello by conor2', created_by: 'conor' }),
        status: '' } ]
  );

  return (
    <section>
      <SourcePanel treeCount={dataTreeCount}
                   updateTreeCount={setDataTreeCount}
                   data={data}
                   setData={setData}/>
      <TestPanel treeCount={dataTreeCount}
                 updateTreeCount={setDataTreeCount}
                 data={data}
                 setTests={setTests}
                 tests={tests} />
      <DestinationPanel
                 tests={tests}
                 setTests={setTests}
      />
    </section>
  );
};

export default Panels;
