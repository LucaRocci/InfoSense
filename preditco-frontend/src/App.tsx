import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root.component';

const router = createBrowserRouter([
  {path:'/', element:  <Root />,
  children:[
    {
      path:'home',
      element: <>HOME</>
    },
    {
      path:'statistics',
      element: <>STATISTICS</>
    },
    {
      path:'predictions',
      element: <>PREDICTIONS</>
    }
  ]},
  {
    path: '/login',
    element: <>NO NAVBAR</>
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
