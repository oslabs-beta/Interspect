import React, { useState, useEffect } from 'react';
import DataTree from '../components/DataTree.jsx';
import EmptyState from '../components/EmptyState.jsx';
import Nodatasvg from '../../renderer/Nodatasvg.jsx';

const DataCanvas = (props) => {
  const {
    data, treeId, options,
  } = props;

  // Display empty state for no data
  if (!data) {
    return (
      <EmptyState>
        <h2>Let’s get some data</h2>
        <p>To get started, send a request to any of your microservices <br/>or post JSON to http://localhost:3001/posturl</p>
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
