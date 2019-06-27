import React, { useState } from 'react';
import ReactDiffViewer from 'react-diff-viewer';
import styled from 'styled-components';
import ResponseWrapper from './ResponseWrapper.jsx';

// Styles
const CardButton = styled.button`
  background: #F0F3F4;
  border: none;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top: 1px solid #BCC1C2;
  box-shadow: inset 0 0 1px 0 rgba(41, 47, 50, 0.35);
  color: #555B5E;
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.825em;
  padding: 1em;
  
  :hover {
    cursor: pointer;
    background: #555B5E;
    color: #F0F3F4;
  }
  
  :active {
    background: #555B5E;
    color: #F0F3F4;
    outline: 0;
  }
  
  :focus {
    outline: 0;
    box-shadow: inset 0 0 3px 0 rgba(41, 47, 50, 0.5);
  }
`;

const Icon = styled.span`
  font-family: 'SF Pro Text';
  margin-right: 0.625em;
  color: ${(props) => {
    if (props.didPass === 'pending') return '#555B5E';
    if (props.didPass) return '#77B86B';
    if (!props.didPass) return '#E5544C';
  }};
`;

const diffColors = {
  variables: {
    addedBackground: '#DEF0DB',
    addedColor: '#1A3715',
    removedBackground: '#FFE5E5',
    removedColor: '#5C0505',
    wordAddedBackground: '#B2D2A2',
    wordRemovedBackground: '#FBB6B6',
    addedGutterBackground: '#B2D2A2',
    removedGutterBackground: '#FBB6B6',
    gutterBackground: '#F0F3F4',
    gutterBackgroundDark: '#F0F3F4',
    highlightBackground: '#fffbdd',
    highlightGutterBackground: '#fff5b1',
  },
};

const Header = styled.header`
  font-family: 'Halyard Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 1em;
  h3 {
    color: #292F32;
    margin: 0;
    padding-bottom: 0.5em;
  }
`;

const ResponseComponent = (props) => {
  const {
    status, expectedStatus, payload, data, name, diff,
  } = props;

  const [showDiff, setShowDiff] = useState(false);

  // Event handlers
  const didPass = () => {
    if (!status) return 'pending';
    if (!expectedStatus) {
      return status >= 200 && status <= 299;
    }
    if (expectedStatus[1]) {
      const [lower, upper] = expectedStatus;
      return status >= lower && status <= upper;
    }
    return expectedStatus[0] === status;
  };

  const renderCheckmark = () => {
    /* Download SF Symbols to view icons in app
    (https://developer.apple.com/design/human-interface-guidelines/sf-symbols/)
    (SVG icons to come) */
    if (!status) return '􀍡';
    return didPass() ? '􀁣' : '􀁡';
  };

  const renderExpectedStatus = () => {
    if (!expectedStatus) {
      return 'Expecting status code in the 200–299 range';
    }
    if (expectedStatus.length === 2) {
      const [lower, upper] = expectedStatus;
      return `Expecting status code in the ${lower}–${upper} range`;
    }
    if (expectedStatus.length === 1) {
      return `Expecting status code to be ${expectedStatus[0]}`;
    }
  };

  const renderTestResult = () => {
    if (!expectedStatus) {
      return 'Expecting status code in the 200–299 range';
    }
    if (expectedStatus[1]) {
      const [lower, upper] = expectedStatus;
      return didPass()
        ? 'Passed'
        : `Expected status code to fall between ${lower}–${upper}`;
    }
    return didPass()
      ? 'Passed'
      : `Expected status code to be ${expectedStatus[0]}`;
  };

  const originalValue = (diff === undefined)
    ? JSON.stringify(data, null, 2)
    : JSON.stringify(data[diff], null, 2);
  const newValue = JSON.stringify(payload, null, 2);

  const cardButton = (originalValue === newValue
          ? <CardButton> No Changes </CardButton>
          : <CardButton onClick={() => setShowDiff(true)}> Show Changes </CardButton>);

  return (
    <ResponseWrapper>
      <Header>
        <h3>{name}</h3>
        <Icon didPass={didPass()}>{renderCheckmark()}</Icon>
        {status || 'Ready to send'}
        <p>{(diff === undefined) ? '' : `Test created from subset from key: ${diff}`}</p>
        <p>{status ? renderTestResult() : renderExpectedStatus()}</p>
      </Header>
      {showDiff ? <a onClick={() => setShowDiff(false)}>Collapse Changes</a> : null}
      {showDiff
        ? <div className="diff">
          <ReactDiffViewer
            oldValue={originalValue}
            newValue={newValue}
            splitView={false}
            styles={diffColors}
            hideLineNumbers={true}
          />
        </div>
        : cardButton
      }

    </ResponseWrapper>
  );
};

export default ResponseComponent;
