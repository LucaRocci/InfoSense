# Predicto Front-End

Welcome to the Predicto Project! This project is designed to analyze historical tourism data from ISTAT (an Italian data source) in order to predict future trends and patterns in tourism flow throughout Italy.

The project has two main pages: Statistics and Predictions.

### Statistics page

The data on the Statistics page is organized by four key categories:

- **Region**: Region: Currently, only Piemonte is available
- **Provice**: Asti, Alessandria, Torino, Verbania, Novara, Vercelli, Cuneo, Biella
- **Activity type**: hotel, non-hotel, 2 stars hotel, 3 stars hotel, rented accomodation, campsite, other exercise, farmhouse, bed and breakfast, 5 stars hotel
- **Origin**: from Italy, from Abroad

We have 3 different methods for comparing and analyzing this data through various charts:

- **Standard mode**: this mode allows you to view data for a single activity type over different years. You can also choose to view data for the flow of tourists from Italy or from abroad.
- **Compare mode**: in this mode, you can compare statistics data from two different provinces with the same activity types. You can also choose to view data for the flow of tourists from Italy or from abroad.
- **Year mode**: this mode allows you to view data for all activity types in a selected province over different years.

### Prediction page

// DA FARE

We hope that you find the Predicto Project to be a valuable tool for understanding and predicting tourism trends in Italy.

---

# Run the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

---

## FILES AND PROJECT STRUCTURE

```
.
├── Folder /**predicto-frontend**/
│   ├── Folder / **node_module**
│   ├── Folder / **public**
│   ├── Folder / **src**/
│   │   ├── Folder / **\_\_functions**/
│   │   │   ├── **enviroment.tsx**
│   │   │   └── **map.functions.tsx**
│   │   ├── Folder / **asset**/
│   │   │   ├── Folder / **animation**
│   │   │   ├── Folder / **icon**
│   │   │   ├── Folder / **image**
│   │   │   └── FOlder / **logos**
│   │   ├── Folder / **components**/
│   │   │   ├── Folder / **DropDown**/
│   │   │   │   └── **DropDown.component.tsx**
│   │   │   ├── Folder / **Footer**/
│   │   │   │   ├── **Footer.component.tsx**
│   │   │   │   └── **Footer.scss**
│   │   │   ├── Folder / **Fomr**/
│   │   │   │   └── **Form.component.tsx**
│   │   │   ├── Folder / **Modal**/
│   │   │   │   └── **Modal.component.tsx**
│   │   │   ├── Folder / **Navbar**/
│   │   │   │   ├── **Navbar.component.tsx**
│   │   │   │   └── **Navbar.scss**
│   │   │   ├── Folder / **Root**/
│   │   │   │   └── **Root.component.tsx**
│   │   │   ├── Folder / **SrcChartView**/
│   │   │   │   ├── **CarouselChart.component.tsx**
│   │   │   │   ├── **SingleChart.component.tsx**
│   │   │   │   ├── **StcChartView.component.tsx**
│   │   │   │   ├── **StcCompareView.component.tsx**
│   │   │   │   └── **StcSingleYearView.component.tsx**
│   │   │   └── Folder / **Tutorial**/
│   │   │       ├── **tutorial-modal-compare.component.tsx**
│   │   │       ├── **tutorial-modal-standard.component.tsx**
│   │   │       ├── **tutorial-modal-year.component.tsx**
│   │   │       ├── **tutorial.component.tsx**
│   │   │       └── **tutorial.component.scss**
│   │   ├── Folder / **hooks**/
│   │   │   ├── **useFetch.hook.tsx**
│   │   │   ├── **usePrdChart.hook.tsx**
│   │   │   ├── **useStcChart.hook.tsx**
│   │   │   ├── **useStcCompare.hook.tsx**
│   │   │   └── **useStcSingleYear.hook.tsx**
│   │   ├── Folder / **pages**/
│   │   │   ├── Folder / **home**/
│   │   │   │   ├── **Home.page.tsx**
│   │   │   │   └── **home.scss**
│   │   │   ├── Folder / **login**/
│   │   │   │   ├── **Login.page.tsx**
│   │   │   │   └── **login.scss**
│   │   │   ├── Folder / **predictions**/
│   │   │   │   ├── **Predictions.page.tsx**
│   │   │   │   └── **predictions.scss**
│   │   │   ├── Folder / **privacy**/
│   │   │   │   ├── **Privacy.page.tsx**
│   │   │   │   └── **Term.page.tsx**
│   │   │   └── Folder / **statistics**/
│   │   │       ├── **Statistics.page.tsx**
│   │   │       └── **statistics.scss**
│   │   ├── **App.scss**
│   │   ├── **App.test.tsx**
│   │   ├── **App.tsx**
│   │   ├── **colors.scss**
│   │   ├── **index.scss**
│   │   ├── **index.tsx**
│   │   ├── **logo.svg**
│   │   ├── **react-app-end.d.ts**
│   │   ├── **reportWebVitals.ts**
│   │   └── **setupTest.ts**
│   ├── **.gitignore**
│   ├── **package-lock.json**
│   ├── **package.json**
│   ├── **server.js**
│   └── **tsconfig.json**
└── **README.md**
```

---

<br>

# Libraries used

- **React**; React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application in a efficient way.
- **react-router-dom**; React Router DOM is a library that allows developers to create routes and navigate between them in a React application. It enables developers to build Single Page Applications (SPAs) with dynamic, client-side routing.
- **Bootstrap**; Bootstrap is a CSS framework that provides a set of pre-designed UI components and layout options. It allows developers to quickly create responsive and visually consistent interfaces, without having to write CSS from scratch.
- **Chart.js**; Chart.js is a library for creating charts and visualizing data. It provides a simple and intuitive API for creating a wide variety of chart types, including bar charts, line charts, and pie charts.
- **GSAP**; GSAP (GreenSock Animation Platform) is a JavaScript library for creating animations. It allows developers to create complex animations with a high level of control, using a simple and easy-to-use API.
- **swiper**; Swiper is a JavaScript library for creating carousels or sliders. It provides a flexible and customizable way to create carousels with touch and gesture support, and a wide range of options for customization.

---

# In depth

Here we are going to explain the main part of code and logics.

## Hooks

### UseFetch Hook

This is a custom React hook for fetching data from an API. It utilizes the **'useState'** and **'useEffect'** hooks from the React core library.

The hook takes in a single parameter, the **'url'** of the API endpoint to fetch data from.

It returns an array containing three values:

- **apiData**: an array of objects of type **dataResponse** or **null** if no data is returned.
- **loading**: a boolean indicating whether the API request is still in progress.
- **error**: a boolean indicating whether there was an error with the API request.

### Example usage

```typescript
import useFetch from "./useFetch";

function MyComponent() {
  const [data, loading, error] = useFetch("https://api.example.com/data");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred</p>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.anno}>
          <p>Anno: {item.anno}</p>
          <p>Valore: {item.valore}</p>
        </div>
      ))}
    </div>
  );
}
```

In this example, the **'MyComponent'** uses the **'useFetch'** hook to fetch data from the specified API endpoint. The component will display "Loading..." while the request is in progress, "An error occurred" if there was an error with the request, or the data returned from the API if the request was successful.

### Use Chart hooks

This is a React hook for creating charts using the Chart.js library. The hook imports the **'useState'** and **'useEffect'** hooks from the React library, as well as the **'useFetch'** custom hook, the **'useSearchParams'** hook from the React Router library, and several mapping functions and types from other files.

The hook defines several types, including **'DataSetChart'**, **'DataChart'**, and **'OptionChart'**, which are used to set the structure of the data and options for the chart. The hook also defines an array of months, **'Month'**, and a **'useEffect'** hook that updates the chart data and options when the data from the API changes.

The hook then exports an array destructuring of the '**data**', **'option'**, **'filterData'**, and **'rangeYear'** states. It maps the data provided by the **'apiData'** prop, using the **'stcChartMap'** function, to match the structure of the **'DataChart'** and **'OptionChart'** types. It also sets the **'filterData'** and rangeYear states.

Here is an example of how the **'useStcChart'** hook could be used in a functional component:

```typescript
import { useStcChart } from "./useStcChart.hook";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [data, option, filterData, rangeYear] = useStcChart(apiData);
  return (
    <div>
      <Line data={data} options={option} />
      {/* additional code to handle the filterData and rangeYear state */}
    </div>
  );
};
```

In this example, the **'useStcChart'** hook is imported and called within the **'Chart'** component. The hook is passed the **'apiData'** as a prop, and then destructured to extract the data, option, **'filterData'**, and **'rangeYear'** states. The **'Line'** component from the **'react-chartjs-2'** library is then used to display the chart, passing in the data and option states as props.
You can also use the **'filterData'** and **'rangeYear'** states to handle the filter and range selection for the chart.

```typescript
import { useStcChart } from "./useStcChart.hook";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [data, option, filterData, rangeYear] = useStcChart(apiData);

  const handleFilter = (year) => {
    setData(filterData[year]);
  };

  return (
    <div>
      <Line data={data} options={option} />
      <Select value={year} onChange={handleFilter}>
        {rangeYear.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </Select>
    </div>
  );
};
```

In this example, a Select element is used to handle the filter selection, the value of the select is the year and the onChange is the handleFilter function. The handleFilter function takes the selected year and set the data of the chart to the data of the selected year.
Please note that this is just an example and additional code would be needed to handle the API call and provide the **'apiData'** prop to the hook, as well as the implementation
