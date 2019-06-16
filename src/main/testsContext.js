import React, { useState } from 'react';

const TestsContext = React.createContext([{}, () => { }]);

const TestsProvider = (props) => {
  const [tests, setTests] = useState([]);
  return (
    <TestsContext.Provider value={[tests, setTests]}>
      {props.children}
    </TestsContext.Provider>
  );
}

export { TestsContext, TestsProvider };
