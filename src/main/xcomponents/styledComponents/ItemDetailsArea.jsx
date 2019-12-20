import styled from 'styled-components';

const ItemDetailsArea = styled.div`
  display: flex;
  border: 1px solid #D8D8D8;
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1em;
  padding: 5px;
  flex-direction: column;
  .detail-pair {
    margin-bottom: 5px;
  }
  .detail-header {
    text-decoration: underline;
    font-weight: bold;
    color: black;
    text-align: center;
    width: 100%;
  }
  .detail-label {
    text-align: left;
    color: grey;
    font-size: 12px;
    font-style: italic;
  }
  .detail-value {
    text-align: left;
    color: grey;
    text-overflow: ellipsis;
    overflow: hidden;
    font-family: monospace;

    &:hover {
      z-index: 1000;
      background-color: white;
      overflow: visible;
      width: fit-content;
      position: sticky;
    }
  }
`;

export default ItemDetailsArea;
