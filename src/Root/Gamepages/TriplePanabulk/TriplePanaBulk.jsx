import React, { useState } from "react";
import "./triplepanabulk.css";
import PagesIndex from "../../Pages/pageIndex";

export default function TriplePanaBulk() {
    const { state } = PagesIndex.useLocation();

  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <NastedLayout
      title={`${state.title.toUpperCase()} dashboard `}
      route={"/maingame"}
    >
      <div className="container9">
        <div className="form-box9">
          <div className="form-group9">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select>
              <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
              <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
              <option value="MADHUR DAY Open">MADHUR DAY Open</option>
            </select>
          </div>

          <div className="form-group9">
            <label>Enter&nbsp;Points</label>
            <input type="text" placeholder="Enter Points" />
          </div>
          <div className="keypad9">
            {keys.map((key) => (
              <button key={key} className="key9">
                {key}
              </button>
            ))}
          </div>
          <div className="tabletype9">
            <div className="tabletext9">Jodi</div>
            <div className="tabletext9">Points</div>
            <div className="tabletext9">Game&nbsp;Type</div>{" "}
          </div>

          <div className="divider9" />
        </div>
      </div>
      <div>
        <div className="info9">
          <span className="infosum9">
            <div className="infotext9">Bids</div>
            <div>0</div>
          </span>
          <span className="infosum9">
            <div className="infotext9"> Points</div>
            <div>{123 || 0}</div>
          </span>
          <button className="submit-button9">Submit</button>{" "}
        </div>
      </div>
        </NastedLayout>

  );
}
