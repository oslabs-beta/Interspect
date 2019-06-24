import React from 'react';
import Form from './InlineForm.jsx';
import Select from './InlineSelect.jsx';
import Input from './InlineInput.jsx';

const HeaderBar = (props) => {
  const {
    header, authType, handleChange,
  } = props;

  return (
    <div>
      <Form bordered={false}>
        <Select
          name='Authentication'
          id='headerTypeInput'
          multiple={false}
          value={header}
          onChange={handleChange}
        >
          <option value='Authorization'>Authorization</option>
          <option value='NONE'>none</option>
        </Select>
        <Select
          name='authType'
          id='typeInput'
          multiple={false}
          value={authType}
          onChange={handleChange}
        >
          <option value={authType}>{authType}</option>
        </Select>
        <Input bordered={false} name='headerKey' id='headerInput' type='text' onChange={handleChange} />
      </Form>
    </div>
  );
};

export default HeaderBar;
