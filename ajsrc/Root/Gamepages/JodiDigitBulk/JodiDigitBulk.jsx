import React from "react";
import "./jodidigitbulk.css";
function JodiDigitBulk() {
  return (
    <div>
      <div className="form-box17">
        <div className="form-group17">
          <label>Enter&nbsp;Points</label>
          <input type="text" placeholder="Enter Points" />
        </div>

        <div className="form-group17">
          <label>Enter&nbsp;Jodi&nbsp;Digits</label>
          <input type="text" placeholder="Enter Points" />
        </div>
      </div>
      <div className="tabletype17">
        <div className="tabletext17">Jodi</div>
        <div className="tabletext17">Points</div>
        <div className="tabletext17">Game&nbsp;Type</div>
      </div>
      <div className="divider17" />

      <div className="info17">
        <span className="infosum17">
          <div className="infotext17">Bids</div>
          <div>0</div>
        </span>
        <span className="infosum17">
          <div className="infotext17"> Points</div>
          <div>{123 || 0}</div>
        </span>
        <button className="submit-button17">Submit</button>
      </div>
    </div>
  );
}

export default JodiDigitBulk;
