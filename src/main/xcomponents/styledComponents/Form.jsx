import styled from 'styled-components';

const Form = styled.form`
  align-items: center;
  border: 1px solid #BCC1C2;
  border-radius: 3px;
  display: flex;
  flex-shrink: 1;
  justify-content: flex-start;
  margin-top: ${(props) => {
    if (!props.bordered) return '1em';
    return 'inherit';
  }}
  transition: all 0.15s ease-in-out
  &:focus-within {
    ${(props) => {
    if (props.bordered) {
      return `border: 1px solid #949C9E;
      box-shadow: 0 2px 6px -2px rgba(41, 47, 50, 0.25);`;
    }
    return 'none';
  }}
  }
  button {
    border-radius: 2px;
    margin-left: auto;
    margin-right: 0.5em;
    // min-width: 0;
  }
  input {
    min-width: 0;
  }
`;

export default Form;
