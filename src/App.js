import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import axios from "axios";
import AppContextProvider from "./context/AppContext";

function App() {
  
  return (
    <>
      <div>
        <Header />
      </div>
      <AppContextProvider>
        <Outlet />
      </AppContextProvider>
    </>
  );
}

export default App;
