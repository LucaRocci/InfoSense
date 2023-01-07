//React core imports
import { FC } from "react";
//Type imports
import { DataChart, OptionChart } from "../../hooks/useStcChart.hook";
//Chart imports
import { Bar, Line } from "react-chartjs-2";
//Props type
type SingleChartProps = {
    toggleChart:string,
    data: DataChart,
    option: OptionChart
}
//Single chart for type=Year or null searchParam
const SingleChart:FC<SingleChartProps> = ({toggleChart,data,option}) => {

    return (<>
          {//Check the toggleChart to show the rigth chart.
        toggleChart === "Bar" ? (
          <div className={`chart-view px-4 pb-4 rounded mt-4 shadow-lg`}>
            <Bar id="1" options={option} data={data} />
          </div>
        ) : toggleChart === "Line" ? (
          <div className={`chart-view px-4 pb-4 rounded mt-4 shadow-lg`}>
            <Line id="3" options={option} data={data} />
          </div>
        ) : null
      }</>)
}

export default SingleChart;