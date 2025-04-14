import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Auth/AuthUser";
import PublicRoute from "../PublicRoute/index";
import Home from "../../Pages/Admin/Home/Home";
import MyBids from "../../Pages/Admin/MyBids/MyBids";
import Passbook from "../../Pages/Admin/Passbook/Passbook";
import Support from "../../Pages/Admin/Support/Support";
import Funds from "../../Pages/Admin/Funds/Funds";
import Wraper from "../../Layout/wraper";

const isAuthenticated = "";

const publicRoutes = [
  {
    path: "/",
    element: <PublicRoute element={Wraper} />,
    // errorElement: <Wraper />,
    children: [
      {
        path: "home",
        element: <PublicRoute element={Home} />,
      },
      {
        path: "bids",
        element: <PublicRoute element={MyBids} />,
      },
      {
        path: "passbook",
        element: <PublicRoute element={Passbook} />,
      },
      {
        path: "funds",
        element: (
          <PublicRoute element={Funds} isAuthenticated={isAuthenticated} />
        ),
      },
      {
        path: "support",
        element: (
          <PublicRoute element={Support} isAuthenticated={isAuthenticated} />
        ),
      },
    ],
  },
];

export default publicRoutes;
