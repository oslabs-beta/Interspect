import React, { useState } from 'react';

const RequestBar = (props) => {
  const {
    SourceOrDest, setData, tests, setTests,
  } = props;

  const method = (SourceOrDest === 'dest' ? 'POST' : 'GET');
  const [selected, setSelected] = useState(method);
  const [uri, setUri] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'method') setSelected(value);
    else if (name === 'uri') setUri(value);
  };

  function sendFetch (e) {
    e.preventDefault();

    if (SourceOrDest === 'source') {
      const sendingObj = { method: selected, mode: 'cors' };

      fetch(uri, sendingObj)
        .then(res => res.json())
        .then(res => {
          setTests([{ payload: res, status: '' }]);
          setData(res);
        });
    } else if (SourceOrDest === 'dest') {
      const testsClone = [...tests];
      const sendingObj = { method: selected, mode: 'cors' };
      let counter = 0;
      for (let i = 0; i < testsClone.length; i += 1) {
        sendingObj.body = JSON.stringify(testsClone[i].payload);

        fetch(uri, sendingObj)
          .then((response) => {
            counter += 1;
            testsClone[i].status = response.status;
            if (counter === testsClone.length) setTests(testsClone);
          })
          .catch(error => console.log(error));
      }
    }
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
