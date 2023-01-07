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
//Components import
import { Container } from "react-bootstrap";
import SingleChart from "./SingleChart.component";
import CarouselChart from "./CarouselChart.component";
//Hooks imorts
import useFetch from "../../hooks/useFetch.hook";
import useStcChart from "../../hooks/useStcChart.hook";

//Register all tools for chart
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

  //Custom hook
  const [apiData, loading, error] = useFetch(
    `http://18.102.24.178:8000/statistics/${searchParam.get(
      "province"
    )}/${searchParam.get("activityType")}/${searchParam.get("country")}`
  );
  const [data, option, filterData] = useStcChart(apiData); 

  const renderBar =
    typeof filterData !== "boolean"
      ? filterData.map((e, i) => (
          <div key={i} className="chart-view px-4 pb-4 rounded mt-4 shadow-lg">
            <Bar options={option} data={e} />
          </div>
        ))
      : null;
  const renderLine =
    typeof filterData !== "boolean"
      ? filterData.map((e, i) => (
          <div key={i} className="chart-view px-4 pb-4 rounded mt-4 shadow-lg">
            <Line options={option} data={e} />
          </div>
        ))
      : null;
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
    >

   {
    searchParam.get("type") === null || searchParam.get("type") === 'Year' ? <SingleChart toggleChart={toggleChart} data={data} option={option} />: 
    searchParam.get("type") === 'Month' ? <CarouselChart toggleChart={toggleChart} renderBar={renderBar} renderLine={renderLine}  />:null
   }
      
    </Container>
  );
};

export default StcChartView;
