import React, { useState } from 'react';
import NameForm from './NameForm.jsx';
import MockupName from './MockupName.jsx';
import DataTree from './DataTree.jsx';
import Button from './Button.jsx';
import AssertionsForm from './AssertionsForm.jsx'

const dataTreeOptions = {
  onAdd: true,
  onEdit: true,
  onDelete: true,
  enableClipboard: false,
};

const Mockup = (props) => {
  const { test, index, saveUpdatedTree } = props;

  // State
  const [name, setName] = useState(test.name);

  // Mode controls test assertions and name edit form—it’s set by child components
  const [mode, setMode] = useState('view');

  return (
    <article className="mockup" key={`mockup-${index}`}>
      {mode === 'editName'
        ? <NameForm name={name} index={index} setMode={setMode} setName={setName} />
        : <MockupName name={name || `Test #${index + 1}`} setMode={setMode} />
      }
      <DataTree
          treeId={index}
          data={test.payload}
          name={name}
          options={dataTreeOptions}
          saveUpdatedTree={saveUpdatedTree}
        />
      {mode === 'editAssertions'
        ? <AssertionsForm setMode={setMode} index={index}/>
        : <Button enabled={true} onClick={() => setMode('editAssertions')}>Edit Test Assertions</Button>
      }
    </article>
  );
};

export default Mockup;
