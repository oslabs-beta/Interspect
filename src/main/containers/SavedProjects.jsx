import React, { useState } from 'react';

const SavedProjects = () => {
  const [projsList, setProjsList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3006/projects')
      .then(response => {
        console.log(response)
      })
  }, []);

  return (
    <div>
      {projsList.map(proj => (
        <div>
          <h4>{proj.name}</h4>
          <button>Select</button>
        </div>
      ))}
    </div>
  )
}

export default SavedProjects;
