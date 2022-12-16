import React from 'react';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root.component';
import Home from './pages/Home/Home.page';

const router = createBrowserRouter([
  {path:'/', element:  <Root />,
  children:[
    {
      path:'home',
      element: <Home />
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
