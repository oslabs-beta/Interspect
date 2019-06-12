import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import JsonTree from '../lib/treeView/jsonTree';
import '../lib/treeView/jsonTree.css';

const DataTree = (props) => {
  const { treeCount, data, options, saveUpdatedTree } = props;
  const {
    onAdd, onEdit, onDelete, enableClipboard,
  } = options;

  const renderTree = (htmlElement) => {
    const tree = JsonTree.create(data, htmlElement);
  };

  const changeObject = (val) => {
    console.log(val);
  };

  return (
    <section className='wrapper' id={`tree-${treeCount}`} style={{ maxHeight: '350px', overflow: 'auto' }} >
      {/* Tree gets rendered here after component mounts */}
      <ReactJson
        src={data}
        theme='bright:inverted'
        iconStyle='square'
        onAdd={onAdd}
        onEdit={(onEdit) ? (src) => {
          console.log('src', src);
          saveUpdatedTree(src.updated_src, treeCount) }
          : false}
        onDelete={onDelete}
        enableClipboard={enableClipboard}
      />
    </section>
  );
};

export default DataTree;
