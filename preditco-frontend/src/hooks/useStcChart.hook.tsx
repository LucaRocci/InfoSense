//React core and hooks
import { useState, useEffect } from "react";
//Custom hooks
import useFetch from "./useFetch.hook";
//React router dom imports
import { useSearchParams } from "react-router-dom";
//Import Type 
import { dataResponse } from "./useFetch.hook";

type DataSetChart = {
    backgroundColor: string;
    data: number[] | never[];
    label: string;
  };
  
  type DataChart = {
    labels: string[] | never[];
    datasets: DataSetChart[];
  };

type OptionChart = {
    maintainAspectRatio: boolean,
    plugins: {
      title: {
        display: boolean,
        text: string,
      },
      legend: {
        position: "top",
      },
    },
  }

  const Month = ['January','February','March','April','May','June','July','August','September','October','November','December'];



const useStcChart = (apiData:dataResponse[] | string[] | null | boolean) : [data:DataChart, option:OptionChart, filterData:DataChart[] | boolean ] => {

  //Filter state
  const [filterData, setFilterData] = useState<DataChart[] | boolean>(false);
  //Char setting state
  const [data, setData] = useState<DataChart>({
    labels: [],
    datasets: [
      {
        label: "Arrivi",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Presenze",
        data: [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
    },
  });

    //Effect for change the chart settings on api change request
    useEffect(() => {
    
        const mappedLabels: string[] = [];
        const arriveValue: number[] = [];
        const presValue: number[] = [];

        let arriveFilterMonth:number[] = [];
        let presFilterMonth:number[] = [];
        let counter = 0;
        let filteredArray:DataChart[] = [];

    
        if (Array.isArray(apiData)) {
            let valueCounter = 0;
          apiData?.forEach((e,i) => {
            if (typeof e === "string") return;

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
                            backgroundColor: "rgba(255, 99, 132, 0.5)",
                          },
                          {
                            label: "Presenze",
                            data: [],
                            backgroundColor: "rgba(53, 162, 235, 0.5)",
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

        setFilterData(filteredArray.length === 0 ? false : filteredArray);

        setData({
          labels: mappedLabels,
          datasets: [
            {
              label: "Arrivi",
              data: arriveValue,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Presenze",
              data: presValue,
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        });
      }, [apiData]);

  return [data, option, filterData];
};

export default useStcChart;