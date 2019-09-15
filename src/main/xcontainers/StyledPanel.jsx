import React from 'react';
import styled from 'styled-components';

const StyledPanel = styled.section`
  border-right: 1px solid #BCC1C2;
  max-height: 100vh;
  overflow-y: scroll;
  padding: ${(props) => {
    if (props.active) return '3em 4em';
    return '3em auto';
  }};
  position: relative;
  width: ${props => (props.active ? '80vw' : '10vw')};
  h1 {
    color: #949C9E;
    font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.825em;
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
