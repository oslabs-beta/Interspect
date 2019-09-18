import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-left: 1px solid #D8D8D8;
  border-bottom: 1px solid #D8D8D8;
  color: #292F32;
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1em;
  line-height: 1em;
  padding: 0.825em;
  width: 100%
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #BCC1C2;
    font-size: 0.9em;
  }
`;

export default Input;
