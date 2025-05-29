import React, { useEffect, useState } from "react";
import "../../../../assets/css/notification.css";
import { apiRoutes } from "../../../Config/endpoints";
import { FOR_GET_LIST, FOR_POST_REQUEST } from "../../../Service/commanservice";
import NastedLayout from "../../../Containers/NastedLayout";
function Notification() {
  // const notifications = [
  //   { id: 1, message: "You have a new message!" },
  //   { id: 2, message: "Your order has been shipped." },
  //   {
  //     id: 3,
  //     message: "There was an error processing your request.",
  //   },
  //   { id: 4, message: "You have a new friend request." },
  // ];
  const [notifications, setnotifications] = useState([]);
  const [allnotification, setallnotification] = useState([]);
  const getdata = async () => {
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
  const handlenotifications = async () => {
    try {
      const res = await FOR_POST_REQUEST(
        `${apiRoutes.POST_NOTIFICATION_READ}`,
        ids
      );
      if (res) {
        if (res.status == true) {
          // console.log(res.data);
          setallnotification(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const ids = notifications.map((item) => item._id);

  useEffect(() => {
    getdata();
    handlenotifications();
  }, []);

  return (
    <NastedLayout title={"NOTIFICATIONS"} route={"/home"}>
      <div className="notification-list">
        {allnotification.length > 0 && (
          <h2 className="notificationheading">Notifications</h2>
        )}
        {allnotification.length === 0 ? (
          <div className="no-notifications">No Notifications</div>
        ) : (
          allnotification.map((notification) => (
            <div key={notification.id} className="notification">
              <h6>{notification.title}</h6>
              {notification.message}
            </div>
          ))
        )}
      </div>
    </NastedLayout>
  );
}

export default Notification;
