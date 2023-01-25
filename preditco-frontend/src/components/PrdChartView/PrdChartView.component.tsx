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
//Assets imput
import { ReactComponent as LogoLoading } from "../../assets/logos/logo-short-predicto-loading.svg";
//Env impports
import { activeHost } from "../../__functions/evironment";
import usePrdRangeYear from "../../hooks/usePrdRangeYear.hook";
import useFetchPr from "../../hooks/useFetchPr.hook";

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
  const [ searchParam, setSearchParam] = useSearchParams();
  const [ view, setView ] = useState<string>('Single')

  const jsonIn = {steps: Number(searchParam.get('steps')), 
                  territorio: searchParam.get('province'), 
                  indicatori: searchParam.get('indicator'), 
                  esercizio: searchParam.get('activityType'), 
                  paese: searchParam.get('country')};
                  
    const [ apiData, loading, error ] = useFetchPr(jsonIn);

      const [data, option, singleData] = usePrdRangeYear(apiData);        

   //Array of chart for carousel with same value
  //Array of Bar chart
  const renderBar = data.map((e, i) => (
          <div key={i} className="chart-view mx-auto px-4 pb-4 rounded mt-4 shadow-lg">
            <Bar options={option} data={e} />
          </div>
        ));
  //Array of Line chart
  const renderLine = data.map((e, i) => (
          <div key={i + 10} className="chart-view mx-auto px-4 pb-4 rounded mt-4 shadow-lg">
            <Line options={option} data={e} />
          </div>
          ))

  return (
     <Container >
      { loading ? (
        <div className="min-h-60 d-flex flex-column justify-content-center  align-items-center">
          <LogoLoading className="loading-svg" />
          <h3 className="text-center ms-4">Please Wait!</h3>
          <h4 className="text-center ms-4">We are generate your prediction chart, the process may take long!</h4>
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
        view === 'Single' &&
        !loading &&
        !error ? (<>
          <div className="w-100 d-flex justify-content-center"><button className="btn btn-primary mt-2 shadow-lg rounded-pill" onClick={() => setView('Multi')}>Multi View</button></div>
          <SingleChart toggleChart={toggleChart} data={singleData} option={option} />
          </>
        ) : view === "Multi" && !loading && !error ? (
          <div>
          <div className="w-100 d-flex justify-content-center"><button className="btn btn-primary mt-2 shadow-lg rounded-pill" onClick={() => setView('Single')}>Single View</button></div>
          <CarouselChart
            toggleChart={toggleChart}
            renderBar={renderBar}
            renderLine={renderLine}
          />
          </div>
        ) : null
      }
    </Container> 
  );
};

export default PrdChartView;
