import React from "react";
import "./singlepanabulk.css";
function SinglePanaBulk() {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <>
      <div className="container13">
        <div className="form-box13">
          <div className="form-group13">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select>
              <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
              <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
              <option value="MADHUR DAY Open">MADHUR DAY Open</option>
            </select>
          </div>

          <div className="form-group13">
            <label>Enter&nbsp;Points</label>
            <input type="text" placeholder="Enter Points" />
          </div>
          <div className="keypad13">
            {keys.map((key) => (
              <button key={key} className="key13">
                {key}
              </button>
            ))}
          </div>
          <div className="tabletype13">
            <div className="tabletext13">Jodi</div>
            <div className="tabletext13">Points</div>
            <div className="tabletext13">Game&nbsp;Type</div>{" "}
          </div>

          <div className="divider13" />
        </div>
      </div>
      <div>
        <div className="info13">
          <span className="infosum13">
            <div className="infotext13">Bids</div>
            <div>0</div>
          </span>
          <span className="infosum13">
            <div className="infotext13"> Points</div>
            <div>{123 || 0}</div>
          </span>
          <button className="submit-button13">Submit</button>{" "}
        </div>
      </div>
    </>
  );
}

export default SinglePanaBulk;
