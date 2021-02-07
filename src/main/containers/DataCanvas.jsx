import React from 'react';
import DataTree from '../components/DataTree.jsx';
import EmptyState from '../components/EmptyState.jsx';
import Nodatasvg from '../../renderer/Nodatasvg.jsx';
import Button from '../components/Button.jsx';

const { ipcRenderer } = require('electron');

const DataCanvas = (props) => {
  const {
    data, treeId, options, listeningPort, setListeningPort, serverOn, setServerOn,
  } = props;

  const turnServerOn = (e) => {
    const port = Number(document.querySelector('#portNumInput').value);
    setListeningPort(port);
    setServerOn(true);
    ipcRenderer.send('activate_server', port);
  };

  const openFile = (e) => {
    ipcRenderer.send('open_file', true);
  };

  // Display empty state for no data
  if (!data) {
    return (
      <EmptyState>
        <h2>Let’s get some data</h2>
        <p>To get started, send a request to any of your microservices</p>
        {!serverOn
          && <Button enabled onClick={turnServerOn}> Turn HTTP request listening on </Button> }
        {!serverOn
          && <p>Port: <input id='portNumInput' defaultValue={listeningPort} type="number" min="0" max="8999"/></p>}
        <p>{(serverOn
          ? `or post JSON to http://localhost:${listeningPort}/`
          : 'to post JSON directly to Interspect')}</p>
        <Button enabled onClick={openFile}> Open Saved Tests </Button>
        <br/>
        <Nodatasvg />
      </EmptyState>
    );
  }
  // Increment tree count and render data
  return (
    <DataTree
      treeId={treeId}
      data={data}
      options={options}
    />
  );
};

export default DataCanvas;
