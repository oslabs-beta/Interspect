import React from 'react';
import Button from '../components/Button';
import DataTree from '../components/DataTree';

const DataCanvas = (props) => {
  const { data } = props;
  // Display empty state for no data
  if (!data) {
    return (
      <section>
        <h2>Let’s get some data</h2>
        <p>To get started, send a request to any of your microservices—or open a data mockup</p>
        <Button title='Not yet functional'>Open Mockup</Button>
      </section>
    )
  }
  return (
    <DataTree data={data}/>
  )
}

export default DataCanvas;
