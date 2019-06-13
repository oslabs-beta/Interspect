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
`;

export default StyledPanel;
