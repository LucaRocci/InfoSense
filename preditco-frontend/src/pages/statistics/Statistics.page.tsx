//React core imports
import React, { useEffect, useState } from 'react';
//Charjs impoprts
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
//React-bootstrap import
import { Container } from 'react-bootstrap';
//Hooks imorts
import useFetch from '../../hooks/useFetch/useFetch.hook';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

 const options = {
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

  const data = {
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

  const [ province, setProvince ] = useState<string>('Torino');
  const [ activityType, setActivityType ] = useState<string>('alberghi');
  const [ country, setCountry ] = useState<string>('Italia');

  const { apiData, loading, error } = useFetch(`http://18.102.24.178:8000/statistics/${province}/${activityType}/${country}`) 

  useEffect(() => {
    console.log(apiData)
  }, [apiData])

/*   const handleSubmit = async (event: any) => {

    event.preventDefault();
    event.stopPropagation();

    setProvince(event.target[0].value);
    setActivityType(event.target[1].value);
    setCountry(event.target[2].value)
    console.log(province, activityType, country)

  
  } */

    return (
    <Container className='min-h-100 d-flex justify-content-center align-items-center'>
{/*       <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        {loading ? <>Loading...</>:''}
        {error ? <>Error...</>:''}
        <button type="submit">Submit</button>
      </form> */}
        <div style={{height: '500px', width:'800px'}}>
          <h2>{province}</h2>
    <Bar options={options} data={data} />
    </div>
    </Container>
    )
}

export default Statistics;
