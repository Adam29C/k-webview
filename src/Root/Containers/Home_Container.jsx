import React from "react";
import Sidebar from "../Layout/Sidebar/Sidebar";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";

const Home_Container = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Home_Container;
