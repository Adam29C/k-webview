import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="custom-container">
          <div className="head-content">
            <a
              href="#sidebar"
              className="sidebar-btn text-decoration-none"
              data-bs-toggle="offcanvas"
            >
              <i className="fa-solid fa-bars-staggered "></i>
            </a>
            <span className="logo">
              <img
                src="../../../src/assets/img/khatri_new_logo.svg"
                alt="Khatri Logo"
                className="logo-img"
              />
            </span>

            <div className="ms-auto d-flex align-items-center gap-2">
              <div className="Wallet-div">
                <span className="Wallet-main">
                  <i class="fa-solid fa-wallet mx-2"></i>
                  <span className="t">120012</span>
                </span>
              </div>
              <span className="text-decoration-none">
                <i class="fa-solid fa-bell icons-font-size ms-2"></i>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
