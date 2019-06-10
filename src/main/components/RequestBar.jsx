import React, { useState } from 'react';

const RequestBar = (props) => {
  const method = (props.SourceOrDest === 'dest' ? 'POST' : 'GET')
  const [selected, setSelected] = useState(method);

  return (
    <div>
      <form onSubmit={props.sendFetch} >
        {
          (props.SourceOrDest === 'source') &&
          <select id='fetchTypeInput1' multiple={false} value={selected}
            onChange={(e) => setSelected(e.target.value)} >
            <option value='GET'>GET</option>
          </select>
        }
        {
          (props.SourceOrDest === 'dest') &&
          <select id='fetchTypeInput2' multiple={false} value={selected}
            onChange={(e) => setSelected(e.target.value)} >
            <option value='POST'>POST</option>
            <option value='PATCH'>PATCH</option>
            <option value='PUT'>PUT</option>
          </select>
        }
        <input id='urlInput' type='url'></input>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default RequestBar;
