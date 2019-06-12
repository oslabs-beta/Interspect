import styled from 'styled-components';

const Button = styled.button`
  background-color: #80C1FF;
  border: none;
  color: #0D273F;
  border-radius: 5px;
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  font-size: 1em;
  font-weight: 500;
  padding: 0.5em 1em;
  transition: all 0.15s ease-in-out;

  :hover {
    color: #D4E6F7;
    cursor: pointer;
    background-color: #1F4E7A;
  }

  :active {
    color: #D4E6F7;
    outline: 0;
    box-shadow: none;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 1px 2px #96C1E9;
  }
`;

export default Button;
