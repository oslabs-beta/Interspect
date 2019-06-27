import React from 'react';
import ReactJson from 'react-json-view';

const styles = {
  borderRadius: '5px',
  fontFamily: '\'IBM Plex Mono\', monospace',
  fontSize: '90%',
  maxHeight: '250px',
  overflow: 'auto',
  margin: '0.75em auto',
  padding: '1em',
};

const DataTree = (props) => {
  const {
    treeId, data, options, saveUpdatedTree,
  } = props;
  const {
    onAdd, onEdit, onDelete, enableClipboard,
  } = options;

  const changeObject = (src) => {
    saveUpdatedTree(src.updated_src, treeId, src.new_value, src.name, src.namespace);
  };

  return (
    <section className='wrapper' id={`tree-${treeId}`}>
      {/* Tree gets rendered here after component mounts */}
      <ReactJson
        src={data}
        theme='chalk'
        iconStyle='circle'
        style={styles}
        collapsed={2}
        onAdd={(onAdd) ? changeObject : false}
        onEdit={(onEdit) ? changeObject : false}
        onDelete={(onDelete) ? changeObject : false}
        enableClipboard={enableClipboard}
      />
    </section>
  );
};

export default DataTree;
