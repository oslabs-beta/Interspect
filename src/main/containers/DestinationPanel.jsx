import React, { useContext } from 'react';
import RequestBar from '../components/RequestBar.jsx';
import ResponseComponent from '../components/ResponseComponent.jsx';
import StyledPanel from './StyledPanel.jsx';
import { TestsContext } from '../testsContext';


const DestinationPanel = (props) => {
  const {
    active, onClickFunction, testsDiff, setCursor,
  } = props;
  const [tests, setTests] = useContext(TestsContext);

  const responseComponentsList = [];
  for (let i = 0; i < tests.length; i += 1) {
    responseComponentsList.push(
      <ResponseComponent
        status={tests[i].status}
        payload={testsDiff[i]}

        // fix later
        key={`DestPanelTest ${i}`}
      />,
    );
  }

  if (active) {
    return (
      <StyledPanel active={active} onMouseOver={() => setCursor('default')}>
        <RequestBar
          SourceOrDest='dest'
        />
        {responseComponentsList}
      </StyledPanel>
    );
  }
  return (
    <StyledPanel onClick={onClickFunction} active={active}>
      <h1>Destination</h1>
    </StyledPanel>
  );
};

export default DestinationPanel;
