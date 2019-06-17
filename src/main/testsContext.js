import React, { useState } from 'react';

const TestsContext = React.createContext([{}, () => { }]);

const TestsProvider = (props) => {
  // Tests are objects with
  // { payload: JSON that represents test,
  //   status: initial value of '' };
  const [tests, setTests] = useState([]);
  return (
    <TestsContext.Provider value={[tests, setTests]}>
      {props.children}
    </TestsContext.Provider>
  );
};

export { TestsContext, TestsProvider };
