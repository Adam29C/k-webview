import React from "react";
import "./singlepanaboard.css";
function SinglePanaBoard() {
  return (
    <>
      <div className="container14">
        <div className="form-box14">
          <div className="form-group14">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select>
              <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
              <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
              <option value="MADHUR DAY Open">MADHUR DAY Open</option>
            </select>
          </div>
          <div className="form-group14">
            <label>Single&nbsp;Pana</label>
            <input type="text" placeholder="Enter Points" />
          </div>
          <div className="form-group14">
            <label>Enter&nbsp;Points</label>
            <input type="text" placeholder="Enter Points" />
          </div>
          <div className="form-group14">
            <div></div>
            <button className="addmore14">Add&nbsp;More</button>
          </div>

          <div className="tabletype14">
            <div className="tabletext14">Jodi</div>
            <div className="tabletext14">Points</div>
            <div className="tabletext14">Game&nbsp;Type</div>{" "}
          </div>

          <div className="divider14" />
        </div>
      </div>
      <div>
        <div className="info14">
          <span className="infosum14">
            <div className="infotext14">Bids</div>
            <div>0</div>
          </span>
          <span className="infosum14">
            <div className="infotext14"> Points</div>
            <div>{123 || 0}</div>
          </span>
          <button className="submit-button14">Submit</button>{" "}
        </div>
      </div>
    </>
  );
}

export default SinglePanaBoard;
