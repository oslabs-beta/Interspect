/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bodyItemsCollectionSelector } from '../../../thingsToImplement/redux/combinedReducers';
import BodyItems from '../xcomponents/BodyItems';
import * as actions from '../../../thingsToImplement/redux/actions';


class BodyItemsContainer extends Component {

  render() {
    // TODO: Remove this prop drill of modifyBodyItem reducer, and implement in edit modal instead, once that is made
    return (
      <div>
        
        <BodyItems
          collection = {this.props.collection}
          bodyItems = {this.props.bodyItems}
          modifyBodyItem = {this.props.modifyBodyItem}
          moveBodyItem = {this.props.moveBodyItem}
          deleteBodyItem = {this.props.deleteBodyItem}
        />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
    bodyItems: bodyItemsCollectionSelector(state, ownProps.collection),
});
const mapDispatchToProps = dispatch => {
  return {
    modifyBodyItem: bodyItem => dispatch(actions.modifyBodyItem(bodyItem)),
    deleteBodyItem: bodyItemId => dispatch(actions.deleteBodyItem(bodyItemId)),
    moveBodyItem: (bodyItemId, destination) => dispatch(actions.moveBodyItem(bodyItemId, destination)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyItemsContainer);
