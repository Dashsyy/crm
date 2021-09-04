import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'November', 'October', 'December'],
  datasets: [
    {
      label: 'Customer in 2020',
      data: [12, 19, 3, 5, 2, 3,2, 3, 20.5, 5, 1, 4],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Customer in 2021',
      data: [2, 3, 20.5, 5, 1, 4,5, 1,],
      backgroundColor: 'rgb(54, 162, 235)',
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

const GroupedBar = () => (
  <>
    <div className='header'>
      <h1 className='title'>Registered Customer</h1>

    </div>
    <Bar data={data} options={options} />
  </>
);

export default GroupedBar;
