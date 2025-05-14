import React from "react";
import "./spdptp.css";
function SpDpTp() {
  return (
    <div>
      <div className="headerpadd3">
        <div className="date-header3">
          {/* <div className="date-text3">09/05/2025</div> */}
           <span className="date-text3">
            <div
              onClick={() => document.getElementById("dateInput").showPicker()}
            >
              <input
                id="dateInput"
                type="date"
                className="date-input"
                // value={selectedDate}
                // onChange={handleDateChange}
              />
            </div>
          </span>
          <div className="day-label3">MAYA DAY Open</div>
        </div>
      </div>
      <div className="form-box3">
        <div className="digit-options3">
          <label className="checkbox-group3">
            <input type="checkbox" />
            <span>SP</span>
          </label>
          <label className="checkbox-group3">
            <input type="checkbox" />
            <span>DP</span>
          </label>
          <label className="checkbox-group3">
            <input type="checkbox" />
            <span>TP</span>
          </label>
        </div>
        <div className="form-group3">
          <label>DIGIT</label>
          <input type="text" />
        </div>
        <div className="form-group3">
          <label>POINTS</label>
          <input type="text" />
        </div>
        <div className="form-group3">
          {" "}
          <div></div>
          <button className="addmore3">
            {" "}
            <span className="addmoreicon3">+</span>&nbsp;Add
          </button>
        </div>
      </div>
      <div className="game-table-container3">
        {/* Table Header */}
        <div className="table-header3">
          <div className="table-col3">Panna</div>
          <div className="table-col3">Points</div>
          <div className="table-col3">Game Type</div>
        </div>

        {/* Placeholder Table Body (Add dynamic rows here if needed) */}
        <div className="table-body3">
          {/* Example row (optional) */}
          {/* <div className="table-row">
          <div className="table-col">123</div>
          <div className="table-col">50</div>
          <div className="table-col">Open</div>
        </div> */}
        </div>

        {/* Submit Button */}
        <div className="headerpadd3">
          <button className="submit-button3">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default SpDpTp;
