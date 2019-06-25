import React, { useState } from 'react';
import RequestBar from '../components/RequestBar.jsx';
import StyledPanel from './StyledPanel.jsx';
import PerformanceMetrics from '../components/PerformanceMetrics.jsx';
import Button from './../components/Button'
import { Redirect } from 'react-router-dom';


const SourcePanel = (props) => {
  const {
    setData, active, onClickFunction, datacanvas, fetchTimes, setFetchTimes, loggedIn, setLoggedIn
  } = props;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const [redirectToLogin, setRedirectToLogin] = useState(false)

  const logoutButton = (
    <Button enabled={true} onClick={() => {
      fetch('http://localhost:3006/logout')
        .then(response => {
          setLoggedIn(false);
          setRedirectToLogin(true);
        })
        .catch(error => { console.log(error) });
    }} > Logout </Button>
  );

  if (active) {
    return (
      <StyledPanel active={active} style={{ cursor: 'default' }}>
        {redirectToLogin && <Redirect to="/" /> }
        <RequestBar SourceOrDest='source' setData={setData} setFetchTimes={setFetchTimes} />
        {datacanvas}
        { (fetchTimes.length > 0)
          && (fetchTimes.reduce(reducer) > 0)
          && <PerformanceMetrics fetchTimes={fetchTimes} /> }
        {/* {loggedIn && logoutButton} */}
      </StyledPanel>
    );
  }

  return (
    <StyledPanel
      onClick={onClickFunction}
      active={active}
      style={{ cursor: 'pointer' }}
    >
      <h1>Source</h1>
    </StyledPanel>
  );
};

export default SourcePanel;
