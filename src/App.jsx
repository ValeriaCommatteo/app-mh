import React, { Children } from 'react';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Cities from './pages/Cities';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cities",
        element: <Cities />
      },
      // {
      //   path: "/city/:id",
      //   element: <CitiesDetail />
      // },
      // {
      //   path: "/itinerary",
      //   element: <Itineraries />
      // },
      // {
      //   path: "/itinerary/:id",
      //   element: <Itinerary />
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;

/* NO TOCAR */
