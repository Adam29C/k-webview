import React from "react";
// import Sidebar from ".";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

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
