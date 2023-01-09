//React core and hooks
import { useState, useEffect } from "react";

//React router dom imports
import { useSearchParams } from "react-router-dom";

//Import Type
import { dataResponse } from "./useFetch.hook";
import { DataChart, OptionChart } from "./useStcChart.hook";

//hook for mapping the api response to chartjs valid object
const useStcSingleYear = (
  apiData: dataResponse[] | string[] | null | boolean
): [data: DataChart, option: OptionChart] => {
  //SearchParam hook
  const [searchParam] = useSearchParams();
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
        display: false,
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
    if (Array.isArray(apiData)) {
      //Mapping data
      const mappedYearArrival: any[] = apiData
        .map((e) => {
          if (typeof e === "string") return e;
          else if (e.arrivoPresenza === "Arrivo" && e.mese === 0) {
            return e.valore;
          } else return 0;
        })
        .filter((e) => e !== 0);

      const mappedYearPres: any[] = apiData
        .map((e) => {
          if (typeof e === "string") return e;
          else if (e.arrivoPresenza === "Presenza" && e.mese === 0) {
            return e.valore;
          } else return 0;
        })
        .filter((e) => e !== 0);

      const mappedYearData = [mappedYearArrival[0], mappedYearPres[0]];

      const mappedMonthArrivals: any = apiData
        .map((e) => {
          if (typeof e === "string") return e;
          else if (e.arrivoPresenza === "Arrivo" && e.mese !== 0) {
            return e.valore;
          } else return 0;
        })
        .filter((e) => e !== 0);

      const mappedMonthPres: any = apiData
        .map((e) => {
          if (typeof e === "string") return e;
          else if (e.arrivoPresenza === "Presenza" && e.mese !== 0) {
            return e.valore;
          } else return 0;
        })
        .filter((e) => e !== 0);

      let monthSumArrivals: number = 0;
      let monthSumPres: number = 0;

      if (mappedMonthArrivals.length !== 0 && mappedMonthPres.length !== 0) {
        monthSumArrivals = mappedMonthArrivals.reduce((acc: number, current: number) => {
          return acc + current;
        }, 0);
      
        monthSumPres = mappedMonthPres.reduce((acc: number, current: number) => {
          return acc + current;
        }, 0);
      }
      const total = [monthSumArrivals, monthSumPres];
      console.log(total);
      

      setData({
        labels: ["Arrivi", "Presenze"],
        datasets: [
          {
            /* data: mappedYearData.length === 0 ? total : mappedYearData, */
            data: total,
            backgroundColor: ["#4571eb", "#aa23c5"],
            tension: 0.2,
          },
        ],
      });
    }
  }, [apiData]);
  //Return the states
  return [data, option];
};

export default useStcSingleYear;
