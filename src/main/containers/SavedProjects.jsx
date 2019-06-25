import React, { useState, useEffect } from 'react';

const SavedProjects = () => {
  const [projsList, setProjsList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3006/projects')
      .then(response => {
        console.log(response.body);
        return response.json();
      })
      .then(response => {
        console.log(response);
        const projects = {}
        Object.keys(response).forEach((key) => {
          const splitKey = key.split(':');
          if (!projects[splitKey[0]]) projects[splitKey[0]] = {};
          projects[splitKey[0]][splitKey[1]] = response[key]
        });
        setProjsList(projects);
      })
  }, []);

  return (
    <div>
      {Object.keys(projsList).map(proj => (
        <div>
          <h4>{proj}</h4>
          <h5>{projsList[proj].data}</h5>
          <button>Select</button>
        </div>
      ))}
    </div>
  )
}

export default SavedProjects;
