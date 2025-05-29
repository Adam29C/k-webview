import Auth_Layout from "../../Layout/Auth_Layout.jsx";
import AuthRoute from "./Index";

const AuthRoutes = [
  {
    path: "/",
    element: <AuthRoute element={Auth_Layout} />,
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

export default AuthRoutes;
