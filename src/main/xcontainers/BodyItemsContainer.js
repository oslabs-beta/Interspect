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
          bodyItems = {this.props.bodyItems}
          modifyBodyItem = {this.props.modifyBodyItem}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyItemsContainer);
