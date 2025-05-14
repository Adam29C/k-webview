import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main_Containers from "../Containers/Main_Containers";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import MyBids from "../Pages/Admin/MyBids/MyBids";

const wraper = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default wraper;
