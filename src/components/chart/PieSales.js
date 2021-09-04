import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Jean', 'Hoddie', 'Hat'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 0.5,
    },
  ],
};

const PieChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Most Sale Items</h1>
    </div>
    <Pie data={data} />
  </>
);

export default PieChart;
