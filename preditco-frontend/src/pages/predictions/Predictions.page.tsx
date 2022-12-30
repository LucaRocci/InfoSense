//React core imports
import React, { useEffect, useRef, useState } from "react";
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
import { Bar, Radar } from "react-chartjs-2";
//React-bootstrap import
import { Container } from "react-bootstrap";
//Hooks imorts
import useFetch from "../../hooks/useFetch/useFetch.hook";
import Card from "react-bootstrap/Card";

import { ReactComponent as SettingIcon } from "../../assets/icons/setting.svg";
import { ReactComponent as LineChartIcon } from "../../assets/icons/line-chart.svg";
import { ReactComponent as PieChartIcon } from "../../assets/icons/pie-chart.svg";
import ModalSetting from "../../components/Modal/ModalSetting.component";

type DataSetChart = {
  backgroundColor: string,
  data: number[] | never[],
  label: string
}

type DataChart = {
  labels: string[] | never[]
  datasets: DataSetChart[]
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const optionsBar = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    }
  },
};

const optionsLine = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    }
  },
};

const Predictions = () => {
  //Input state for api req
  const [province, setProvince] = useState<string>("Torino");
  const [activityType, setActivityType] = useState<string>("alberghi 3 stelle");
  const [country, setCountry] = useState<string>("Italia");
  //Char setting state
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<DataChart>({
    labels,
    datasets: [
      {
        label: "Arrivi",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Presenze",
        data: [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ]
  });
  //Modal state
  const [show, setShow] = useState<boolean>(false);
  //UseFetch hook
  const { apiData, loading, error } = useFetch(
    `http://18.102.24.178:8000/statistics/${province}/${activityType}/${country}`
  );

  const graphRef = useRef();

  //Effect for change the chart settings on api change request
  useEffect(() => {
    if(graphRef.current)
       console.log(graphRef.current);
    const mappedLabels: string[] = [];
    const arriveValue: number[] = [];
    const presValue: number[] = [];
    apiData?.forEach(e => {
      if (typeof e === 'string')
        return
      else if (e.arrivoPresenza === 'Arrivo') {
        mappedLabels.push(e.anno.toString())
        arriveValue.push(e.valore)
      } else {
        presValue.push(e.valore);
      }
    })
    setLabels(mappedLabels)
    setData({
      labels,
      datasets: [
        {
          label: "Arrivi",
          data: arriveValue,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Presenze",
          data: presValue,
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ]
    })
    console.log(data)
  }, [apiData]);

    //Modal functions
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <SettingIcon title="Setting" />
          </button>
          <button className="chart btn btn-primary  mx-2">
            <LineChartIcon title="Line Chart" />
            <span className="button-text-chart">Line Chart</span>

          </button>
          <button className="chart btn btn-secondary">
            <PieChartIcon title="Pie Chart" />
            <span className="button-text-chart">Pie Chart</span>
          </button>

        </div>
      </Card>
      <ModalSetting show={show} handleClose={handleClose} />
      <Container className="d-flex justify-content-center">
        {/*       <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        {loading ? <>Loading...</>:''}
        {error ? <>Error...</>:''}
        <button type="submit">Submit</button>
      </form> */}
        <div id="2" className="chart-view">
          <Bar id="2" ref={graphRef} options={optionsBar} data={data} />
        </div> 
      </Container>
    </>
  );
};

export default Predictions;