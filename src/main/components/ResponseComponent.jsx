import React from 'react';
import styled from 'styled-components';
import { ArrowRightCircle, CheckCircle, XCircle } from 'react-feather';

const ResponseWrapper = styled.article`
  background-color: #F0F3F4;
  border-radius: 3px;
  box-shadow: inset;
  box-shadow: inset 0 0 1px 0 rgba(41, 47, 50, 0.25);
  display: flex;
  justify-content: space-between;
  padding: 1em;
  margin-bottom: 1em;
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
  h3 {
    color: #292F32;
    margin: 0;
    padding-bottom: 0.5em;
  }
`;

const ResponseComponent = (props) => {
  const {
    status, expectedStatus, payload, name, index,
  } = props;

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
    if (!status) return <ArrowRightCircle size={18} />;
    return didPass() ? <CheckCircle size={18} /> : <XCircle size={18}/>;
  };

  const renderExpectedStatus = () => {
    if (!expectedStatus) {
      return 'No assertion given';
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
      return 'No assertion given';
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

  return (
    <ResponseWrapper>
      <Header>
        <h3>{ name || `Test #${index + 1}` }</h3>
        <Icon didPass={didPass()}>{renderCheckmark()}</Icon>
        { status || 'Ready to send' }
        <p>{ status ? renderTestResult() : renderExpectedStatus() }</p>
      </Header>
      <Code
        cols='50'
        rows='5'
        value={JSON.stringify(payload)}
        readOnly
      />
    </ResponseWrapper>
  );
};

export default ResponseComponent;
