import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs';

const PerformanceWrapper = styled.div`
  background-color: #F0F3F4;
  border-radius: 3px;
  box-shadow: inset;
  box-shadow: inset 0 0 1px 0 rgba(41,47,50,0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin-bottom: 1em;
`;

const BarChart = Bar;

const PerformanceMetrics = (props) => {
  const { fetchTimes } = props;
  const chartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(151,187,205,0.5)',
        strokeColor: 'rgba(151,187,205,0.8)',
        highlightFill: 'rgba(151,187,205,0.75)',
        highlightStroke: 'rgba(151,187,205,1)',
        data: fetchTimes,
      },
    ],
  };

  const average = fetchTimes.reduce((acc, val) => acc + (val / fetchTimes.length), 0);
  const max = Math.max(...fetchTimes);
  const min = Math.min(...fetchTimes);
  const variance = fetchTimes.reduce(
    (acc, val) => (acc + ((val - average) ** 2)), 0,
  ) / fetchTimes.length;

  return (
    <PerformanceWrapper>
      <div>
        <div>
          <h3>API Request Times</h3>
        </div>

        <div>
          <BarChart data={chartData} width="500" height="250" />
        </div>

        <div >
          <br />
          <h3>
            Average: {Math.floor(average)} ms |
            Max: {max} ms |
            Min: {min} ms |
            SD: {Math.floor(Math.sqrt(variance))} ms
          </h3>
        </div>
      </div>
    </PerformanceWrapper>
  );
};

export default PerformanceMetrics;
