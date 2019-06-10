import React, { useState, useEffect } from 'react';
import JsonTree from '../lib/treeView/jsonTree';
import '../lib/treeView/jsonTree.css';

const ViewTest = (props) => {
  const [setLoading] = useState(false);
  // const [data, setData] = useState({});

  const renderTree = (htmlElm) => {
  // to test large and small data sets, use largeData, smallData
  // in first parameter in JsonTree.create
    const tree = JsonTree.create(props.testdata, htmlElm);
  };

  useEffect(() => {
    const test = document.getElementById('tree');
    renderTree(test);
  });

  return (
    <section className='wrapper' id='tree'style= {{ maxHeight: '250px', overflow: 'auto' }} >
      <p>TEST VIEWS</p>
      {/*
        Request bar
        Data canvas
      */}
    </section>
  );
};

export default ViewTest;
