import React, { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';
import DataTree from '../components/DataTree.jsx';
import EmptyState from '../components/EmptyState.jsx';

const DataCanvas = (props) => {
  const {
    data, treeCount, options,
  } = props;

  // Display empty state for no data
  if (!data) {
    return (
      <EmptyState>
        <h2>Let’s get some data</h2>
        <p>To get started, send a request to any of your microservices—or open a data mockup</p>
        <Button title='Not yet functional'>Open Mockup</Button>
      </EmptyState>
    );
  }
  // Increment tree count and render data
  // TreeCount will always be 0 or 1 -- fix
  return (
    <DataTree
      treeCount={treeCount}
      data={data}
      options={options}
    />
  );
};

export default DataCanvas;
