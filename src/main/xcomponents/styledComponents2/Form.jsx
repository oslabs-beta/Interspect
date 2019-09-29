import styled from 'styled-components';

const Form = styled.form`
 color:white;
  border: 0px solid #BCC1C2;
  border-radius: 3px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 600px;
  grid-template-rows: 50px 150px;
  padding: px;


  button {
    border-radius: 5px;
    color:white;
    border-radius: 2px;
    margin-left: auto;
    margin-right: 0.5em;
    min-width: 0;
  }
  textarea {
    border-radius: 5px;
    background-color: white;
    min-width: 0;
    border: none;
  border: 1px solid #D8D8D8;
  color: white;
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1em;
  line-height: 1em;
  }
  input {
    border-radius: 5px;
    background-color: white;
    min-width: 0;
    border: none;
  border: 1px solid #D8D8D8;

  color: white;
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1em;
  line-height: 1em;
  }
  span {}
`;

export default Form;
