


//React core and hooks
import { useState, useEffect } from "react";
//Import Type
import { dataResponse } from "./useFetch.hook";
//Mapping function imports
import { stcChartMap } from "../__functions/map.functions";
import { predictionDataResponse } from "../components/PrdChartView/PrdChartView.component";
import { useSearchParams } from "react-router-dom";
//Dataset type
type DataSetChart = {
  fill?: boolean;
  backgroundColor: string | string[];
  data: number[] | never[];
  label?: string;
  tension?: number;
  borderColor?: string | string[];
  borderWidth?: number;
};
//Data chart type
export type DataChart = {
  labels: string[] | never[];
  datasets: DataSetChart[];
};
//Option chart type
export type OptionChart = {
  maintainAspectRatio: boolean;
  plugins: {
    title: {
      display: boolean;
      text: string;
    };
    legend: {
      position: "top";
      display?: boolean;
    };
    tooltip: {
      titleFont: {
        size: number;
      };
      bodyFont: {
        size: number;
      };
      footerFont: {
        size: number; // there is no footer by default
      };
    };
  };
};
//Default label for monthly chart
const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//hook for mapping the api response to chartjs valid object
const usePrdRangeYear = (
  apiData: predictionDataResponse[] | null
): [
  data: DataChart[],
  option: OptionChart,
  singleData: DataChart
] => {

    const [searchParam] = useSearchParams()
  //Single Chart setting state for year chart
  const [ data, setData ] = useState<DataChart[]>([]);
  const [ singleData, setSingleDta ] = useState<DataChart>({
    labels: [],
    datasets: [
      {
        label: searchParam.get('indicator')!,
        data: [],
        backgroundColor: "#4571eb",
        /* borderColor: "#45c6eb", */
        tension: 0.2,
      }
    ],
  });
  //Char option state
  const [option, setOption] = useState<OptionChart>({
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "",
      },
      legend: {
        position: "top" as const,
      },
      tooltip: {
        titleFont: {
          size: 20,
        },
        bodyFont: {
          size: 20,
        },
        footerFont: {
          size: 10, // there is no footer by default
        },
      },
    },
  });

  //Effect for change the chart settings on api change request
  useEffect(() => {
   
    const filterValueData = apiData?.map(e => e.pred);
    const filterDateData = apiData?.map(e => e.date);

    setSingleDta({
        labels: typeof filterDateData !== 'undefined' ? filterDateData: [],
        datasets: [
          {
            label: searchParam.get('indicator')!,
            data: typeof filterValueData !== 'undefined' ? filterValueData: [],
            backgroundColor: "#4571eb",
            /* borderColor: "#45c6eb", */
            tension: 0.2,
          }
        ],
      }

    )

    let chunksValue:number[][] = [];
    let chunksDate:string[][] = [];
    let chunkSize = 12;
    
    if(typeof filterDateData !== 'undefined') {
        for (let i = 0; i < filterDateData.length; i += chunkSize) {
            chunksDate.push(filterDateData.slice(i, i + chunkSize));
          }
    }
    if(typeof filterValueData !== 'undefined') {
        for (let i = 0; i < filterValueData.length; i += chunkSize) {
            chunksValue.push(filterValueData.slice(i, i + chunkSize));
          }
    }
  

    const arrayData:DataChart[] = []

    chunksValue.forEach( (e, i) => {
        arrayData.push({
            labels: chunksDate[i],
            datasets: [
              {
                label: searchParam.get('indicator')!,
                data: e,
                backgroundColor: "#4571eb",
                /* borderColor: "#45c6eb", */
                tension: 0.2,
              }
            ],
          })
    })

    //Set Data state with mapped value
    setData(arrayData); 

  }, [apiData]);

  //Return the states
  return [data, option, singleData];
};

export default usePrdRangeYear;
