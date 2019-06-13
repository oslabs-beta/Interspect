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
  const [tests, setTests] = useState([]);
  const [testsDiff, setTestsDiff] = useState([ {} ]);
  const [cursor, setCursor] = useState('default');

  const PanelsWrapper = styled.section`
    display: flex;
    cursor: ${cursor};
  `;
  // Tests are objects with
  // { payload: JSON that represents test,
  //   status: initial value of '' };

  return (
    <PanelsWrapper>
      <SourcePanel
        onClickFunction={() => setActivePanel('source')}
        treeCount={treeCount}
        updateTreeCount={setTreeCount}
        data={data}
        setData={setData}
        setTests={setTests}
        active={(activePanel === 'source')}
        setCursor={setCursor} />

      <TestPanel 
        onClickFunction={() => setActivePanel('test')}
        treeCount={treeCount}
        updateTreeCount={setTreeCount}
        data={data}
        setTests={setTests}
        tests={tests}
        active={(activePanel === 'test')}
        setCursor={setCursor}
        testsDiff={testsDiff}
        setTestsDiff={setTestsDiff} />

      <DestinationPanel 
        onClickFunction={() => setActivePanel('dest')}
        tests={tests}
        setTests={setTests}
        active={(activePanel === 'dest')}
        setCursor={setCursor}
        testsDiff={testsDiff} />

    </PanelsWrapper>
  );
};

export default Panels;
