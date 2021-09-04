import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','Auguest','September','November','October','December'],
  datasets: [
    {
      label: 'Profits of 2021',
      data: [1200, 1900, 332, 512, 223, 345, 300, 109],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 5,

    },
    {
      label: 'Profits of 2020',
      data: [345, 300, 109,1200, 1600, 332, 512, 223, 345, 300, 109,600],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 5,

    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Sales Profit($)</h1>

    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
