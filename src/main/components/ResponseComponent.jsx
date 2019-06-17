import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DataTree from './DataTree.jsx';

const ResponseWrapper = styled.article`
  background-color: #F0F3F4;
  border-radius: 3px;
  box-shadow: inset 
  box-shadow: inset 0 0 1px 0 rgba(41,47,50,0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin-bottom: 1em;
`;

const Icon = styled.span`
  font-family: 'SF Pro Text';
  margin-right: 1em;
  color: ${(props) => {
    if (props.status >= 200 && props.status < 300) return '#77B86B;';
    if (props.status >= 300) return '#E5544C;';
    return '#292F32;';
  }}
`;

const Code = styled.textarea`
  background-color: #292F32;
  border: none;
  border-radius: 3px;
  color: #D4E6F7;
  display: flex;
  padding: 1em;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.725em;
  resize: none;
`;

const Header = styled.header`
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const ResponseComponent = (props) => {
  const {
    status, payload
  } = props;

  let checkmark = '􀍡';
  if (status >= 200 && status < 300) {
    checkmark = '􀁣';
  } else if (status >= 300) checkmark = '􀁡';

  return (
    <ResponseWrapper>
      <Header>
        <Icon status={status}>{checkmark}</Icon>
        {status || 'Ready to Send'}
      </Header>
      <Code
        cols='50'
        rows='5'
        value={JSON.stringify(payload)}
        readOnly={true}
      />
    </ResponseWrapper>
  );
};

export default ResponseComponent;
