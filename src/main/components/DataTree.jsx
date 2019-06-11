import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import JsonTree from '../lib/treeView/jsonTree';
import '../lib/treeView/jsonTree.css';

const DataTree = (props) => {
  const { treeCount, data } = props;

  const renderTree = (htmlElement) => {
    const tree = JsonTree.create(data, htmlElement);
  };

  const changeObject = (val) => {
    console.log(val);
  };

  useEffect(() => {
    const test = document.getElementById(`tree-${treeCount}`);
    // renderTree(test);
  });

  return (
    <section className='wrapper' id={`tree-${treeCount}`} style= {{ maxHeight: '350px', overflow: 'auto' }} >
      {/* Tree gets rendered here after component mounts */}
      <ReactJson src={data} theme='bright:inverted' iconStyle='square'
        onEdit={changeObject} onAdd={changeObject} onDelete={changeObject}/>
    </section>
  );
};

export default DataTree;
