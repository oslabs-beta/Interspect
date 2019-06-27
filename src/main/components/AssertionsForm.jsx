import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { TestsContext } from '../testsContext';
import Select from './InlineSelect.jsx';
import InlineInput from './InlineInput.jsx';
import Form from './InlineForm.jsx';
import Button from './Button.jsx';

// Styles
const FormWrapper = styled.section`
  background: #F0F3F4;
  border-radius: 5px;
  box-shadow: inset 0 0 2px 0 rgba(41, 47, 50, 0.25);
  padding: 0.5em 1.5em;
  h3 {
    color: #555B5E;
    font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-feature-settings: 'ss18';
    font-size: 1em;
    letter-spacing: 0.075em;
    text-transform: uppercase;
  }
`;

const Input = styled(InlineInput)`
  background: none;
  margin: 0 1em;
  padding: 0 0 0.25em 0.25em;
  text-align: center;
`;

const Fieldset = styled.fieldset`
  border: none;
`;

const Label = styled.label`
  color: #292F32;
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const AssertionsForm = (props) => {
  const { index, setMode } = props;

  // State
  const [isRange, setIsRange] = useState(true);
  const [minCode, setMinCode] = useState(200);
  const [maxCode, setMaxCode] = useState(299);
  const [exactCode, setExactCode] = useState(200);
  const [tests, setTests] = useContext(TestsContext);

  // Event handlers
  const handleChange = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case 'rangeSelector':
        if (value === 'range') setIsRange(true);
        else setIsRange(false);
        break;
      case 'min-code':
        setMinCode(Number.parseInt(value, 10));
        break;
      case 'max-code':
        setMaxCode(Number.parseInt(value, 10));
        break;
      case 'exact-code':
        setExactCode(Number.parseInt(value, 10));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const testsCopy = [...tests];
    const status = isRange ? [minCode, maxCode] : [exactCode];
    testsCopy[index].expectedStatus = status;
    setTests(testsCopy);
    setMode('view');
  };

  return (
    <FormWrapper>
      <h3>Test Assertions</h3>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="status-code">Status Code</Label>
        <Fieldset name="status-code">
          <Select onChange={handleChange} name="rangeSelector">
            <option value="range">Range</option>
            <option value="exact">Exact Code</option>
          </Select>
          <Input
            onChange={handleChange}
            name={isRange ? 'min-code' : 'exact-code'}
            defaultValue={isRange ? minCode : exactCode}
            maxLength="3"
            min="100"
            max="599"
            type="number"
            bordered={false}>
          </Input>
          {isRange && <span>—</span>}
          {isRange && <Input
            onChange={handleChange}
            name="max-code"
            defaultValue={maxCode}
            maxLength="3"
            min={minCode + 1}
            max="599"
            type="number"
            bordered={false}>
          </Input>}
        </Fieldset>
        <Button enabled={true} type="submit" variation="positive">Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default AssertionsForm;
