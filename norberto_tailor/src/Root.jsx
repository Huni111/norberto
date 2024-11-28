import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";


const RootFile = () => {

    return (
        <div>
      <header>
        <Header />


      </header>
      <main>
        <Outlet /> 
      </main>
      <footer>
        <p>© 2024 Your E-commerce</p>
      </footer>
    </div>
    )
}

export default RootFile;