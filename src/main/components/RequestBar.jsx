import React, { useState } from 'react';

const RequestBar = (props) => {
  const { SourceOrDest, requestBody, setData } = props;

  const method = (SourceOrDest === 'dest' ? 'POST' : 'GET');
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
    sendingObj.headers = {
      'Content-Type': 'application/json',
      token_type: 'Bearer',
      Authorization: 'Bearer RCHzqJmqDK-BgGQYiNjqjV5f0GuhOybwvvkSJGkWDKTdX03BXU3aT83MMKNmdoKvs3_sy4vWgj-60sDtbYb_WkLs0jvYoyzWyPZXiqNAs4JoN7J2vQ626rcQI4DkXHYx',
    };
    console.log(sendingObj);

    if (SourceOrDest === 'dest') sendingObj.body = JSON.stringify(requestBody);

    fetch(uri, sendingObj)
      .then(res => res.json())
      .then(res => setData(res));
  }

  return (
    <div>
      <form onSubmit={sendFetch} >
        {
          (SourceOrDest === 'source')
          && <select name='method' id='fetchTypeInput' multiple={false} value={selected}
            onChange={handleChange} >
            <option value='GET'>GET</option>
          </select>
        }
        {
          (SourceOrDest === 'dest')
          && <select name='method' id='fetchTypeInput' multiple={false} value={selected}
            onChange={handleChange} >
            <option value='POST'>POST</option>
            <option value='PATCH'>PATCH</option>
            <option value='PUT'>PUT</option>
          </select>
        }
        <input name='uri' id='urlInput' type='url' onChange={handleChange}></input>
        <button type='submit' value='Submit'>Submit</button>
      </form>
    </div>
  );
};

export default RequestBar;
