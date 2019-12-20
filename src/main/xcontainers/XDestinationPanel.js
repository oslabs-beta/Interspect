import React, { Component } from 'react';
// import RequestBar from '../components/RequestBar.jsx';
import PropTypes from 'prop-types';
import StyledPanel from './StyledPanel.jsx';
// import PerformanceMetrics from '../components/PerformanceMetrics.jsx';

export default class DestinationPanel extends Component {
  handleDestinationPanelClick() {
    if (!this.props.active) {
      this.props.onClick("destination")
    }
  }
  render() {
    const { onClick, active } = this.props;
    return (

      <StyledPanel
        onClick={()=> {this.handleDestinationPanelClick()}}
        active={active}
        style={{ cursor: 'pointer' }}
        >
        <h1>Destination</h1>
      </StyledPanel>
    )
  }
}

DestinationPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}
