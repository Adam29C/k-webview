import { useState } from "react";
// import "./App.css";
import Header from "../../../Layout/Header/Header";
import Footer from "../../../Layout/Footer/Footer";
import Main_Containers from "../../../Containers/Main_Containers";
import Sidebar from "../../../Layout/Sidebar/Sidebar";
import Headline from "../../../Components/Headline";
import Tabs from "../../../Components/Tabs";

function App() {
  return (
    <>
      <Headline />
      {/* <Main_Containers /> */}
      <Tabs />
      <Footer />
    </>
  );
}

export default App;
