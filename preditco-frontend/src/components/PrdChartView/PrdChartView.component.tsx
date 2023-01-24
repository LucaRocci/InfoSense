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
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
//Components import
import { Container } from "react-bootstrap";
import SingleChart from "../StcChartView/SingleChart.component";
import CarouselChart from "../StcChartView/CarouselChart.component";
//Hooks imorts
import useFetch from "../../hooks/useFetch.hook";
import useStcChart from "../../hooks/useStcChart.hook";
//Assets imput
import { ReactComponent as LogoLoading } from "../../assets/logos/logo-short-predicto-loading.svg";
//Env impports
import { activeHost } from "../../__functions/evironment";
import usePrdRangeYear from "../../hooks/usePrdRangeYear.hook";

//Data response type
export type predictionDataResponse = {
  date: string,
  pred: number
}
export type jsonInPostType = {
  steps: number | null,
  territorio: string | null,
  indicatori: string | null,
  esercizio: string | null,
  paese: string | null
}
//Register all tools for chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

//Chart view component to use in statistic page
const PrdChartView: FC<{ toggleChart: string }> = ({ toggleChart }) => {
  //SearchParams for api req
  const [searchParam] = useSearchParams();

      //State for handle respopnse result
      const [apiData, setData] = useState<predictionDataResponse[] | null>(null);
      //State for handle loading
      const [loading, setLoading] = useState<boolean | null>(null);
      //State for handle error
      const [error, setError] = useState<boolean | null>(null);

  const jsonIn = {steps: Number(searchParam.get('steps')), 
                  territorio: searchParam.get('province'), 
                  indicatori: searchParam.get('indicator'), 
                  esercizio: searchParam.get('activityType'), 
                  paese: searchParam.get('country')};

      const [data, option, singleData] = usePrdRangeYear(apiData);        

  /* const [data, option, filterData, rangeYear] = useStcChart(apiData); */

  useEffect(() => {
    
    setLoading(true)
    fetch(`http://${activeHost}/predictions/` , {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(jsonIn)
      })
      .then(async res => {
          const resJson = await res.json();
          setLoading(false);
          setData(resJson);
          console.log(apiData)
      })
      .catch(err => {
          setLoading(false)
          setError(true)
      })

  }, [jsonIn.esercizio, jsonIn.indicatori, jsonIn.paese, jsonIn.steps, jsonIn.territorio])
   //Array of chart for carousel with same value
  //Array of Bar chart
  const renderBar = data.map((e, i) => (
          <div key={i} className="chart-view mx-auto px-4 pb-4 rounded mt-4 shadow-lg">
            <Bar options={option} data={e} />
          </div>
        ));
  //Array of Line chart
  const renderLine = data.map((e, i) => (
          <div key={i} className="chart-view mx-auto px-4 pb-4 rounded mt-4 shadow-lg">
            <Line options={option} data={e} />
          </div>
          ))

  return (
     <Container >
      { loading ? (
        <div className="min-h-60 d-flex flex-column justify-content-center  align-items-center">
          <LogoLoading className="loading-svg" />
        </div>
      ) : null }
      { error ? (
        <div className="min-h-60 d-flex align-items-center">
          <div className="alert alert-danger mx-auto" role="alert">
            An error occurred!
          </div>
        </div>
      ) : null }
{
        //Change view when searchParam.get("type") change
        (searchParam.get("type") === null ||
          searchParam.get("type") === "Year") &&
        !loading &&
        !error ? (
          <SingleChart toggleChart={toggleChart} data={singleData} option={option} />
        ) : searchParam.get("type") === "Month" && !loading && !error ? (
          <CarouselChart
            toggleChart={toggleChart}
            renderBar={renderBar}
            renderLine={renderLine}
          />
        ) : null
      }
    </Container> 
  );
};

export default PrdChartView;
