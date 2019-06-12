import React, { useState, useEffect } from 'react';

const HeaderBar = (props) => {
  console.log(props);
  const headKey = 'Authorization';
  const AuthType = 'Bearer Token';
  const [selected, setSelected] = useState(headKey);
  const [type, setType] = useState(AuthType);
  const [headerKey, setHeaderKey] = useState('');
  console.log(selected);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    if (name === 'header') setSelected(value);

  };

  return (
    <div>
      <p>Header Bar</p>
      <form>
      <select name='header' id='headerTypeInput' multiple={false} value={selected}
            onChange={handleChange} >
            <option value='Authorization'>Authorization</option>
            <option value='NONE'>none</option>
          </select>
          <select name='authType' id='typeInput' multiple={false} value={type}
            onChange={handleChange} >
            <option value={type}>{type}</option>
          </select>
          <input name='headerKey' id='headerInput' type='text' onChange={handleChange}></input>
      </form>
    </div>
  );

};

export default HeaderBar;
