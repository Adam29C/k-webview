import React from "react";
import CommonTopSvg from "../../assets/svgs/common-top.svg";
import secoLogo from "../../assets/svgs/logo-third.svg";
import codicon_workspace from "../../assets/svgs/codicon_workspace-trusted.svg";

const auth_container = ({ title, subtitle, children, icon }) => {
  return (
    <div className="position-relative min-vh-100 d-flex flex-column">
      <div>
        <div className="top-image">
          <img src={CommonTopSvg} alt="" className="testimng" />
        </div>
        <div className="test-container">
          <div className="px-2">
            <div className="subtext d-flex align-items-center  mt-5">
              <div className="maintitle">{title}</div>
              {icon && (
                <img src={secoLogo} alt="" className="secon-logo ms-2" />
              )}
            </div>
            <div className="description px-2">
              <b>{subtitle}</b>
            </div>
          </div>
          {children}
        </div>

        {/* Bottom Section */}
        <div className="position-absolute bottom-0 w-100 text-center   py-3">
          <img src={codicon_workspace} alt="" className="me-2" />
          Trusted by 1 Lakh Users
        </div>
      </div>
    </div>
  );
};

export default auth_container;
