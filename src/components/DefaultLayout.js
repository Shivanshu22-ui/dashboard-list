import React from "react";
import Navbar from "./Navbar";
import DashBoard from "./dashBoard/DashBoard";
import { Route, Routes } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="container-fluid p-4 px-2" style={{boxSizing:"border-box",height:'100vh' , background:"#F5F5F5"}}>
      <Navbar>
        <Routes>
          <Route path="/" Component={DashBoard} />
        </Routes>
      </Navbar>
    </div>
  );
}
