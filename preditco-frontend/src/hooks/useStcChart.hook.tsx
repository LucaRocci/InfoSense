//React core and hooks
import { useState, useEffect } from "react";
//Custom hooks
import useFetch from "./useFetch.hook";
//React router dom imports
import { useSearchParams } from "react-router-dom";
//Import Type 
import { dataResponse } from "./useFetch.hook";
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

      //Mapping the res of api
        const mappedLabels: string[] = [];
        const arriveValue: number[] = [];
        const presValue: number[] = [];
        const range:number[] = [];
      

        let arriveFilterMonth:number[] = [];
        let presFilterMonth:number[] = [];
        let counter = 0;
        let filteredArray:DataChart[] = [];
        let startRangeYear:number[] = [];

    
        if (Array.isArray(apiData)) {
            let valueCounter = 0;
          apiData?.forEach((e,i) => {
            if (typeof e === "string") return;

            if(i === 0)
             startRangeYear.push(e.anno);

            if(i === apiData.length - 1 )
              startRangeYear.push(e.anno);

             if (e.arrivoPresenza === "Arrivo" && e.mese === 0 ) {
              mappedLabels.push(e.anno.toString());
              arriveValue.push(e.valore);
            } else if(e.arrivoPresenza === "Presenza" && e.mese === 0){
              presValue.push(e.valore);
            } else if(e.arrivoPresenza === "Arrivo" ){
                valueCounter += e.valore;
                arriveFilterMonth.push(e.valore);
                if((i + 1) % 12 === 0) {
                    mappedLabels.push(e.anno.toString());
                    arriveValue.push(valueCounter);
                    valueCounter = 0;
                    
                    filteredArray.push({
                        labels: Month,
                        datasets: [
                          {
                            label: "Arrivi",
                            data: arriveFilterMonth,
                            backgroundColor: "#4571eb",
                            tension: 0.2
                          },
                          {
                            label: "Presenze",
                            data: [],
                            backgroundColor: "#aa23c5",
                            tension: 0.2
                          },
                        ],
                      })
                    arriveFilterMonth = [];
                }
            } else if(e.arrivoPresenza === "Presenza" ) {
                valueCounter += e.valore;
                presFilterMonth.push(e.valore);
                if((i + 1) % 12 === 0) {
                    presValue.push(valueCounter);
                    valueCounter = 0;

                    filteredArray[counter].datasets[1].data = presFilterMonth;
                    presFilterMonth = [];
                    counter++ ;
                }
            }
          });
        }

        //Cicle for create the range of year
        for (let index = 0; index <= startRangeYear[1] - startRangeYear[0]; index++) {
          range.push(startRangeYear[0] + index)
        }
        //Set the range year
        setrangeYear(range);
        //Set filterData state with mapped value
        setFilterData(filteredArray.length === 0 ? false : filteredArray);
        //Set Data state with mapped value
        setData({
          labels: mappedLabels,
          datasets: [
            {
              label: "Arrivi",
              data: arriveValue,
              backgroundColor: "#4571eb",
              /* borderColor: "#45c6eb", */
              tension: 0.2
            },
            {
              label: "Presenze",
              data: presValue,
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
