//React core imports
import React, { FC, useEffect, useState } from "react";
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
import { Container, Form } from "react-bootstrap";
//Hooks imorts
import useFetch from "../../hooks/useFetch.hook";
import useStcChart from "../../hooks/useStcChart.hook";
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

const StcChartView: FC<{ toggleChart: string }> = ({ toggleChart }) => {
  //SearchParams for api req
  const [searchParam] = useSearchParams();

  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [toggleTime, setToggleTime] = useState<string>("Year");
  //Custom hook
  const [apiData, loading, error] = useFetch(
    `http://18.102.24.178:8000/statistics/${searchParam.get(
      "province"
    )}/${searchParam.get("activityType")}/${searchParam.get("country")}`
  );
  const [data, option, filterData] = useStcChart(apiData);
  /* 
  useEffect(() => {
    console.log(filterData)
  },[filterData]) */

  const renderBar =
    typeof filterData !== "boolean"
      ? filterData.map((e, i) => (
          <div key={i} className="chart-view">
            <Bar options={option} data={e} />
          </div>
        ))
      : null;
  const renderLine =
    typeof filterData !== "boolean"
      ? filterData.map((e, i) => (
          <div key={i} className="chart-view">
            <Line options={option} data={e} />
          </div>
        ))
      : null;
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      onChange={(e: any) => setToggleTime(e.target.value)}
    >
      {filterData ? (
        <Form.Select className="">
          <option value="Year">Year</option>
          <option value="Month">Month</option>
        </Form.Select>
      ) : null}
      {
        /* loading ? 'Loading...' : */ toggleChart === "Bar" ? (
          <div className={`chart-view ${toggleTime !== "Year" && filterData ? "d-none": ''}`}>
            <Bar id="1" options={option} data={data} />
          </div>
        ) : toggleChart === "Line" ? (
          <div className={`chart-view ${toggleTime !== "Year" && filterData ? "d-none": ''}`}>
            <Line id="3" options={option} data={data} />
          </div>
        ) : null
      }
      {/* Monthly filter for alberghi e extra-alberghi */}
      {renderBar !== null && toggleChart === "Bar" && toggleTime === "Month"
        ? renderBar[carouselIndex]
        : toggleChart === "Line" &&
          renderLine !== null &&
          toggleTime === "Month"
        ? renderLine[carouselIndex]
        : null}

      {toggleTime === "Month" && filterData ? (
        <div className="d-flex align-items-center justify-content-between w-100">
          <button
            onClick={() => setCarouselIndex(carouselIndex - 1)}
            disabled={carouselIndex === 0}
          >
            {"<-"}
          </button>
          <button
            onClick={() => setCarouselIndex(carouselIndex + 1)}
            disabled={carouselIndex + 1 === renderBar?.length}
          >
            {"->"}
          </button>
        </div>
      ) : null}
    </Container>
  );
};

export default StcChartView;
