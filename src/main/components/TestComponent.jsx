import React, { useState } from 'react';

const TestComponent = (props) => {
  const {data, main, key} = props;
  const [json, setJson] = useState(data);

  if (main) {
    data
  }

  const handleChange = (e) => {
    console.log(typeof e.target.id, e.target.id);

    setData(e.target.value);
  }

  return (
    <div>
      <p>Here's a test!</p>
      <input
        type='text'
        id={'testInput' + key} 
        value={data}
        onChange={handleChange}
      />
      <button onClick={saveTest}>Save</button>
    </div>
  );
}

export default TestComponent;
