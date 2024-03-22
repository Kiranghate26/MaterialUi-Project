// BarChart.js

import React, { useEffect } from 'react';
import c3 from 'c3';

const BarChart = ({ data, nameProp, amountProp, chartId,label,xlable}) => {
  useEffect(() => {
    if (data.length > 0) {
      const names = data.map(item => item[nameProp]);
      const amounts = data.map(item => item[amountProp]);

      const chartConfig = {
        bindto: `#${chartId}`,
        data: {
          columns: [[xlable, ...amounts]],
          type: 'bar',
        },
        axis: {
          x: {
            type: 'category',
            categories: names,
          },
          y: {
            label: label,
          },
        },
      };

      c3.generate(chartConfig);
    }
  }, [data, nameProp, amountProp, chartId]);

  return <div id={chartId} />;
};

export default BarChart;
