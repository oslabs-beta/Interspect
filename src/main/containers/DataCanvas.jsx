import React, { useState } from 'react';

const DataCanvas = (props) => {
  const { data } = props;
  // Display empty state for no data
  if (!data) {
    return (
      <section>
        <h2>Let’s get some data</h2>
        <p>To get started, send a request to any of your microservices—or open a data mockup</p>
      </section>
    )
  }
  return (
    <p>Looks like you have data: {data}</p>
  )
}

export default DataCanvas;
