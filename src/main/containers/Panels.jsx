import React, { useState } from 'react';
import styled from 'styled-components';
import SourcePanel from './SourcePanel.jsx';
import TestPanel from './TestPanel.jsx';
import DestinationPanel from './DestinationPanel.jsx';
// import { testsData } from '../dummyData';
// import { smallData } from '../dummyData';

const Panels = () => {
  const [activePanel, setActivePanel] = useState('source');
  const [treeCount, setTreeCount] = useState(0);
  const [data, setData] = useState(undefined);

  const PanelsWrapper = styled.section`
    display: flex;
    height: 80vh;
  `;
  // Tests are objects with
  // { payload: JSON that represents test,
  //   status: initial value of '' };
  const [tests, setTests] = useState([]);

  return (
    <PanelsWrapper>
      <SourcePanel
        onClickFunction={() => setActivePanel('source')}
        treeCount={treeCount}
        updateTreeCount={setTreeCount}
        data={data}
        setData={setData}
        setTests={setTests}
        active={(activePanel === 'source')} />
      <TestPanel 
        onClickFunction={() => setActivePanel('test')}
        treeCount={treeCount}
        updateTreeCount={setTreeCount}
        data={data}
        setTests={setTests}
        tests={tests}
        active={(activePanel === 'test')} />
      <DestinationPanel 
        onClickFunction={() => setActivePanel('dest')}
        tests={tests}
        setTests={setTests}
        active={(activePanel === 'dest')} />
    </PanelsWrapper>
  );
};

export default Panels;
