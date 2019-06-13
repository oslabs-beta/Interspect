import styled from 'styled-components';

const InlineSelect = styled.select`
  background: none;
  border: none;
  color: #555B5E;
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.825em;
  margin: 0.925em 1em 0.725em 0.725em;
  &:focus {
    outline: 0;
  }
`;

export default InlineSelect;
