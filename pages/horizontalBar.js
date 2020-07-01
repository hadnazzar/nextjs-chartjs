import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgb(11,227,210)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,0,54,0.4)',
      hoverBorderColor: 'rgb(0,88,101)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default () => (
  <div>
    <h2>Horizontal Bar Example</h2>
    <HorizontalBar
      data={data}
      width={400}
      height={400}
    />
  </div>
);
