import React, { useState } from 'react';
import HeaderBar from './HeaderBar.jsx';

const RequestBar = (props) => {
  const {
    SourceOrDest, setData, tests, setTests,
  } = props;

  const method = (SourceOrDest === 'dest' ? 'POST' : 'GET');
  const [selected, setSelected] = useState(method);
  const [uri, setUri] = useState('');

  // header info
  const [headerType, setHeaderType] = useState('Authorization');
  const [authType, setType] = useState('Bearer Token');
  const [headerKey, setHeaderKey] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'method') setSelected(value);
    else if (name === 'uri') setUri(value);

    // header info
    if (name === 'Authentication') setHeaderType(value);
    if (name === 'headerKey') setHeaderKey(`Bearer ${value}`);

  };

  const runTest = (link, sendingObj, testsClone, i) => {
    const test = testsClone;
    fetch(link, sendingObj)
      .then((response) => {
        test[i].status = response.status;
        if (i === test.length - 1) setTests(test);
      })
      .catch(error => console.log(error));
  };

  function sendFetch (e) {
    e.preventDefault();

    if (SourceOrDest === 'source') {
      const sendingObj = { method: selected, mode: 'cors' };
      if (headerType !== 'NONE') sendingObj.headers = { [headerType]: headerKey };

      fetch(uri, sendingObj)
        .then(res => res.json())
        .then(res => {
          setTests([{ payload: res, status: '' }]);
          setData(res);
        });
    } else if (SourceOrDest === 'dest') {
      const testsClone = [...tests];
      const sendingObj = { method: selected, mode: 'cors' };
      if (headerType !== 'NONE') sendingObj.headers = { [headerType]: headerKey };

      for (let i = 0; i < testsClone.length; i += 1) {
        sendingObj.body = JSON.stringify(testsClone[i].payload);
        runTest(uri, sendingObj, testsClone, i);
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
      <HeaderBar header={headerType} authType={authType} handleChange={handleChange}/>
    </div>
  );
};

export default RequestBar;
