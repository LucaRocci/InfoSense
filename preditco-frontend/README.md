# Predicto project

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
<br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---
<br>

## FILES AND PROJECT STRUCTURE     

- Folder /**predicto-frontend**     
    - Folder / **node_module**
    - Folder / **public**
    - Folder / **src** 
        - Folder / **__functions**
            - **enviroment.tsx**
            - **map.functions.tsx**
        - Folder / **asset**
            - Folder / **animation**
            - Folder / **icon**
            - Folder / **image**
            - FOlder / **logos**
        - Folder / **components**
            - Folder / **DropDown**
                - **DropDown.component.tsx**
            - Folder / **Footer**
                - **Footer.component.tsx**
                - **Footer.scss**
            - Folder / **Fomr**
                - **Form.component.tsx**
            - Folder / **Modal**
                - **Modal.component.tsx**
            - Folder / **Navbar**
                - **Navbar.component.tsx**
                - **Navbar.scss**
            - Folder / **Root**
                - **Root.component.tsx**
            - Folder / **SrcChartView**
                - **CarouselChart.component.tsx**
                - **SingleChart.component.tsx**
                - **StcChartView.component.tsx**
                - **StcCompareView.component.tsx**
                - **StcSingleYearView.component.tsx**
            - Folder / **Tutorial**
                - **tutorial-modal-compare.component.tsx**
                - **tutorial-modal-standard.component.tsx**
                - **tutorial-modal-year.component.tsx**
                - **tutorial.component.tsx**
                - **tutorial.component.scss**
        - Folder / **hooks**
            - **useFetch.hook.tsx**
            - **usePrdChart.hook.tsx**
            - **useStcChart.hook.tsx**
            - **useStcCompare.hook.tsx**
            - **useStcSingleYear.hook.tsx**
        - Folder / **pages**
            - Folder / **home**
                - **Home.page.tsx**
                - **home.scss**
            - Folder / **login**
                - **Login.page.tsx**
                - **login.scss**
            - Folder / **predictions**
                - **Predictions.page.tsx**
                - **predictions.scss**
            - Folder / **privacy**
                - **Privacy.page.tsx**
                - **Term.page.tsx**
            - Folder / **statistics**
                - **Statistics.page.tsx**
                - **statistics.scss**
        - **App.scss**
        - **App.test.tsx**
        - **App.tsx**
        - **colors.scss**
        - **index.scss**
        - **index.tsx**
        - **logo.svg**
        - **react-app-end.d.ts**
        - **reportWebVitals.ts**
        - **setupTest.ts**
    - **.gitignore**
    - **package-lock.json** 
    - **package.json**
    - **server.js**
    - **tsconfig.json**
- **README.md**

---
<br>

# Libraries used
- React; used to build our application
- react-router-dom; used to build routes and navigation between routes
- Bootstrap; used to create a base for our ui/ux
- Chart.js; used to create charts with our data
- gsap; used to create animation with some components 
- swiper; uset to create personal carousel

---
<br>

# Language
Our project is written in HTML, Typescript and sass