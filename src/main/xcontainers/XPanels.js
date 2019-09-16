import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';
import XSourcePanel from './XSourcePanel';
import XMockupsPanel from './XMockupsPanel';
import XDestinationPanel from './XDestinationPanel';
import store from '../../../thingsToImplement/redux/reduxStore';
import * as actions from '../../../thingsToImplement/redux/actions';

const socket = io.connect('http://localhost:3001/');


const XPanels = () => {
  // const [activePanel, setActivePanel] = useState('source');
  // const [data, setData] = useState(undefined);
  // const [getFetchTimes, setGetFetchTimes] = useState([]);
  // const [postFetchTimes, setPostFetchTimes] = useState([]);
  // const [hContentType, setContentType] = useState('');

  // const [tests, setTests] = useContext(TestsContext);

  const XPanelsWrapper = styled.section`
    display: flex;
    height: 100vh;
  `;

  socket.on('post_received', (postedData) => {
    // setData(postedData);
    // setTests([{
    //   payload: postedData, status: '', name: 'Test #1',
    // }]);

    // clear old performance metrics on new post
    // if (getFetchTimes.length) setGetFetchTimes([]);
    // if (postFetchTimes.length) setPostFetchTimes([]);
    console.log(postedData);
  });

  return (
    <XPanelsWrapper>
      <XSourcePanel
      />

      <XMockupsPanel
      />

      <XDestinationPanel
      />
    </XPanelsWrapper>
  );
};

const mapStateToProps = () => {
  return {
    source_active: store.source.source_active,
    mockups_active: store.mockups.mockups_active,
    destination_active: store.destination.destination_active,
  };
};

const mapDispatchToProps = () => {
  return {
    activatePanel: (panelToActivate) => dispatch(actions.activatePanel(panelToActivate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XPanels);
