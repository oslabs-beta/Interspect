import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RequestBar from '../xcomponents/RequestBar.jsx';
import StyledPanel from './StyledPanel.jsx';
import BodyItemsContainer from './BodyItemsContainer';
// import PerformanceMetrics from '../components/PerformanceMetrics.jsx';

class SourcePanel extends Component {
  render() {
    const { onClick, active } = this.props;
    return (

      <StyledPanel
        onClick={() => { onClick('source'); }}
        active={active}
        style={{ cursor: 'pointer' }}
        >
        <h1>Source</h1>
        <RequestBar/>
        <BodyItemsContainer
          collection='CLONED_ITEMS'
          items={this.props.clonedItems}
        />
      </StyledPanel>
    );
  }
}

SourcePanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default SourcePanel;
