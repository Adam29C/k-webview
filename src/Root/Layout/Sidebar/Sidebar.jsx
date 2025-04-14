import React from "react";
import { sidebar } from "./data";

const Sidebar = () => {
  return (
    <div>
      <div
        className="offcanvas sidebar-offcanvas offcanvas-start"
        tabIndex={-1}
        id="sidebar"
      >
        <div className="offcanvas-header sidebar-header">
          <div className="sidebar-logo d-flex align-items-center">
            <img
              className=" logo"
              src="../../../src/assets/img/logo_only.svg"
              alt="logo"
            />

            <div className="d-flex align-items-center flex-column ms-3">
              <span className="fw-bold name-font-size">username</span>
              <span className="contact-font-size">+91978645320</span>
            </div>
          </div>
        </div>
        <div className="offcanvas-body">
          <ul className="link-section switch-section">
            {sidebar &&
              sidebar.map((items) => {
                return (
                  <>
                    <li className="active">
                      <a className="neviation-color">
                        <i class={` me-3 neviation-color ${items.icon}`}></i>
                        <span className="tab-name">{items.title}</span>
                      </a>
                    </li>
                  </>
                );
              })}
          </ul>
          {/* <div className="bottom-sidebar">
            <a href="login.html" className="pages">
              <i className="iconsax sidebar-icon" data-icon="logout-2">
                {" "}
              </i>
              <h3>Logout</h3>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
