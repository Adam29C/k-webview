// import { useState } from "react";
// import "./App.css";
// import Header from "./Root/Header/Header";
// import Footer from "./Root/Footer/Footer";
// import Main_Containers from "./Root/Containers/Main_Containers";
// import Sidebar from "./Root/Sidebar/Sidebar";
// import Headline from "./Root/Components/Headline";
// import Tabs from "./Root/Components/Tabs";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Header />
//       <Headline />
//       {/* <Main_Containers /> */}
//       <Tabs />
//       <Footer />
//       <Sidebar />
//     </>
//   );
// }

// export default App;

import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Root/Routes/Routes";
// import "react-toastify/dist/ReactToastify.css";
// import "react-datepicker/dist/react-datepicker.css";

const App = () => <RouterProvider router={router} />;

export default App;
