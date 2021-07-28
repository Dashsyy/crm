import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Male', 'Female'],
  datasets: [
    {
      label: '# of Votes',
      data: [20, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      color: '#FFFFF',
      borderWidth: 1,
    },
  ],
};

const options =  {
    plugins: {
        legend: {
           labels:{
            color: 'white'
           }
        }
    }
}

const DoughnutChart = () => (

  <>
    <div className='header'>
      <h1 className='title'>Customer Gender</h1>
    </div>
    <Doughnut data={data} options={options} />
  </>
);

export default DoughnutChart;
