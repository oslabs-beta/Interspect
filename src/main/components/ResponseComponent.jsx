import React, { useState, useEffect } from 'react';

const ResponseComponent = (props) => {
  const [statusCode, setStatusCode] = useState('');

  const dataObj = {
    method: document.querySelector('#fetchTypeInput2').value,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: props.testBody
  };

  useEffect(() => {
    if (props.url !== '') {
      fetch(props.url, dataObj)
      .then(response => {
        setStatusCode(response.status);
      })
      .catch(error => {
        console.log(error);
        setStatusCode(400);
      });
    }
  });

  let checkmark = '⊚';
  if (statusCode >= 200 && statusCode < 300) {
    checkmark = '✓';
  } else if (statusCode >= 300) checkmark = '✗';

  return (
    <div>
      <p>{checkmark + ' - ' + statusCode}</p>
      <textarea cols='50' rows='5'>
        {JSON.stringify(props.testBody)}
      </textarea>
    </div>
  );
};

export default ResponseComponent;
