import React from 'react';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root.component';
import Home from './pages/Home/Home.page';
import Login from './pages/Login/Login.page'
import Statistics from './pages/statistics/Statistics.page';
import Predictions from './pages/predictions/Predictions.page';
import TermsAndCondition from './pages/privacy/Terms.page';
import Privacy from './pages/privacy/Privacy.page';

const router = createBrowserRouter([
  {path:'/', element:  <Root />,
  children:[
    {
      path:'home',
      element: <Home />
    },
    {
      path:'statistics',
      element: <Statistics />
    },
    {
      path:'predictions',
      element: <Predictions />

    },
    {
      path:'terms',
      element: <TermsAndCondition />

    },
    {
      path:'privacy',
      element: <Privacy/>

    }
  ]},
  {
    path: '/login',
    element: <Login />
  },
  {
    path:'*',
    element:<>404 NOT FOUND</>
  }
])


function App() {
  return (<>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
