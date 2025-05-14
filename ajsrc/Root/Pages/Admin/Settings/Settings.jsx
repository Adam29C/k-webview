import React from "react";
import "../../../../assets/css/settings.css";

function Settings() {
  return (
    <div>
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
        <div
          style={{
            borderBottom: "1px solid #237f8a",
            marginBottom: "8px",
            marginTop: "8px",
          }}
        ></div>
        <h1 class="settingheading">Notification Settings</h1>
        <ul class="settinglist">
          <li class="settinglist-item">
            <div>Main Notification </div>
            <label class="android-toggle">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </li>
          <li class="settinglist-item">
            <div>Game Notification </div>
            <label class="android-toggle">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </li>
          <li class="settinglist-item">
            <div>Starline Notification </div>
            <label class="android-toggle">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </li>
          <li class="settinglist-item">
            <div>Andar Bahar (Jackpot) Notification </div>
            <label class="android-toggle">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Settings;