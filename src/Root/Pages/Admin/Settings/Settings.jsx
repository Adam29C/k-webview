import React, { useEffect, useState } from "react";
import "../../../../assets/css/settings.css";
import { FOR_GET_LIST, FOR_POST_REQUEST } from "../../../Service/commanservice";
import { apiRoutes } from "../../../Config/endpoints";
import NastedLayout from "../../../Containers/NastedLayout";

function Settings() {
  const [data, setdata] = useState({
    mainNotification: false,
    gameNotification: false,
    starLineNotification: false,
    andarBaharNotification: false,
  });

  const getdata = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_NOTIFICATION_STATUS}`);
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
  useEffect(() => {
    getdata();
  }, []);

  const handleToggle = async (key) => {
    const updatedSettings = {
      type: key,
      statusNotification: !data[key],
    };
    try {
      const res = await FOR_POST_REQUEST(
        `${apiRoutes.POST_NOTIFICATIONCHANGE_STATUS}`,
        updatedSettings
      );
      if (res) {
        if (res.status == true) {
          getdata();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NastedLayout title={"SETTINGS"} route={"/home"}>
      <div class="settingcontainer">
        <h1 class="settingheading">Login Settings</h1>
        <label
          class="custom-radio"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <input type="radio" name="color" />
          <span class="radio-btn"></span>
          Login With Biometric
        </label>
        <div className="settingdivider" />

        <h1 class="settingheading">Notification Settings</h1>
        <ul class="settinglist">
          <li class="settinglist-item">
            <div>Main Notification </div>
            <label class="android-toggle">
              <input
                type="checkbox"
                checked={data.mainNotification}
                onChange={() => handleToggle("mainNotification")}
              />
              <span class="slider"></span>
            </label>
          </li>
          <li class="settinglist-item">
            <div>Game Notification </div>
            <label class="android-toggle">
              <input
                type="checkbox"
                checked={data.gameNotification}
                onChange={() => handleToggle("gameNotification")}
              />
              <span class="slider"></span>
            </label>
          </li>
          <li class="settinglist-item">
            <div>Starline Notification </div>
            <label class="android-toggle">
              <input
                type="checkbox"
                checked={data.starLineNotification}
                onChange={() => handleToggle("starLineNotification")}
              />
              <span class="slider"></span>
            </label>
          </li>
          <li class="settinglist-item">
            <div>Andar Bahar (Jackpot) Notification</div>
            <label class="android-toggle">
              <input
                type="checkbox"
                checked={data.andarBaharNotification}
                onChange={() => handleToggle("andarBaharNotification")}
              />
              <span class="slider"></span>
            </label>
          </li>
        </ul>
      </div>
    </NastedLayout>
  );
}

export default Settings;
