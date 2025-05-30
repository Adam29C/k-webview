import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import CommonTopSvg from "../../assets/svgs/secondary-top.svg";
import secoLogo from "../../assets/svgs/logo-third.svg";
import codicon_workspace from "../../assets/svgs/codicon_workspace-trusted.svg";
useNavigate;
const NastedLayout = ({ title, route, showhide, children }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Image-Container position-relative">
        <div className="d-flex align-items-center text-light w-100 py-3 ps-3 ">
          <Link to={route} className="text-white me-2">
            <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
          </Link>
          <div className="d-flex flex-column align-items-center">
            <h6 className=" mb-0">{title}</h6>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-12">
            {children}
            {/* <Outlet />  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NastedLayout;
