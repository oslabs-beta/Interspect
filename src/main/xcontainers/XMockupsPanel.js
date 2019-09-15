import React from 'react';
// import RequestBar from '../components/RequestBar.jsx';
import PropTypes from 'prop-types';
import StyledPanel from './StyledPanel.jsx';
// import PerformanceMetrics from '../components/PerformanceMetrics.jsx';

const MockupsPanel = ({ onClick, active }) => (


    <StyledPanel
      onClick={onClick}
      active={active}
      style={{ cursor: 'pointer' }}
    >
      <h1>Mockups</h1>
    </StyledPanel>

);

MockupsPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default MockupsPanel;