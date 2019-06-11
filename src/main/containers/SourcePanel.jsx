import React, { useState } from 'react';
import RequestBar from '../components/RequestBar.jsx';

const SourcePanel = () => {
  const [data, setData] = useState({});

  function sendFetch (e) {
    e.preventDefault();
    const sendingObj = { method: selected, mode: 'cors' };

    props.setURL(document.querySelector('#urlInput').value);
    fetch(document.querySelector('#urlInput').value, sendingObj)
      // This will have to change and be passed along to the TestPanel
      // Presumably through the setData method
      .then(response => console.log(response));
  };

  const dataDisplay = ( (Object.keys(data).length > 0) ?
    <p>{JSON.stringify(myObj)}</p> :
    <p>No Data Yet :)</p>
  );

  return (
    <section className='panel'>
    <p>Data source panel</p>
      {/*
        Request bar
        Data canvas
      */}
    <RequestBar
      SourceOrDest='source'
      requestBody=''
      sendFetch={sendFetch}
    />
    {dataDisplay}
    </section>
  );
};

export default SourcePanel;
