import React from "react";
import "./panelgroupboard.css";
function PanelGroupBoard() {
  return (
    <div>
      <div className="headerpadd20">
        <div className="date-header20">
          <span className="date-text20">
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
          <div className="day-label20">MAYA DAY Open</div>
        </div>
      </div>
      <div className="form-box20">
        <div className="form-group20">
          <label>PANNA</label>
          <input type="text" />
        </div>
        <div className="form-group20">
          <label>POINTS</label>
          <input type="text" />
        </div>
        <div className="form-group20">
          <div></div>
          <button className="addmore20">
            <span className="addmoreicon20">+</span>&nbsp;Add
          </button>
        </div>
      </div>
      <div className="game-table-container20">
        {/* Table Header */}
        <div className="table-header20">
          <div className="table-col20">Panna</div>
          <div className="table-col20">Points</div>
          <div className="table-col20">Game Type</div>
        </div>

        {/* Placeholder Table Body (Add dynamic rows here if needed) */}
        <div className="table-body20">
          {/* Example row (optional) */}
          <div className="table-row20">
            <div className="table-col20">123</div>
            <div className="table-col20">50</div>
            <div className="table-col20">Open</div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="headerpadd20">
          <button className="submit-button20">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default PanelGroupBoard;
