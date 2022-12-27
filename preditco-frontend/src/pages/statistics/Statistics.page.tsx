import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [122,786,343,764,567,123,456],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [192,726,34,764,57,13,406],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Dataset 3',
        data: [192,76,34,74,57,13,40],
        backgroundColor: 'rgba(53, 152, 237, 1)',
      }
    ],
  };

const Statistics = () => {

    return (
    <Container className='min-h-100 d-flex justify-content-center align-items-center'>
        <div style={{height: '500px', width:'800px'}}>
    <Bar options={options} data={data} />
    </div>
    </Container>
    )
}

export default Statistics;
