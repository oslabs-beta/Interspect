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
// myBarChart = new Chart(ctx).Bar(data, options);
const BarChart = require("react-chartjs").Bar;

const PerformanceMetrics = (props) => {
  const { fetchTimes } = props;
  const chartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: fetchTimes
      }
    ]
  };

  //      <h3>{JSON.stringify(fetchTimes)}</h3>
  return (
    <PerformanceWrapper>
      
      <div>
        <h3>API Fetch Times{"\n"}</h3>
      </div>
      
      <BarChart data={chartData} width="500" height="250" />
      
    </PerformanceWrapper>
  );
};

export default PerformanceMetrics;
