import React, { Component } from 'react';
// import RequestBar from '../components/RequestBar.jsx';
import PropTypes from 'prop-types';
import StyledPanel from './StyledPanel.jsx';
// import PerformanceMetrics from '../components/PerformanceMetrics.jsx';

export default class SourcePanel extends Component {
  render() {
    const { onClick, active } = this.props;
    return (

      <StyledPanel
        onClick={()=> {onClick("source")}}
        active={active}
        style={{ cursor: 'pointer' }}
        >
        <h1>Source</h1>
      </StyledPanel>
    )
  }
}


SourcePanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}