import styled from 'styled-components';

const InlineForm = styled.form`
  align-items: center;
  border: 1px solid #BCC1C2;
  border-radius: 3px;
  display: flex;
  transition: all 0.15s ease-in-out
  &:focus-within {
    border: 1px solid #949C9E;
    box-shadow: 0 2px 6px -2px rgba(41, 47, 50, 0.25);
  }
`;

export default InlineForm;
