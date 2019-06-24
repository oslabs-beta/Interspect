import React, { useState } from 'react';
import styled from 'styled-components';

// Styles
const Header = styled.header`
  display: flex;
  align-items: flex-end;
  h3 {
    margin-bottom: 0;
  }
`;

const Name = styled.h3`
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #292F32;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: #4299EA;
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.05em;
  margin: 0 auto 0.25em 0.825em;
  text-transform: uppercase;
  opacity: ${props => (props.hovered ? 1 : 0)};
  transition: all 0.2s ease-in-out;
  &:hover { cursor: pointer; }
  &:active, &:focus {
    color: #1F4E7A;
    outline: 0;
  }
`;

const MockupName = (props) => {
  const { name, setMode } = props;
  // Hovered state is passed to edit button to control visibility
  const [hovered, setHovered] = useState(false);


  return (
    <Header onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Name>{name}</Name>
      <EditButton onClick={() => { setMode('editName'); }} hovered={hovered}>
      Edit
      </EditButton>
    </Header>
  );
};

export default MockupName;
