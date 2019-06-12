import React, { useState } from 'react';
import DataTree from '../components/DataTree.jsx';
// sample JSON to pass down as props. Will be able to remove as the project evolves.
import { largeData, smallData } from '../dummyData';
import DataCanvas from './DataCanvas.jsx';

// will need to get data from the get request to pass to the formatted view

const TestPanel = (props) => {
  const { data, updateTreeCount } = props;
  const [mockups, setData] = useState([props.data]);
  const dataTreeOptions = {
    onAdd: false,
    onEdit: false,
    onDelete: false,
    enableClipboard: false,
  };

  return (
    <section className='panel' >
      <p>Test panel</p>
      <DataCanvas 
        data={data} 
        updateTreeCount={updateTreeCount} 
        options={dataTreeOptions}
      />
    </section>
  );
};

export default TestPanel;
