import React from "react";
import "./digitbasedjodi.css";
function DigitBasedjodi() {
  return (
    <div>
      <div className="headerpadd2">
        <div className="date-header2">
          {/* <div className="date-text2">09/05/2025</div> */}
             <span className="date-text2">
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
        </div>
      </div>
      <div className="form-box2">
        {/* <div className="form-group">
          <label>RED BRACKET</label>
          <input type="text" />
        </div> */}

        <div className="digit-inputs2">
          <div className="input-group2">
            <label>LEFT DIGIT</label>
            <input style={{ borderRadius: "10px" }} type="text" />
          </div>
          <div className="input-group2">
            <label>RIGHT DIGIT</label>
            <input style={{ borderRadius: "10px" }} type="text" />
          </div>
        </div>
        <div className="form-group2">
          <label>POINTS</label>
          <input type="text" />
        </div>
        <div className="form-group2">
          <div></div>
          <button className="addmore2">
            <span className="addmoreicon2">+</span>&nbsp;Add
          </button>
        </div>
      </div>
      <div className="game-table-container2">
        {/* Table Header */}
        <div className="table-header2">
          <div className="table-col2">Panna</div>
          <div className="table-col2">Points</div>
          <div className="table-col2">Game Type</div>
        </div>

        {/* Placeholder Table Body (Add dynamic rows here if needed) */}
        <div className="table-body2">
          {/* Example row (optional) */}
          {/* <div className="table-row">
          <div className="table-col">123</div>
          <div className="table-col">50</div>
          <div className="table-col">Open</div>
        </div> */}
        </div>

        {/* Submit Button */}
        <div className="headerpadd2">
          <button className="submit-button2 ">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default DigitBasedjodi;
