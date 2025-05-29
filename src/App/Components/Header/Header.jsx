import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pageIndex from "../../Pages/pageIndex";
import { setProfileDetails } from "../../Redux/slice/common.slice";

const Header = () => {
  const [notifications, setnotifications] = useState([]);

  const dispatch = pageIndex.useDispatch();

  const { getProfile } = pageIndex.useSelector((state) => state.CommonSlice);

  const getbalance = async () => {
    try {
      const res = await pageIndex.commanservice.FOR_GET_LIST(
        `${pageIndex.apiRoutes.GET_USERBALANCE}`
      );

      if (res.status) {
        dispatch(setProfileDetails(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getNotification = async () => {
    try {
      const res = await pageIndex.commanservice.FOR_GET_LIST(
        `${pageIndex.apiRoutes.GET_NOTIFICATION_UNREAD}`
      );
      if (res) {
        if (res.status == true) {
          setnotifications(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNotification();
    getbalance();
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
                  <span className="t">{getProfile?.wallet_balance || 0}</span>
                </span>
              </div>
              {/* <span
                className="text-decoration-none"
                style={{ marginRight: "5px" }}
              >
                <i class="fa-solid fa-bell icons-font-size"></i>
              </span> */}
              <Link
                to={"/notification"}
                style={{
                  textDecoration: "none",
                  marginTop: "10px",
                  color: "inherit",
                  background: "none",
                  padding: 0,
                  border: "none",
                  borderRadius: 0,
                  display: "inline",
                }}
              >
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
