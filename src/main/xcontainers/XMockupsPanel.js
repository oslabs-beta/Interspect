import React, { Component } from 'react';
// import RequestBar from '../components/RequestBar.jsx';
import PropTypes from 'prop-types';
import StyledPanel from './StyledPanel.jsx';
// import PerformanceMetrics from '../components/PerformanceMetrics.jsx';
import BodyItemsContainer from './BodyItemsContainer';
import styled from 'styled-components';

const CollectionTitle = styled.div` 
  text-align: center;
`;
export default class MockupsPanel extends Component {
  render() {
    const { onClick, active } = this.props;
    return (

      <StyledPanel
        onClick={()=> {onClick("mockups")}}
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
