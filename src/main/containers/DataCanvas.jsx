import React, { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';
import DataTree from '../components/DataTree.jsx';

const DataCanvas = (props) => {
  const { data, treeCount, updateTreeCount, options } = props;
  // const { onAdd, onEdit, onDelete, enableClipboard } = options;
  // Display empty state for no data
  if (!data) {
    return (
      <section>
        <h2>Let’s get some data</h2>
        <p>To get started, send a request to any of your microservices—or open a data mockup</p>
        <Button title='Not yet functional'>Open Mockup</Button>
      </section>
    );
  }
  // Increment tree count and render data
  if (!treeCount) updateTreeCount(1);
  return (
    <DataTree 
      treeCount={treeCount}
      data={data}
      options={options}
    />
  );
};

export default DataCanvas;
