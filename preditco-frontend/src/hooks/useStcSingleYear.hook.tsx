// React core and hooks
import { useState, useEffect } from "react";

// React router dom imports
import { useSearchParams } from "react-router-dom";

// Import Type
import { dataResponse } from "./useFetch.hook";
import { DataChart, OptionChart } from "./useStcChart.hook";

// Hook for mapping the api response to chartjs valid object
const useStcSingleYear = (
  apiData: dataResponse[] | string[] | null | boolean
): [data: DataChart, option: OptionChart, doughnutData: DataChart[]] => {

  // SearchParam hook
  const [doughnutData, setDoughnutData] = useState<DataChart[]>([
    {
    labels: [],
    datasets: [
      {
        label: '# of Arrivals',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  {
    labels: [],
    datasets: [
      {
        label: '# of Pres',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }]);

  //Single Chart setting state for year chart
  const [data, setData] = useState<DataChart>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      }
    ],
  });

  // Char option state
  const [option, setOption] = useState<OptionChart>({
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "",
      },
      legend: {
        position: "top" as const
      },
      tooltip: {
        titleFont: {
          size: 20,
        },
        bodyFont: {
          size: 20,
        },
        footerFont: {
          size: 10, // There is no footer by default
        },
      },
    },
  });

  // Effect for change the chart settings on api change request
  useEffect(() => {
    if (Array.isArray(apiData)) {

      const labels:any[] = [];

      // Mapping data api, divided by arrival and presense per each year
      const mappedArrival: any[] = apiData
      .map((e) => {
        if (typeof e === "string") return e;
        else if (e.arrivoPresenza === "Arrivo") {
          labels.push(e.esercizio);
          return e.valore;
        } else return 0;
      })
      .filter((e) => e !== 0);

      const mappedPres : any[] = apiData
      .map((e) => {
        if (typeof e === "string") return e;
        else if (e.arrivoPresenza === "Presenza") {
          return e.valore;
        } else return 0;
      })
      .filter((e) => e !== 0);
      
      // Structure chart Doudhnut
      const mappedDoudhnutData = [
        {
          labels: labels,
          datasets: [
            {
              label: '# of Arrivals',
              data: mappedArrival,
              backgroundColor: [
                '#dfff00',
                '#ffbf00',
                '#ff7f50',
                '#de3163',
                '#9fe2bf',
                '#40e0d0',
                '#6495ed',
                '#ccccff',
                '#d735ff',
                '#08d889'
              ],
/*               borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1, */
            },
          ],
        },
        {
          labels: labels,
          datasets: [
            {
              label: '# of Pres',
              data: mappedPres,
              backgroundColor:  [
                '#dfff00',
                '#ffbf00',
                '#ff7f50',
                '#de3163',
                '#9fe2bf',
                '#40e0d0',
                '#6495ed',
                '#ccccff',
                '#d735ff',
                '#08d889'
              ]/* ,
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1, */
            },
          ],
        }
       ]

      setDoughnutData(mappedDoudhnutData);

      // Structure chart Doudhnut
      setData({
        labels: labels,
        datasets: [
          {
            label: 'Arrivi',
            data: mappedArrival,
            backgroundColor: "#4571eb" ,
            tension: 0.2,
          },
          {
            label:'Presenza',
            data: mappedPres,
            backgroundColor: "#aa23c5",
            tension: 0.2,
          },
        ],
      });
    }
  }, [apiData]);

  //Return the states
  return [data, option, doughnutData ];
};

export default useStcSingleYear;
