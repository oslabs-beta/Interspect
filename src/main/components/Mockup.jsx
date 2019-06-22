import React, { useState } from 'react';
import NameForm from './NameForm.jsx';
import MockupName from './MockupName.jsx';
import DataTree from './DataTree.jsx';

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

  // Mode controls display of name vs. name edit form, and is set by child compoments
  const [mode, setMode] = useState('view');

  return (
    <article className="mockup" key={`mockup-${index}`}>
      {mode === 'view'
        ? <MockupName name={name || `Test #${index + 1}`} setMode={setMode} />
        : <NameForm name={name} index={index} setMode={setMode} setName={setName} />
      }
      <DataTree
          treeId={index}
          data={test.payload}
          name={name}
          options={dataTreeOptions}
          saveUpdatedTree={saveUpdatedTree}
        />
    </article>
  );
};

export default Mockup;
