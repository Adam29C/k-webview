import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./Public/Public.route";
import AuthRoutes from "./Auth/Auth.route";
import NastedRoutes from "./Nested/Nested.route";

const router = createBrowserRouter([
  ...publicRoutes,
  ...AuthRoutes,
  ...NastedRoutes,
]);

export default router;
