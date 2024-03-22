import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css';

const DonutChart = () => {
  useEffect(() => {
    // Validate that data is provided
    // if (!seventhValuesArray) {
    //   console.error('Data is required for the pie chart.');
    //   return;
    // }
const seventhValuesArray={
    "15+ Years": 14,
    "10-15 Years": 8,
    "6-10 Years": 9,
    "3-6 Years": 20,
    "0-3 Years": 33,
    "undefined": 10
  }
    const chartData = {
      columns: Object.entries(seventhValuesArray),
      type: 'donut',
    };

    const chartConfig = {
      bindto: '#myPieChart',
      data: chartData,
      legend: {
        position: 'right',
      },
    };

    // Create the C3 chart
    const chart = c3.generate(chartConfig);

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="myPieChart"></div>;
};

export default DonutChart;
