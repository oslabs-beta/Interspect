import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { TestsContext } from '../testsContext';
import InlineForm from './InlineForm.jsx';
import InlineInput from './InlineInput.jsx';
import Button from './Button.jsx';

// Form styles
const Form = styled(InlineForm)`
  flex-direction: column;
  align-items: flex-start;
  margin: 1em auto;
`;

const Input = styled(InlineInput)`
  padding: 0;
  padding-bottom: 0.25em;
`;

const Label = styled.label`
  color:  #BCC1C2;
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.75em;
`;

const NameForm = (props) => {
  const {
    name, index, setMode, setName,
  } = props;

  // State
  const [tests, setTests] = useContext(TestsContext);
  const [newName, setNewName] = useState('');

  // Event handlers
  const handleSubmit = (event) => {
    event.preventDefault();
    const testsCopy = [...tests];
    testsCopy[index].name = newName;

    // Update name in test array, then set mockup “mode” to trigger re-render
    setName(newName, index);
    setTests(testsCopy);
    setMode('view');
  };

  const updateName = (event) => {
    const { value } = event.target;
    setNewName(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="name"
        type="text"
        placeholder={name}
        onChange={updateName}
      />
      <Label htmlFor="name">Name</Label>
      <Button style={{'margin-left': '100px'}} enabled={true} type="submit">Save</Button>
    </Form>
  );
};

export default NameForm;
