import React, { useState } from 'react';
import styled from 'styled-components';
import SourcePanel from './SourcePanel.jsx';
import TestPanel from './TestPanel.jsx';
import DestinationPanel from './DestinationPanel.jsx';
import { smallData } from '../dummyData';

const Panels = () => {
  const [activePanel, setActivePanel] = useState('source');
  const [treeCount, setDataTreeCount] = useState(0);
  const [data, setData] = useState(undefined);

  const PanelsWrapper = styled.section`
    display: flex;
  `;
  // Tests are objects with
  // { payload: JSON that represents test,
  //   status: initial value of '' };
  const [tests, setTests] = useState(
    [{
      payload: JSON.stringify({ message: 'hello by joe', created_by: 'joe' }),
      status: '',
    },
    {
      payload: JSON.stringify({ message: 'hello by conor', created_by: 'conor' }),
      status: '',
    },
    {
      payload: JSON.stringify({ message: 'hello by joe2', created_by: 'joe' }),
      status: '',
    },
    {
      payload: JSON.stringify({ message: 'hello by conor2', created_by: 'conor' }),
      status: '',
    }],
  );
  return (
    <PanelsWrapper>
      <SourcePanel treeCount={treeCount}
                   updateTreeCount={setDataTreeCount}
                   data={data}
                   setData={setData}/>
      <TestPanel treeCount={treeCount}
                 updateTreeCount={setDataTreeCount}
                 setData={setData}
                 data={data} />
      <DestinationPanel tests={tests} setTests={setTests} />
    </PanelsWrapper>
  );
};

export default Panels;
