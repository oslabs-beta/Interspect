import React, { useState } from 'react';
import RequestBar from './../components/RequestBar.jsx';
import ResponseComponent from '../components/ResponseComponent.jsx';

const DestinationPanel = (props) => {
  // const [isLoading, setLoading] = useState(false);
  // const [data, setData] = useState({});
  const [microserviceBurl, setMicroserviceBurl] = useState('');

  const testBodies= [ { message: 'hello by joe', created_by: 'joe' }, 
                      { message: 'hello 123', created_by: 'joe' } ];
  const responseComponentsList = [];

  // will be props.testBodies but not connected yet :D
  for (let i = 0; i < testBodies.length; i++) {
    responseComponentsList.push(
      <ResponseComponent
        testBody={testBodies[i]}
        url={microserviceBurl}
        key={i}
      />
    );
  };

  function sendFetch (e) {
    e.preventDefault();
    const sendingObj = { method: selected, mode: 'cors' };
    sendingObj.body = JSON.stringify(props.requestBody);

    props.setURL(document.querySelector('#urlInput').value);
    fetch(document.querySelector('#urlInput').value, sendingObj)
      .then(response => console.log(response));
  }


  return (
    <section className='panel'>
      <p> Data destination panel </p>
      <RequestBar
        SourceOrDest='dest'
        requestBody=''
        sendFetch={sendFetch}
        // setMicroserviceBurl={setMicroserviceBurl}
      />

      {responseComponentsList}
    </section>
  );
};

export default DestinationPanel;
