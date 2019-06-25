import React, { useState, useEffect, useContext } from 'react';
import { TestsContext } from '../testsContext';
import { Redirect } from 'react-router-dom';
import Button from './../components/Button';
import DataTree from '../components/DataTree.jsx';

const SavedProjects = (props) => {
  const { setData } = props;
  const [tests, setTests] = useContext(TestsContext);
  const [projsList, setProjsList] = useState([]);
  const [toolRedirect, setToolRedirect] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3006/projects')
      .then(response => {
        return response.json();
      })
      .then(response => {
        const projects = {}
        Object.keys(response).forEach((key) => {
          const splitKey = key.split(':');
          if (!projects[splitKey[0]]) projects[splitKey[0]] = {};
          projects[splitKey[0]][splitKey[1]] = response[key]
        });
        setProjsList(projects);
      })
  }, []);

  const dataTreeOptions = {
    onAdd: false,
    onEdit: false,
    onDelete: false,
    enableClipboard: false,
  };

  return (
    <div>
      {toolRedirect && <Redirect to="/tool" />}
      {Object.keys(projsList).map(proj => (
        <div key={proj}>
          <h4>Project Name: {proj}</h4>
          <DataTree
            treeId={proj}
            data={JSON.parse(projsList[proj].data)}
            options={dataTreeOptions}
          />
          <Button enabled={true} onClick={() => {
            setData(JSON.parse(projsList[proj].data));
            setTests(JSON.parse(projsList[proj].tests));
            setToolRedirect(true);
          }}>Select</Button>
        </div>
      ))}
    </div>
  )
}

export default SavedProjects;
