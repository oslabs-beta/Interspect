import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import StyledPanel from './StyledPanel.jsx';
import { TestsContext } from '../testsContext';
import Button from '../components/Button.jsx';
import DataTree from '../components/DataTree.jsx';
import Form from '../components/InlineForm.jsx';
import Input from '../components/InlineInput.jsx';

// will need to get data from the get request to pass to the formatted view
const MockupsPanel = (props) => {
  const {
    active, datacanvas, data, onClickFunction, setTestsDiff, testsDiff, setCursor,
  } = props;

  const [tests, setTests] = useContext(TestsContext);
  const [testsListCounter, setTestsListCounter] = useState(0);

  const dataTreeOptions = {
    onAdd: true,
    onEdit: true,
    onDelete: true,
    enableClipboard: false,
  };

  function saveUpdatedTree(newData, arrayPosition, newValue, name, namespace) {
    // Update tests
    const testsClone = [...tests];
    testsClone[arrayPosition].payload = newData;
    setTests(testsClone);

    // Update tests differences/changes
    const testsDiffClone = [...testsDiff];
    // for deletion-- find better syntax
    if (!testsDiffClone[arrayPosition][namespace]) {
      testsDiffClone[arrayPosition][namespace] = {};
    }
    testsDiffClone[arrayPosition][namespace][name] = newValue;
    setTestsDiff(testsDiffClone);
  }

  const Name = styled.h3`
    font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:  #999;
  `;

  const Label = styled.label`
    color:  #999;
    font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.9em;
    text-transform: uppercase;
  `;

  const ModForm = styled(Form)`
    flex-direction: column;
    align-items: flex-start;
  `;

  const updateName = (name, index) => {
    const testsCopy = [...tests];
    testsCopy[index].name = name;
    setTests(testsCopy);
  };

  const mockupsListDisplay = [];
  let i = 0;
  tests.forEach((test, index) => {
    const { name } = test;
    
    const NameForm = <ModForm onSubmit={(e) => {
        e.preventDefault();
        updateName(e.target.children[0].value, index);
      }}>
      <Input name="name" placeholder={`Test #${i + 1}`} onBlur={e => updateName(e.target.value, index)}></Input>
      <Label htmlFor="name">Name</Label>
    </ModForm>;
    mockupsListDisplay.push(
      <article className='mockup' key={`mockup-${i}`}>
        {name ? <Name onClick={() => updateName('', index)}>{name}</Name> : NameForm }
        <DataTree
          treeId={i}
          data={test.payload}
          name={''}
          options={dataTreeOptions}
          saveUpdatedTree={saveUpdatedTree}
        />
      </article>,
    );
    i += 1;
  });

  function createNewTest() {
    const testsClone = [...tests];
    const testsDiffClone = [...testsDiff];
    testsClone.push({ payload: data, status: '', name: '' });
    testsDiffClone.push({});

    // the ID of the test will be the same as the position in the array
    setTestsListCounter(testsListCounter + 1);
    setTests(testsClone);
    setTestsDiff(testsDiffClone);
  }

  if (active) {
    return (
        <StyledPanel active={active} onMouseOver={() => setCursor('default')}>
          <div>
            {data && <h3>Server Response</h3>}
            {datacanvas}
            {data && <Button enabled={true} onClick={createNewTest}>New Test</Button>}
          </div>
          {mockupsListDisplay}
        </StyledPanel>
    );
  }

  return (
    <StyledPanel
      onClick={onClickFunction}
      active={active}
      onMouseOver={() => setCursor('pointer')} >
      <h1>Mockups</h1>
    </StyledPanel>
  );
};

export default MockupsPanel;
