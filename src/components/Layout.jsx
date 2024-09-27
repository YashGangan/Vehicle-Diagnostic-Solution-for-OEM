import React from "react";
import { Outlet } from "react-router-dom";
import '../css/index.css';
import Navbar from "./general/Navbar";
import Sidebar from "./general/Sidebar";

// Pass the child props
export default function Layout({ children }) {
  return (
    <>
      <div className='grid grid-col-12'>        
          <Sidebar />
        <main className='ml-60'>
          <Navbar />
            <div className="mx-auto px-4 py-6">
                {children}       
            </div>
        </main>
      </div>
      <Outlet />
    </>
  );
}