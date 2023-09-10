import React from 'react'
import NavbarMain from "../components/Nav/Nav";
import Footer from '../components/Footer/index'
import { Outlet } from 'react-router-dom'

const layout = ( ) => {
  return (
    <div className="flex flex-col min-h-screen">
        <NavbarMain />
        <main className='flex-grow' style={{ height:'1100px'}}>
        <Outlet />  
        </main>
        <Footer />
    </div> 
  );
};

export default layout;