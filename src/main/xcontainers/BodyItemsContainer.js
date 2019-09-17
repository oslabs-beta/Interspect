import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bodyItemsCollectionSelector } from '../../../thingsToImplement/redux/combinedReducers';
import BodyItems from '../xcomponents/BodyItems';


class BodyItemsContainer extends Component {

  render() {

    return (
      <div>
        <BodyItems
          bodyItems = {this.props.bodyItems}
        />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
    bodyItems: bodyItemsCollectionSelector(state, ownProps.collection),
});

export default connect(mapStateToProps)(BodyItemsContainer);
