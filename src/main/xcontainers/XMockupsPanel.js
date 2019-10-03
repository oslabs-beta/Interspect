import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledPanel from './StyledPanel.jsx';

import styled from 'styled-components';
import BodyItemsContainer from './BodyItemsContainer';

const CollectionTitle = styled.div`
  text-align: center;
`;
export default class MockupsPanel extends Component {
  handleMockupsPanelClick() {
    if (!this.props.active) {
      this.props.onClick("mockups")
    }
  }
  render() {
    const { onClick, active } = this.props;
    return (

      <StyledPanel
        onClick={()=> {this.handleMockupsPanelClick()}}
        active={active}
        style={{ cursor: 'pointer' }}
        >
        <h1>Mockups</h1>
        {active ? (
          <div>
            <CollectionTitle>MOCK SERVER</CollectionTitle>
            <BodyItemsContainer  collection='HOSTED_ITEMS' />
            <CollectionTitle>MOCK LIBRARY</CollectionTitle>
            <BodyItemsContainer  collection='STAGED_ITEMS' />
          </div>

         ) : null }
      </StyledPanel>
    )
  }
}

MockupsPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}
