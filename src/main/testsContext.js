import React, { useState } from 'react';

const TestsContext = React.createContext([{}, () => { }]);

const TestsProvider = (props) => {
  // Tests are objects with
  // { payload: JSON that represents test,
  //   status: initial value of '',
  //   name: initial value of 'Test #__'
  //   diff: set iff subset, then it's subset key name
  // };
  const [tests, setTests] = useState([]);
  return (
    <TestsContext.Provider value={[tests, setTests]}>
      {props.children}
    </TestsContext.Provider>
  );
};

export { TestsContext, TestsProvider };
