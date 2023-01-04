//React core imports
import React, { FC, useEffect } from "react";
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


const StcChartView:FC<{toggleChart:string}> = ({toggleChart}) => {

  //SearchParams for api req
  const [searchParam,] = useSearchParams();
  //Custom hook
  const [apiData, loading, error] = useFetch(`http://18.102.24.178:8000/statistics/${searchParam.get("province")}/${searchParam.get("activityType")}/${searchParam.get("country")}`);
  const [ data, option, filterData ] = useStcChart(apiData);

  useEffect(() => {
    console.log(filterData)
  },[filterData])
  

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
    {/* loading ? 'Loading...' :  *//* toggleChart === "Bar" ? (
      <div className="chart-view">
        <Bar id="1" options={option} data={data} />
      </div>
    ) : toggleChart === "Line" ? (
      <div className="chart-view">
        <Line id="3" options={option} data={data} />
      </div>
    ) : null */}
{  /* Monthly filter for alberghi e extra-alberghi */}
     { typeof filterData !== 'boolean'? filterData.map((e,i) =>  <div key={i} className="chart-view"><Bar options={option} data={e} /></div>): null } 

  <div className="d-flex align-items-center justify-content-between w-100">
        <button>{'<-'}</button>
        <button>{'->'}</button>
   </div>  
  </Container>
  );
}

export default StcChartView;