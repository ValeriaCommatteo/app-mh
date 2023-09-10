import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from './redux/actions/userActions';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Cities from './pages/Cities';
import CityDetail from './pages/CityDetail';
import Register from './pages/Register';
import SignIn from "./pages/SignIn";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cities",
        element: <Cities />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/details/:id",
        element: <CityDetail />
      },
      // {
      //   path: "/itinerary",
      //   element: <Itineraries />
      // },
      // {
      //   path: "/itineraryByCity/:id",
      //   element: <CityDetail />
      // },
    ],
  },
]);

function App() {

  const dispatch = useDispatch()

  useEffect (() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(authenticate());
    }
  }, [])
  
  return <RouterProvider router={router} />
}

export default App;

/* NO TOCAR */
