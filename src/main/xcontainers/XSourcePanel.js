import React from 'react';
// import RequestBar from '../components/RequestBar.jsx';
import PropTypes from 'prop-types';
import StyledPanel from './StyledPanel.jsx';
// import PerformanceMetrics from '../components/PerformanceMetrics.jsx';

const SourcePanel = ({ onClick, active }) => (


    <StyledPanel
      onClick={onClick}
      active={active}
      style={{ cursor: 'pointer' }}
    >
      <h1>Source</h1>
    </StyledPanel>

);

SourcePanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default SourcePanel;
