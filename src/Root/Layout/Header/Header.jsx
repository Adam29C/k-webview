import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FOR_GET_LIST, FOR_POST_REQUEST } from "../../Service/commanservice";
import { apiRoutes } from "../../Config/endpoints";

const Header = () => {
  const [data, setdata] = useState({});
  const [notifications, setnotifications] = useState([]);
  const getbalance = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_USERBALANCE}`);
      if (res) {
        if (res.status == true) {
          setdata(res.data);
          // console.log(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getNotification = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_NOTIFICATION_UNREAD}`);
      if (res) {
        if (res.status == true) {
          setnotifications(res.data);
          // console.log(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getbanner = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_APP_BANNER}`);
      if (res) {
        if (res.status == true) {
          // console.log(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNotification();
    getbalance();
    getbanner();
  }, []);

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
              <i className="fa-solid fa-bars-staggered"></i>
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
                  <span className="t">{data?.wallet_balance || 0}</span>
                </span>
              </div>
              <Link to={"/notification"} className="linkstyle">
                <div class="notify-bell-wrapper">
                  <i class="fa-solid fa-bell notify-bell-icon"></i>
                  <span class="notify-bell-badge">
                    {notifications.length || 0}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
