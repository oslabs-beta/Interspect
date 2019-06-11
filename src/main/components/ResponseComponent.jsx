import React, { useState, useEffect } from 'react';

const ResponseComponent = (props) => {
  const {status, payload} = props;

  let checkmark = '⊚';
  if (status >= 200 && status < 300) {
    checkmark = '✓';
  } else if (status >= 300) checkmark = '✗';

  return (
    <div>
      <p>{checkmark + ' - ' + status}</p>
      <textarea cols='50' rows='5'>
        {payload}
      </textarea>
    </div>
  );
};

export default ResponseComponent;
