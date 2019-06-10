import React, { useState } from 'react';

const RequestBar = (props) => {
  const method = (props.SourceOrDest === 'dest' ? 'POST' : 'GET');
  const [selected, setSelected] = useState(method);
  const [uri, setUri] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'method') setSelected(value);
    else if (name === 'uri') setUri(value);
  };

  function sendFetch(e) {
    e.preventDefault();
    const sendingObj = { method: selected, mode: 'cors' };
    if (props.SourceOrDest === 'dest') sendingObj.body = JSON.stringify(props.requestBody);

    fetch(uri, sendingObj)
      .then(res => res.json())
      .then(res => console.log(res));
  }

  return (
    <div>
      <form onSubmit={sendFetch} >
        {
          (props.SourceOrDest === 'source')
          && <select name='method' id='fetchTypeInput' multiple={false} value={selected}
            onChange={handleChange} >
            <option value='GET'>GET</option>
          </select>
        }
        {
          (props.SourceOrDest === 'dest')
          && <select name='method' id='fetchTypeInput' multiple={false} value={selected}
            onChange={handleChange} >
            <option value='POST'>POST</option>
            <option value='PATCH'>PATCH</option>
            <option value='PUT'>PUT</option>
          </select>
        }
        <input name='uri' id='urlInput' type='url' onChange={handleChange}></input>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default RequestBar;
