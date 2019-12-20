/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bodyItemsCollectionSelector, bodyItemsServerExporter } from '../../../thingsToImplement/redux/combinedReducers';
import BodyItems from '../xcomponents/BodyItems';
import * as actions from '../../../thingsToImplement/redux/actions';

class BodyItemsContainer extends Component {

  render() {
    return (
      <div>

        <BodyItems
          collection = {this.props.collection}
          bodyItems = {this.props.bodyItems}
          modifyBodyItem = {this.props.modifyBodyItem}
          moveBodyItem = {this.props.moveBodyItem}
          deleteBodyItem = {this.props.deleteBodyItem}
          openBodyItem = {this.props.openBodyItem}
          closeBodyItem = {this.props.closeBodyItem}
          updateBodyItemMockServer = {this.props.updateBodyItemMockServer}
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
    openBodyItem: bodyItemid => dispatch(actions.openBodyItem(bodyItemid)),
    closeBodyItem: bodyItemid => dispatch(actions.closeBodyItem(bodyItemid)),
    updateBodyItemMockServer: () => dispatch(actions.updateBodyItemMockServer()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyItemsContainer);
