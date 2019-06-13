import React from 'react';
import styled from 'styled-components';

const StyledPanel = styled.section`
  border: ${(props) => {
    if (props.active) return 'none;';
    return '1px solid #F0F3F4;';
  }}
  padding: 1em 2em;
  width: 33.3333vw;
  width: ${props => (props.active ? '80vw' : '10vw')};
  h1, h3 {
    color: #BCC1C2;
    font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1em;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
  }
  h3 {
    text-align: left;
  }
`;

export default StyledPanel;
