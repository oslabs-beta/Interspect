import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';
import SourcePanel from './SourcePanel.jsx';
import MockupsPanel from './MockupsPanel.jsx';
import DestinationPanel from './DestinationPanel.jsx';
import DataCanvas from './DataCanvas.jsx';
import { TestsContext } from '../testsContext';

const socket = io.connect('http://localhost:3001/');

const Panels = () => {
  const [activePanel, setActivePanel] = useState('source');
  const [data, setData] = useState(undefined);
  const [getFetchTimes, setGetFetchTimes] = useState([]);
  const [postFetchTimes, setPostFetchTimes] = useState([]);
  const [hContentType, setContentType] = useState('');

  const [tests, setTests] = useContext(TestsContext);

  const PanelsWrapper = styled.section`
    display: flex;
    height: 100vh;
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
      treeId="rawdata"
      data={data}
      options={dataTreeOptions}
    />
  );

  socket.on('post_received', (postedData) => {
    setData(postedData);
    setTests([{
      payload: postedData, status: '', name: '', diff: {},
    }]);

    // clear old performance metrics on new post
    if (getFetchTimes.length) setGetFetchTimes([]);
    if (postFetchTimes.length) setPostFetchTimes([]);
  });

  return (
    <PanelsWrapper>
      <SourcePanel
        onClickFunction={() => setActivePanel('source')}
        datacanvas={datacanvas}
        setData={setData}
        active={(activePanel === 'source')}
        fetchTimes={getFetchTimes}
        setFetchTimes={setGetFetchTimes}
        setContentType={setContentType}
      />

      <MockupsPanel
        onClickFunction={() => setActivePanel('test')}
        datacanvas={datacanvas}
        data={data}
        active={(activePanel === 'test')}
      />

      <DestinationPanel
        active={(activePanel === 'dest')}
        data={data}
        fetchTimes={postFetchTimes}
        hContentType={hContentType}
        onClickFunction={() => setActivePanel('dest')}
        setFetchTimes={setPostFetchTimes}
      />
    </PanelsWrapper>
  );
};

export default Panels;
