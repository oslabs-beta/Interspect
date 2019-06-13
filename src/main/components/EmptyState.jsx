import styled from 'styled-components';

const EmptyState = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: middle;
  align-items: center;
  h2 {
    color: #171A1C;
    font-family: 'P22 Mackinac Pro', 'Iowan Old Style', 'Palantino', Georgia, serif;
    font-weight: 400;
    text-align: center;
  }
  p {
    color: #555B5E;
    font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    margin-bottom: 2em;
  }
`;

export default EmptyState;
