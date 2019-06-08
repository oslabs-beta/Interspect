import React, { useState } from 'react';

const RequestBar = (props) => {
  const method = (props.SourceOrDest === 'dest' ? 'POST' : 'GET')
  const [selected, setSelected] = useState(method);

  function sendFetch (e) {
    e.preventDefault();
    const sendingObj = { method: selected, mode: 'cors' };
    if (props.SourceOrDest === 'dest') sendingObj.body = JSON.stringify(props.requestBody);

    fetch(document.querySelector('#urlInput').value, sendingObj)
      .then(r => console.log(r));
  }

  console.log(props)

  return (
    <div>

      <form onSubmit={sendFetch} >
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
        <input id="urlInput" type="url"></input>
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}

export default RequestBar;
