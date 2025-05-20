import React from "react";
import "./halfsangam.css";
function HalfSangam() {
  return (
    <div>
      <div className="headerpadd21">
        <div className="date-header21">
          <span className="date-text21">
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
          <div className="day-label21">MAYA DAY Open</div>
        </div>
      </div>
      <div className="form-box21">
        <div className="form-group21">
          <label>OPEN DIGIT</label>
          <input type="text" />
        </div>
        <div className="form-group21">
          <label>CLOSE DIGIT</label>
          <input type="text" />
        </div>
        <div className="form-group21">
          <label>POINTS</label>
          <input type="text" />
        </div>
        <div className="form-group21">
          <div></div>
          <button className="addmore21">
            <span className="addmoreicon21">+</span>&nbsp;Add
          </button>
        </div>
      </div>
      <div className="game-table-container21">
        {/* Table Header */}
        <div className="table-header21">
          <div className="table-col21">Panna</div>
          <div className="table-col21">Points</div>
          <div className="table-col21">Game Type</div>
        </div>

        {/* Placeholder Table Body (Add dynamic rows here if needed) */}
        <div className="table-body21">
          {/* Example row (optional) */}
          {/* <div className="table-row">
        <div className="table-col">123</div>
        <div className="table-col">50</div>
        <div className="table-col">Open</div>
      </div> */}
        </div>

        {/* Submit Button */}
        <div className="headerpadd21">
          <button className="submit-button21">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default HalfSangam;
