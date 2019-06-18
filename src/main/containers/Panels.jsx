import React, { useState } from 'react';
import styled from 'styled-components';
import SourcePanel from './SourcePanel.jsx';
import TestPanel from './TestPanel.jsx';
import DestinationPanel from './DestinationPanel.jsx';
import DataCanvas from './DataCanvas.jsx';
// import { smallData, testsData } from '../dummyData';

const Panels = () => {
  const [activePanel, setActivePanel] = useState('source');
  const [data, setData] = useState(undefined);
  const [testsDiff, setTestsDiff] = useState([{}]);
  const [cursor, setCursor] = useState('default');
  const [getFetchTimes, setGetFetchTimes] = useState([]);
  const [postFetchTimes, setPostFetchTimes] = useState([]);

  const PanelsWrapper = styled.section`
    display: flex;
    height: 80vh;
    cursor: ${cursor};
  `;

  // Create DataCanvas component for component composition to
  // be passed down as a prop to the panels that render it
  const dataTreeOptions = {
    onAdd: false,
    onEdit: false,
    onDelete: false,
    enableClipboard: false,
  };

  const datacanvas = (
    <DataCanvas
      treeId={'rawdata'}
      data={data}
      options={dataTreeOptions} />
  );

  return (
    <PanelsWrapper>
      <SourcePanel
        onClickFunction={() => setActivePanel('source')}
        datacanvas={datacanvas}
        setData={setData}
        active={(activePanel === 'source')}
        fetchTimes={getFetchTimes}
        setFetchTimes={setGetFetchTimes}
        setCursor={setCursor} />

      <TestPanel
        onClickFunction={() => setActivePanel('test')}
        datacanvas={datacanvas}
        data={data}
        active={(activePanel === 'test')}
        setCursor={setCursor}
        testsDiff={testsDiff}
        setTestsDiff={setTestsDiff} />

      <DestinationPanel
        onClickFunction={() => setActivePanel('dest')}
        active={(activePanel === 'dest')}
        setCursor={setCursor}
        fetchTimes={postFetchTimes}
        setFetchTimes={setPostFetchTimes}
        testsDiff={testsDiff} />
    </PanelsWrapper>
  );
};

export default Panels;
