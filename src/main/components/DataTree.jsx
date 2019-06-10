import React, { useState, useEffect } from 'react';
import JsonTree from '../lib/treeView/jsonTree';
import '../lib/treeView/jsonTree.css';

const DataTree = (props) => {

  const renderTree = (htmlElement) => {
    const tree = JsonTree.create(props.data, htmlElement);
  };

  useEffect(() => {
    const test = document.getElementById('tree');
    renderTree(test);
  });

  return (
    <section className='wrapper' id='tree' style= {{ maxHeight: '250px', overflow: 'auto' }} >
      {/* Tree gets rendered here after component mounts */}
    </section>
  );
};

export default DataTree;
