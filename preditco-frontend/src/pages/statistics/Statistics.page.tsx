//React core imports
import React, { useEffect, useState } from "react";
//Charjs impoprts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Statistics.scss";
import { Bar } from "react-chartjs-2";
//React-bootstrap import
import { Container } from "react-bootstrap";
//Hooks imorts
import useFetch from "../../hooks/useFetch/useFetch.hook";
import Card from "react-bootstrap/Card";

import { ReactComponent as SettingIcon } from "../../assets/icons/setting.svg";
import { ReactComponent as LineChartIcon } from "../../assets/icons/line-chart.svg";
import { ReactComponent as PieChartIcon } from "../../assets/icons/pie-chart.svg";
import ModalSetting from "../../components/Modal/ModalSetting.component";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [122, 786, 343, 764, 567, 123, 456],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [192, 726, 34, 764, 57, 13, 406],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Dataset 3",
      data: [192, 76, 34, 74, 57, 13, 40],
      backgroundColor: "rgba(53, 152, 237, 1)",
    },
  ],
};

const Statistics = () => {
  const [province, setProvince] = useState<string>("Torino");
  const [activityType, setActivityType] = useState<string>("alberghi");
  const [country, setCountry] = useState<string>("Italia");
  const [show, setShow] = useState(false);


  const handleShow = () => setShow(true);

  const { apiData, loading, error } = useFetch(
    `http://18.102.24.178:8000/statistics/${province}/${activityType}/${country}`
  );

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  /*   const handleSubmit = async (event: any) => {

    event.preventDefault();
    event.stopPropagation();

    setProvince(event.target[0].value);
    setActivityType(event.target[1].value);
    setCountry(event.target[2].value)
    console.log(province, activityType, country)

  
  } */

  return (
    <>
      <Card className="board px-5 py-3 rounded-3 ">
        <h2>{province}</h2>
        <p>Start Date: MAY/2028 - End Date: JUNE/2020</p>
        <div className="d-flex flex-row">
        <button className="setting btn btn-primary" onClick={handleShow}>
        <SettingIcon title="Setting"/>
        </button>
        <button className="chart btn btn-primary  mx-2">
        <LineChartIcon title="Line Chart"/>
        <span className="button-text-chart">Line Chart</span>
        
        </button>
        <button className="chart btn btn-secondary">
        <PieChartIcon title="Pie Chart"/>
        <span className="button-text-chart">Pie Chart</span>
        </button>
        
        </div>
      </Card>
     

    <ModalSetting />

      <Container className="d-flex justify-content-center">
        {/*       <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        {loading ? <>Loading...</>:''}
        {error ? <>Error...</>:''}
        <button type="submit">Submit</button>
      </form> */}

        <div className="chart-view">
          <Bar options={options} data={data} />
        </div>
      </Container>
    </>
  );
};

export default Statistics;
