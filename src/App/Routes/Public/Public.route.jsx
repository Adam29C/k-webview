// import HomeLayout from "../../Layout/Home_Layout.jsx";
// // import ProtectedRoute from "../../auth/";
// import Testing from "../../../Root/Components/Tessting.jsx";

// const HomeRoutes = [
//   {
//     path: "/",
//     element: <HomeLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "test",
//         element: <Testing />,
//       },
//     ],
//   },
// ];

// export default HomeRoutes;

import HomeLayout from "../../Layout/Home_Layout.jsx"
import Testing from "../../../Root/Components/Tessting.jsx";

const HomeRoutes = [
  {
    path: "/",
    element: <HomeLayout />, 
    children: [
      {
        path: "test",
        element: <Testing />,
      },
    ],
  },
];

export default HomeRoutes;
