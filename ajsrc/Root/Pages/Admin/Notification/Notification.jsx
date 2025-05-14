import React from "react";
import "../../../../assets/css/notification.css";
function Notification() {
  const notifications = [
    { id: 1, message: "You have a new message!" },
    { id: 2, message: "Your order has been shipped." },
    {
      id: 3,
      message: "There was an error processing your request.",
    },
    { id: 4, message: "You have a new friend request." },
  ];

  return (
    <div className="notification-list">
      {notifications.length > 0 && (
        <h2 className="notificationheading">Notifications</h2>
      )}
      {notifications.length === 0 ? (
        <div className="no-notifications">No Notifications</div>
      ) : (
        notifications.map((notification) => (
          <div key={notification.id} className="notification">
            {notification.message}
          </div>
        ))
      )}
    </div>
  );
}

export default Notification;
