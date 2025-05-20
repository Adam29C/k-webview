import React from "react";
import "./evenodd.css";
function EvenOdd() {
  return (
    <div>
      <div className="headerpadd5">
        <div className="date-header5">
          {/* <div className="date-text5">09/05/2025</div> */}
             <span className="date-text5">
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
          <div className="day-label5">MAYA DAY Open</div>
        </div>
      </div>
      <div className="form-box5">
        <div className="digit-options5">
          <label className="checkbox-group5">
            <input type="checkbox" />
            <span>Add Odd Digits</span>
          </label>
          <label className="checkbox-group5">
            <input type="checkbox" />
            <span>Add Even Digits</span>
          </label>
        </div>
        <div className="form-group5">
          <label>POINTS</label>
          <input type="text" />
        </div>
        <div className="form-group5">
          {" "}
          <div></div>
          <button className="addmore5">
            {" "}
            <span className="addmoreicon5">+</span>&nbsp;Add
          </button>
        </div>
      </div>
      <div className="game-table-container5">
        {/* Table Header */}
        <div className="table-header5">
          <div className="table-col5">Panna</div>
          <div className="table-col5">Points</div>
          <div className="table-col5">Game Type</div>
        </div>

        {/* Placeholder Table Body (Add dynamic rows here if needed) */}
        <div className="table-body5">
          {/* Example row (optional) */}
          {/* <div className="table-row">
          <div className="table-col">123</div>
          <div className="table-col">50</div>
          <div className="table-col">Open</div>
        </div> */}
        </div>

        {/* Submit Button */}
        <div className="headerpadd5">
          <button className="submit-button5">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default EvenOdd;
