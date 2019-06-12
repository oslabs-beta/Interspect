import React, { useState } from 'react';
import SourcePanel from './SourcePanel.jsx';
import TestPanel from './TestPanel.jsx';
import DestinationPanel from './DestinationPanel.jsx';
// import { testsData } from '../dummyData';

const Panels = () => {
  const [activePanel, setActivePanel] = useState('source');
  const [dataTreeCount, setDataTreeCount] = useState(0);
  const [data, setData] = useState(undefined);

  // Tests are objects with 
  // { payload: JSON that represents test,
  //   status: initial value of '' };
  const [tests, setTests] = useState([]); 

  return (
    <section>
      <SourcePanel treeCount={dataTreeCount}
                   updateTreeCount={setDataTreeCount}
                   data={data}
                   setData={setData} />
      <TestPanel treeCount={dataTreeCount}
                 updateTreeCount={setDataTreeCount}
                 data={data}
                 setTests={setTests}
                 tests={tests} />
      <DestinationPanel
                 tests={tests}
                 setTests={setTests} />
    </section>
  );
};

export default Panels;
