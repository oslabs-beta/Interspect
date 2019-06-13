import React from 'react';

const HeaderBar = (props) => {
  const {
    header, authType, handleChange,
  } = props;

  return (
    <div>
      <p>Headers</p>
      <form>
      <select name='header' id='headerTypeInput' multiple={false} value={header}
            onChange={handleChange} >
            <option value='Authorization'>Authorization</option>
            <option value='NONE'>none</option>
          </select>
          <select name='authType' id='typeInput' multiple={false} value={authType}
            onChange={handleChange} >
            <option value={authType}>{authType}</option>
          </select>
          <input name='headerKey' id='headerInput' type='text' onChange={handleChange}></input>
      </form>
    </div>
  );

};

export default HeaderBar;
