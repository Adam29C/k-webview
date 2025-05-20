import React from "react";
import "./spmotor.css";
function SpMotor() {
  return (
    <div>
      <div className="headerpadd8">
        <div className="date-header8">
          <span className="date-text8">
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
          <div className="day-label8">MAYA DAY Open</div>
        </div>
      </div>
      <div className="form-box8">
        <div className="form-group8">
          <label>SP&nbsp;MOTOR</label>
          <input type="text" />
        </div>
        <div className="form-group8">
          <label>POINTS</label>
          <input type="text" />
        </div>
        <div className="form-group8">
          {" "}
          <div></div>
          <button className="addmore8">Add&nbsp;More</button>
        </div>
      </div>
      <div className="game-table-container8">
        {/* Table Header */}
        <div className="table-header8">
          <div className="table-col8">Panna</div>
          <div className="table-col8">Points</div>
          <div className="table-col8">Game Type</div>
        </div>

        <div className="table-body8">
          {/* Example row (optional) */}
          <div className="table-row8">
            <div className="table-col8">123</div>
            <div className="table-col8">50</div>
            <div className="table-col8">Open</div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="headerpadd8">
          <button className="submit-button8">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default SpMotor;
