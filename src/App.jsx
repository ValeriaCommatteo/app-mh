import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Cities from './pages/Cities';
import CityDetail from './pages/CityDetail';
import RegistrationForm from './pages/Register';
import SignIn from "./pages/SignIn";
import Itinerary from './pages/Itinerary';
import userActions from "./redux/actions/userActions" 
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
        element: <RegistrationForm />
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/details/:id",
        element: <CityDetail />
      },
      {
        path: "/itinerary",
        element: <Itinerary />
      },
    ],
  },
]);

function App() {

  const dispatch = useDispatch()

  useEffect (() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(userActions.authenticate());
    }
  }, [])
  
  return <RouterProvider router={router} />
}

export default App;

/* NO TOCAR */
