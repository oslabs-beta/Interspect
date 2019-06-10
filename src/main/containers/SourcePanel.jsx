import React, { useState } from 'react';
import RequestBar from './../components/RequestBar.jsx';

const SourcePanel = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  function sendFetch (e) {
    e.preventDefault();
    const sendingObj = { method: selected, mode: 'cors' };

    props.setURL(document.querySelector('#urlInput').value);
    fetch(document.querySelector('#urlInput').value, sendingObj)
      .then(response => console.log(response));
  }

  return (
    <section className='panel'>
    <p>Data source panel</p>
      {/*
        Request bar
        Data canvas
      */}
    <RequestBar
      SourceOrDest="source"
      requestBody=''
      sendFetch={sendFetch}
    />
    </section>
  );
};

export default SourcePanel;
