import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RequestBar from '../xcomponents/RequestBar.jsx';
import RequestBarGraphql from '../xcomponents/RequestBarGraphql.jsx';
import StyledPanel from './StyledPanel.jsx';
import BodyItemsContainer from './BodyItemsContainer';
// import PerformanceMetrics from '../components/PerformanceMetrics.jsx';
import * as actions from '../../../thingsToImplement/redux/actions';

class SourcePanel extends Component {
  showGraphql(bool){
    return bool
  }
  render() {
    const { onClick, active } = this.props;
    // const RequestBarSelection = this.props.graphQLRequest ? 
    // <RequestBarGraphql createBodyFromSource={this.props.createBodyFromSource}/>
    // : <RequestBar createBodyFromSource={this.props.createBodyFromSource}/>
    
    return (

      <StyledPanel
        onClick={() => { onClick('source'); }}
        active={active}
        style={{ cursor: 'pointer' }}
        >
        <h1>Source</h1>
        <button >REST</button><button >GRAPHQL</button>
        {/* <RequestBar createBodyFromSource={this.props.createBodyFromSource}/> */}
        <RequestBarGraphql createBodyFromSource={this.props.createBodyFromSource}/>
        {/* {RequestBarSelection} */}
        <BodyItemsContainer
          collection='CLONED_ITEMS'
          // items={this.props.clonedItems}
        />
      </StyledPanel>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBodyFromSource: bodyItem => dispatch(actions.createBodyFromSource(bodyItem)),
  };
};

SourcePanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default connect(null, mapDispatchToProps)(SourcePanel);


// export default SourcePanel;
