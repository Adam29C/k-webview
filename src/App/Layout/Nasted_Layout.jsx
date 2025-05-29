import React from "react";
import CommonTopSvg from "../../assets/svgs/secondary-top.svg";
import secoLogo from "../../assets/svgs/logo-third.svg";
import codicon_workspace from "../../assets/svgs/codicon_workspace-trusted.svg";
import { Link } from "react-router-dom";

const NewContainer = ({ title, route, showhide, children }) => {
  return (
    <>
      <div className="Image-Container position-relative">
        <div className="d-flex align-items-center text-light w-100 p-3">
          <Link to={route} className="text-white me-3">
            <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
          </Link>
          <div className="d-flex flex-column align-items-center">
            <h4 className="mx-3 mb-0">{title}</h4>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-12">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewContainer;
