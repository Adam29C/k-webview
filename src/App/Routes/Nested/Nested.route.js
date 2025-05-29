import NastedContainer from "../../Layout/Nasted_Layout";
import NastedRoute from "./Index";
const NastedRoute = [
  {
    path: "/",
    element: <NastedRoute element={NastedContainer} />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "test",
            element: <Tessting />,
          },
        ],
      },
    ],
  },
];

export default NastedRoute;
