//React core and hooks
import { useState, useEffect } from "react";
//Custom hooks
import useFetch from "./useFetch.hook";
//React router dom imports
import { useSearchParams } from "react-router-dom";
//Import Type 
import { dataResponse } from "./useFetch.hook";
import { DataChart, OptionChart } from "./useStcChart.hook";

//Default label for monthly chart
const Month = ['January','February','March','April','May','June','July','August','September','October','November','December'];


//hook for mapping the api response to chartjs valid object
const useStcChart = (apiData:dataResponse[] | string[] | null | boolean) : [data:DataChart , option:OptionChart ] => {

  //SearchParam hook
  const [ searchParam ] = useSearchParams();
  //Array of data for chartjs to create the carousel for monthly chart
  const [filterData, setFilterData] = useState<DataChart[] | boolean>(false);
  //Range of year 
  const [rangeYear, setrangeYear] = useState<number[]>([]);
  //Single Chart setting state for year chart
  const [data, setData] = useState<DataChart>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "",
        data: [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "",
        data: [],
        backgroundColor: "rgba(253, 99, 132, 0.5)",
      },
      {
        label: "",
        data: [],
        backgroundColor: "rgba(51, 162, 235, 0.5)",
      }
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

        if(Array.isArray(apiData)) {
                            //Mapping data
                            const mappedLabel = new Set<string>() ;
        const mappedFirstPrvArrival:any[] = apiData.map((e) => {
            if(typeof e === 'string')
               return e;
            else if(e.arrivoPresenza === 'Arrivo' && e.provincia === searchParam.get('province')) {
                mappedLabel.add(e.anno.toString());
                return e.valore;
            }else return 0
        }).filter(e => e !== 0);
        const mappedFirstPrvPres:any[] = apiData.map((e) => {
            if(typeof e === 'string')
               return e;
            else if(e.arrivoPresenza === 'Presenza' && e.provincia === searchParam.get('province')) {
                return e.valore;
            }else return 0
        }).filter(e => e !== 0);
        const mappedSecondPrvArrival:any[] = apiData.map((e) => {
            if(typeof e === 'string')
               return e;
            else if(e.arrivoPresenza === 'Arrivo' && e.provincia === searchParam.get('provinceSecond')) {
                return e.valore;
            }else return 0
        }).filter(e => e !== 0);
        const mappedSecondPrvPres:any[] = apiData.map((e) => {
            if(typeof e === 'string')
               return e;
            else if(e.arrivoPresenza === 'Presenza' && e.provincia === searchParam.get('provinceSecond')) {
                return e.valore;
            }else return 0
        }).filter(e => e !== 0); 

        setData({
          labels: Array.from(mappedLabel),
          datasets: [
            {
                label: `Arrivi ${searchParam.get('province')}`,
                data:  mappedFirstPrvArrival,
                backgroundColor: "#4571eb",
              },
              {
                label: `Presenze ${searchParam.get('province')}`,
                data: mappedFirstPrvPres,
                backgroundColor: "#45c6eb",
              },
              {
                label: `Arrivi ${searchParam.get('provinceSecond')}`,
                data:  mappedSecondPrvArrival,
                backgroundColor: "#aa23c5",
              },
              {
                label: `Presenze ${searchParam.get('provinceSecond')}`,
                data:  mappedSecondPrvPres,
                backgroundColor: "#d7239f",
              }
          ],
        });
        };
                
}, [apiData]);
  //Return the states
  return [ data , option ];
};

export default useStcChart;