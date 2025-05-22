import { baseUrl } from "../Config/baseurl";
import * as allServices from "../Service/all.services";
import * as authServices from "../Service/auth.service";
import { apiRoutes } from "../Config/endpoints";
import * as gameSlice from "../Redux/slice/game.slice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../Components/Toast";

import { useEffect } from "react";
const PagesIndex = {
  baseUrl,
  allServices,
  authServices,
  apiRoutes,
  gameSlice,
  useDispatch,
  useSelector,
  Toast,
  useEffect,
};

export default PagesIndex;
