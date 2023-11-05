import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'; 
import App from './App';
import Home from './components/routes/Home';
import Accompany from './components/routes/Accompany';
import Request from './components/routes/Request';

const router = createBrowserRouter([{
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/request',
      element: <Request />
    },
    {
      path: '/accompany',
      element: <Accompany />
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);