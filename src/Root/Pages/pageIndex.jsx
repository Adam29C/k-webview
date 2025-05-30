import { baseUrl } from "../Config/baseurl";
import * as allServices from "../Service/all.services";
import * as authServices from "../Service/auth.service";
import * as commanservice from "../Service/commanservice";
import { apiRoutes } from "../Config/endpoints";
import * as gameSlice from "../Redux/slice/game.slice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../Components/Toast";
import { useEffect } from "react";
import ReusableForm from "../Components/Formik_form";
import InformModal from "../Components/InformModal";
import { useNavigate } from "react-router-dom";
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
  commanservice,
  ReusableForm,
  InformModal,
  useNavigate
};

export default PagesIndex;
