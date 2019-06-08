import React, { useState } from 'react';

const UrlBar = (props) => {
  const method = (props.AorB === 'B' ? 'POST' : 'GET')
  const [selected, setSelected] = useState(method);

  function sendFetch () {
    const sendingObj = { method: selected, mode: 'cors' };
    if (props.SourceOrDest === 'dest') sendingObj.body = JSON.stringify(props.requestBody);

    // console.log('hello;', document.querySelector('#urlInput').value);

    fetch(document.querySelector('#urlInput').value, sendingObj)
      //.then(r => r.json())
      .then(r1 => console.log(r1));
  }

  console.log(props)

  return (
    <div>

      <div > {/* onSubmit={sendFetch} */}
        {
          (props.SourceOrDest === 'source') &&
          <select id='fetchTypeInput' multiple={false} value={selected}
            onChange={(e) => setSelected(e.target.value)} >
            <option value="GET">GET</option>
          </select>
        }
        {
          (props.SourceOrDest === 'dest') &&
          <select id='fetchTypeInput' multiple={false} value={selected}
            onChange={(e) => setSelected(e.target.value)} >
            <option value="POST">POST</option>
            <option value="PATCH">PATCH</option>
            <option value="PUT">PUT</option>
          </select>
        }
        <input id="urlInput"></input>
        <input type="submit" value="Submit" onClick={sendFetch} />
      </div>

      {/* <select value={optionsState}>
        <option selected value="get">GET</option>
        <option value="post">POST</option>
      </select> */}

    </div>
  );
}

export default UrlBar;
