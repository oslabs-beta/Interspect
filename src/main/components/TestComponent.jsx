import React, { useState } from 'react';

const TestComponent = (props) => {
  // data is the data response from msA 
  // key is the unique ID for this test component-- maps to tests[i]
  const {data, key, saveTest} = props;

  // Look at that, CS.  Looks like I might've been wrong :)
  // Setting this component's initial state to a prop 
  // because it will be the same `data` every time one is
  // created but each one is unique and can be changed.
  const [json, setJson] = useState(JSON.stringify(data));

  const handleChange = (e) => {
    // console.log(typeof e.target.id, e.target.id);
    setJson(e.target.value);
  }

  return (
    <div>
      <p> Here's a test! </p>
      <input
        type='text'
        id={'testInput' + key}
        value={json}
        onChange={handleChange}
      />
      <button
        id={'saveTest'+key}
        onClick={() => saveTest(data,key)}
      >Save Test</button>
    </div>
  );
}

export default TestComponent;
