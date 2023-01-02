//React core imports
import React, { useEffect, useRef, useState } from "react";
//React router imports
import { useSearchParams } from "react-router-dom";
//Charjs impoprts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
//React-bootstrap import
import { Container } from "react-bootstrap";
//Hooks imorts
import useFetch from "../../hooks/useFetch.hook";
//Style Imports
import "./Statistics.scss";

import Card from "react-bootstrap/Card";
import { ReactComponent as SettingIcon } from "../../assets/icons/setting.svg";
import { ReactComponent as LineChartIcon } from "../../assets/icons/line-chart.svg";
import { ReactComponent as PieChartIcon } from "../../assets/icons/pie-chart.svg";
import ModalSetting from "../../components/Modal/ModalSetting.component";

type DataSetChart = {
  backgroundColor: string;
  data: number[] | never[];
  label: string;
};

type DataChart = {
  labels: string[] | never[];
  datasets: DataSetChart[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
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
  },
};

const Statistics = () => {
  //SearchParams for api req
  const [searchParam, setSearchParam] = useSearchParams();
  //Char setting state
  const [data, setData] = useState<DataChart>({
    labels: [],
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
    ],
  });
  //State for switching chart
  const [toggleChart, setToggleChart] = useState<string>("Bar");
  //Modal state
  const [show, setShow] = useState<boolean>(false);
  //UseFetch hook
  const { apiData, loading, error } = useFetch(
    `http://18.102.24.178:8000/statistics/${searchParam.get(
      "province"
    )}/${searchParam.get("activityType")}/${searchParam.get("country")}`
  );

  const graphRef = useRef();

  useEffect(() => {
    setSearchParam({
      province: "Torino",
      activityType: "alberghi 3 stelle",
      country: "Italia",
    });
  }, []);

  //Effect for change the chart settings on api change request
  useEffect(() => {
    /*     if(graphRef.current)
       console.log(graphRef.current, graphRef2.current); */

    const mappedLabels: string[] = [];
    const arriveValue: number[] = [];
    const presValue: number[] = [];
    apiData?.forEach((e) => {
      if (typeof e === "string") return;
      else if (e.arrivoPresenza === "Arrivo") {
        mappedLabels.push(e.anno.toString());
        arriveValue.push(e.valore);
      } else {
        presValue.push(e.valore);
      }
    });
    setData({
      labels: mappedLabels,
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
      ],
    });
  }, [apiData]);

  //Modal functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="board px-5 py-3 rounded-3 ">
        <h2>{searchParam.get("province")}</h2>
        <p className="ms-1">
          {searchParam
            .get("activityType")?.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase())}{" "}
          ({searchParam.get("country")})
        </p>
        <div className="d-flex flex-row">
          <button className="setting btn btn-primary" onClick={handleShow}>
            <SettingIcon title="Setting" />
          </button>
          <button
            className={`chart btn mx-2 ${
              toggleChart === "Bar" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setToggleChart("Bar")}
          >
            <LineChartIcon title="Line Chart" />
            <span className="button-text-chart">Line Chart</span>
          </button>
          <button
            className={`chart btn ${
              toggleChart === "Line" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setToggleChart("Line")}
          >
            <PieChartIcon title="Pie Chart" />
            <span className="button-text-chart">Pie Chart</span>
          </button>
        </div>
      </Card>
      <ModalSetting show={show} handleClose={handleClose} />
      <Container className="d-flex justify-content-center">
        {toggleChart === "Bar" ? (
          <div className="chart-view">
            <Bar id="1" ref={graphRef} options={options} data={data} />
          </div>
        ) : toggleChart === "Line" ? (
          <div className="chart-view">
            <Line id="3" options={options} data={data} />
          </div>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default Statistics;
