import React, { useState } from 'react';

const RequestBar = (props) => {
  const { SourceOrDest , setData, tests, setStatuses, statuses } = props;
  
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
    console.log('in sendFetch')

    if (SourceOrDest === 'source') {
      const sendingObj = { method: selected, mode: 'cors' };

      fetch(uri, sendingObj)
        .then(res => res.json())
        .then(res => setData(res));
    }
    else if (SourceOrDest === 'dest') {
      console.log('dest')
      const statusesClone = [...statuses];
      const sendingObj = { method: selected, mode: 'cors' };
      for (let i = 0; i < statuses.length; i++) {
        sendingObj.body = tests[i];
  
        fetch(uri, sendingObj)
          .then(response => {
            console.log('THE RESPONSE HERE', response);
            statusesClone[i] = response.status;
            console.log('THE statusesClone HERE', statusesClone[i]);
            setStatuses(statusesClone);
          })
          .catch(error => console.log(error));
      }
    } else {console.log('incorrect SourceOrDest!')}
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
