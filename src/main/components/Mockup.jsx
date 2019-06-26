import React, { useState, useContext } from 'react';
import NameForm from './NameForm.jsx';
import MockupName from './MockupName.jsx';
import DataTree from './DataTree.jsx';
import Button from './Button.jsx';
import AssertionsForm from './AssertionsForm.jsx';
import { TestsContext } from '../testsContext';


const dataTreeOptions = {
  onAdd: true,
  onEdit: true,
  onDelete: true,
  enableClipboard: false,
};

const Mockup = (props) => {
  const { test, index, saveUpdatedTree } = props;

  const [tests, setTests] = useContext(TestsContext);

  // Mode controls test assertions and name edit form—it’s set by child components
  const [mode, setMode] = useState('view');

  function setName (name, index) {
    const testsClone = [...tests];
    if (name.replace(/\s/g,'') !== '') testsClone[index].name = name;
    else testsClone[index].name = `Test #${index + 1}`
    setTests(testsClone);
  }

  function deleteTest (index) {
    const testsClone = [];
    for (let i = 0; i < tests.length; i++) {
      if (i !== index) testsClone.push(tests[i]);
    }
    setTests(testsClone);
  }

  return (
    <article className="mockup" key={`mockup-${index}`}>
      {mode === 'editName'
        ? <NameForm name={test.name} index={index} setMode={setMode} setName={setName} />
        : <MockupName name={test.name} setMode={setMode} />
      }
      <DataTree
        treeId={index}
        data={test.payload}
        name={test.name}
        options={dataTreeOptions}
        saveUpdatedTree={saveUpdatedTree}
      />
      {mode === 'editAssertions'
        ? <AssertionsForm setMode={setMode} index={index} />
        : <Button enabled={true} onClick={() => setMode('editAssertions')}>Edit Test Assertions</Button>
      }
      <Button enabled={true} onClick={() => deleteTest(index)}>Delete Test</Button>
    </article>
  );
};

export default Mockup;
