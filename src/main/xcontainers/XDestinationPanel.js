import React from 'react';
// import RequestBar from '../components/RequestBar.jsx';
import PropTypes from 'prop-types';
import StyledPanel from './StyledPanel.jsx';
// import PerformanceMetrics from '../components/PerformanceMetrics.jsx';

const DestinationPanel = ({ onClick, active }) => (


    <StyledPanel
      onClick={onClick}
      active={active}
      style={{ cursor: 'pointer' }}
    >
      <h1>Destination</h1>
    </StyledPanel>

);

DestinationPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default DestinationPanel;
