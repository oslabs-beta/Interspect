import React from 'react';
import styled from 'styled-components';

const StyledPanel = styled.section`
  border: ${(props) => {
    if (props.active) return 'none;';
    return '1px solid #F0F3F4;';
  }};
  max-height: 80vh;
  overflow-y: scroll;
  padding: 0 2em 1em;
  position: relative;
  width: ${props => (props.active ? '80vw' : '10vw')};
  h1 {
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
  &>div {
    background-color: #FFFFFF;
    border-bottom: 1px solid #F0F3F4;
    margin-bottom: 2em;
    margin-top: 1em;
    padding-bottom: 2em;
    position: sticky;
    top: 0px;
    z-index: 1;
  }
`;

export default StyledPanel;
