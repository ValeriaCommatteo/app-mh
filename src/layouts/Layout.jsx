import React from 'react'
import NavbarMain from "../components/Nav/Nav";
import Footer from '../components/Footer/index'
import { Navigate, Outlet } from 'react-router-dom'

function layout  ( )  {

  let token = localStorage.getItem('token')

  if(!token){

    return <Navigate to={'/signin'}/>
  }


  return (
    <div  className="flex flex-col min-h-screen">
        <NavbarMain />
        <main>
        <Outlet />  
        </main>
        <Footer />
    </div> 
  );
};

export default layout;