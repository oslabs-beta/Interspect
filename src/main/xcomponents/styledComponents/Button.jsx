import styled from 'styled-components';

let backgroundColor;

const Button = styled.button`
  background-color: ${(props) => {
    if (!props.enabled) return '#BCC1C2';
    if (props.variation === 'positive') return '#49893E';
    return '#1F4E7A';
  }};
  border: none;
  color: white;
  border-radius: 3px;
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  font-size: 1em;
  font-weight: 500;
  padding: 0.25em 1em;
  transition: all 0.15s ease-in-out;

  :hover {
    background-color: ${(props) => {
    if (!props.enabled) return '#BCC1C2';
    if (props.variation === 'positive') return '#35612E';
    return '#0D273F';
  }};
  }

  :active {
    color: #D4E6F7;
    outline: 0;
    box-shadow: none;
  }

  :focus {
    outline: 0;
    box-shadow: ${(props) => {
    if (!props.enabled) return '0 0 1px 2px #949C9E';
    if (props.variation === 'positive') return '0 0 1px 2px #DEF0DB';
    return '0 0 1px 2px #96C1E9';
  }}
  }
`;

export default Button;
