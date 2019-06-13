import React, { useState } from 'react';
import SourcePanel from './SourcePanel.jsx';
import TestPanel from './TestPanel.jsx';
import DestinationPanel from './DestinationPanel.jsx';
// import { testsData } from '../dummyData';
// import { smallData } from '../dummyData';

const Panels = () => {
  const [activePanel, setActivePanel] = useState('source');
  const [treeCount, setTreeCount] = useState(0);
  const [data, setData] = useState(undefined);

  // Tests are objects with 
  // { payload: JSON that represents test,
  //   status: initial value of '' };
  const [tests, setTests] = useState([{ payload: data, status: '' }]); 

  return (
    <section>
      <SourcePanel treeCount={treeCount}
                   updateTreeCount={setTreeCount}
                   data={data}
                   setData={setData} />
      <TestPanel treeCount={treeCount}
                 updateTreeCount={setTreeCount}
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
