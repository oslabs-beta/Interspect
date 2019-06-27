import styled from 'styled-components';

const ResponseWrapper = styled.article`
  background-color: #F0F3F4;
  border-radius: 3px;
  box-shadow: inset;
  box-shadow: inset 0 0 2px 0 rgba(41, 47, 50, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1em;
  a {
    color: #555B5E;
    font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.825em;
    text-align: center;
    :hover {
      cursor: pointer;
    }
  }
  div.diff {
    border-top: 1px solid #E2E6E9;
    margin: 0.25em;
    max-height: 480px;
    overflow-y: scroll;
  }
  table {
    border-collapse: collapse;
  }
  pre {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 90%;
  }
`;

export default ResponseWrapper;
