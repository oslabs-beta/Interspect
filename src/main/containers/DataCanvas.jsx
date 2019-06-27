import React, { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';
import DataTree from '../components/DataTree.jsx';
import EmptyState from '../components/EmptyState.jsx';
import ToggleBox from '../components/ToggleBox.jsx';

const DataCanvas = (props) => {
  const {
    data, treeId, options,
  } = props;

  // Display empty state for no data
  if (!data) {
    return (
      <EmptyState>
        <h2>Let’s get some data</h2>
        <p>To get started, send a request to any of your microservices <br/>or post http://localhost:3001/posturl</p>
        <Button title='Not yet functional'>Open Mockup</Button>
        <ToggleBox />
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
