import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RequestBar from '../xcomponents/RequestBar.jsx';
import RequestBarGraphql from '../xcomponents/RequestBarGraphql.jsx';
import StyledPanel from './StyledPanel.jsx';
import BodyItemsContainer from './BodyItemsContainer';
// import PerformanceMetrics from '../components/PerformanceMetrics.jsx';
import * as actions from '../../../thingsToImplement/redux/actions';
import Button from '../xcomponents/styledComponents/Button';
class SourcePanel extends Component {
  constructor(props){
    super(props)
    this.handleToggleRequestBtnClick = this.handleToggleRequestBtnClick.bind(this)
    this.toggleRequestTypeBtn = this.toggleRequestTypeBtn.bind(this)
  }
  handleToggleRequestBtnClick(){
    this.props.toggleRequestType();
  }
  toggleRequestTypeBtn(){
    const btnText = this.props.requestIsGraphql === false ?  'GRAPHQL' : 'REST';
    return <Button  onClick={ this.handleToggleRequestBtnClick}>{btnText}</Button>
  }
  handleSourcePanelClick() {
    if (!this.props.active) {
      this.props.onClick("source")
    }
  }
  render() {
    const { active } = this.props;
    const RequestBarSelection = this.props.requestIsGraphql ?

    <RequestBarGraphql createBodyFromSource={this.props.createBodyFromSource}/>
    : <RequestBar createBodyFromSource={this.props.createBodyFromSource}/>

    return (

      <StyledPanel
        onClick={() => { this.handleSourcePanelClick(); }}
        active={active}
        style={{ cursor: 'pointer' }}
      >
        <h1>Source</h1>
        {this.toggleRequestTypeBtn()}
        {RequestBarSelection}
        <BodyItemsContainer
          collection='CLONED_ITEMS'
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
