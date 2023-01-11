//React core and hooks
import { useState, useEffect } from "react";
//Custom hooks
import useFetch from "./useFetch.hook";
//React router dom imports
import { useSearchParams } from "react-router-dom";
//Import Type 
import { dataResponse } from "./useFetch.hook";
//Mapping function imports
import { stcChartMap } from "../__functions/map.functions";
//Dataset type
type DataSetChart = {
    fill?:boolean;
    backgroundColor: string | string [];
    data: number[] | never[];
    label?: string;
    tension?:number;
    borderColor?:string | string[];
    borderWidth?:number;
  };
//Data chart type
export  type DataChart = {
    labels: string[] | never[];
    datasets: DataSetChart[];
  };
  //Option chart type
export type OptionChart = {
    maintainAspectRatio: boolean,
    plugins: {
      title: {
        display: boolean,
        text: string,
      },
      legend: {
        position: "top",
        display?: boolean,
      },
      tooltip: {
        titleFont: {
          size: number
        },
        bodyFont: {
          size: number
        },
        footerFont: {
          size: number // there is no footer by default
        }
      }
    },
  }
//Default label for monthly chart
const Month = ['January','February','March','April','May','June','July','August','September','October','November','December'];


//hook for mapping the api response to chartjs valid object
const useStcChart = (apiData:dataResponse[] | string[] | null | boolean) : [data:DataChart, option:OptionChart, filterData:DataChart[] | boolean, rangeYear:number[] ] => {

  //Array of data for chartjs to create the carousel for monthly chart
  const [filterData, setFilterData] = useState<DataChart[] | boolean>(false);
  //Range of year 
  const [rangeYear, setrangeYear] = useState<number[]>([]);
  //Single Chart setting state for year chart
  const [data, setData] = useState<DataChart>({
    labels: [],
    datasets: [
      {
        label: "Arrivi",
        data: [],
        backgroundColor: "#4571eb",
      },
      {
        label: "Presenze",
        data: [],
        backgroundColor: "#aa23c5",
      },
    ],
  });
  //Char option state
  const [option , setOption ] = useState<OptionChart>({
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: '',
      },
      legend: {
        position: "top" as const,
      },
      tooltip: {
        titleFont: {
          size: 20
        },
        bodyFont: {
          size: 20
        },
        footerFont: {
          size: 10 // there is no footer by default
        }
      }
    },
  });

    //Effect for change the chart settings on api change request
    useEffect(() => {
        //mapping res
        const mappedValue = stcChartMap(apiData);
        //Set the range year
        setrangeYear(mappedValue.range);
        //Set filterData state with mapped value
        setFilterData(mappedValue.filteredArray.length === 0 ? false : mappedValue.filteredArray);
        //Set Data state with mapped value
        setData({
          labels: mappedValue.mappedLabels,
          datasets: [
            {
              label: "Arrivi",
              data: mappedValue.arriveValue,
              backgroundColor: "#4571eb",
              /* borderColor: "#45c6eb", */
              tension: 0.2
            },
            {
              label: "Presenze",
              data: mappedValue.presValue,
              backgroundColor: "#aa23c5",
              /* borderColor: "#d7239f", */
              tension: 0.2
            },
          ],
        });
      }, [apiData]);
  //Return the states
  return [data, option, filterData, rangeYear];
};

export default useStcChart;
