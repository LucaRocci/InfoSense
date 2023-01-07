//React core imports
import React, { useState } from "react";
//React router imports
import { useSearchParams } from "react-router-dom";
//Style Imports
import "./Statistics.scss";
//Assets imports
import { ReactComponent as SettingIcon } from "../../assets/icons/setting.svg";
import { ReactComponent as LineChartIcon } from "../../assets/icons/line-chart.svg";
import { ReactComponent as BarChartIcon } from "../../assets/icons/bar-chart.svg";
//Components imports
import Card from "react-bootstrap/Card";
import ModalSetting from "../../components/Modal/ModalSetting.component";
import StcChartView from "../../components/StcChartView/StcChartView.component";
import { Container } from "react-bootstrap";


const Statistics = () => {
  //SearchParams for api req
  const [searchParam,] = useSearchParams();
  //State for switching chart
  const [toggleChart, setToggleChart] = useState<string>("Bar");
  //Modal state
  const [show, setShow] = useState<boolean>(false);


  return (
    <div className="min-h-100 bg-custom sky-blue">
    <Container fluid >
      <Card className="board px-5 py-3 rounded-3 ">
        <h2>{searchParam.get("province")}</h2>
        <p className="ms-1">
          {searchParam
            .get("activityType")
            ?.toLowerCase()
            .replace(/\b(\w)/g, (s) => s.toUpperCase())}{" "}
          ({searchParam.get("country")})
        </p>
        <div className="d-flex flex-row">
          <button
            className="setting btn btn-primary"
            onClick={() => setShow(true)}
          >
            <SettingIcon title="Setting" />
          </button>
          <button
            className={`chart btn mx-2 ${
              toggleChart === "Bar" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setToggleChart("Bar")}
          >
            <BarChartIcon title="Bar Chart" />
            <span className="button-text-chart">Bar Chart</span>
          </button>
          <button
            className={`chart btn ${
              toggleChart === "Line" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setToggleChart("Line")}
          >
            <LineChartIcon title="Line Chart" />
            <span className="button-text-chart">Line Chart</span>
          </button>
        </div>
      </Card>
      <ModalSetting show={show} handleClose={() => setShow(false)} />
      <StcChartView toggleChart={toggleChart} />
    </Container>
    </div>
  );
};

export default Statistics;
