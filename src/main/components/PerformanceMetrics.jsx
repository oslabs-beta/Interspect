import React from 'react';
import styled from 'styled-components';

const PerformanceWrapper = styled.div`
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

const PerformanceMetrics = (props) => {
  const { fetchTimes } = props;

  return (
    <PerformanceWrapper>
      <h3>{JSON.stringify(fetchTimes)}</h3>
    </PerformanceWrapper>
  );
};

export default PerformanceMetrics;
