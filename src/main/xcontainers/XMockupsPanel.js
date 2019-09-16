import React, { Component } from 'react';
// import RequestBar from '../components/RequestBar.jsx';
import PropTypes from 'prop-types';
import StyledPanel from './StyledPanel.jsx';
// import PerformanceMetrics from '../components/PerformanceMetrics.jsx';

export default class MockupsPanel extends Component {
  render() {
    const { onClick, active } = this.props;
    return (

      <StyledPanel
        onClick={()=> {onClick("mockups")}}
        active={active}
        style={{ cursor: 'pointer' }}
        >
        <h1>Mockups</h1>
      </StyledPanel>
    )
  }
}

MockupsPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}