import React from 'react'
import "./twodigitpanel.css"
function TwoDigitPanel() {
  return (
       <div>
      <div className="headerpadd4">
        <div className="date-header4">
          {/* <div className="date-text4">09/05/2025</div> */}
              <span className="date-text4">
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
          <div className="day-label4">MAYA DAY Open</div>
        </div>
      </div>
      <div className="form-box4">
        <div className="form-group4">
          <label>TWO DIGIT(CP,SR)</label>
          <input type="text" />
        </div>
        <div className="form-group4">
          <label>POINTS</label>
          <input type="text" />
        </div>
        <div className="form-group4">
          {" "}
          <div></div>
          <button className="addmore4">
            {" "}
            <span className="addmoreicon4">+</span>&nbsp;Add
          </button>
        </div>
      </div>
      <div className="game-table-container4">
        {/* Table Header */}
        <div className="table-header4">
          <div className="table-col4">Panna</div>
          <div className="table-col4">Points</div>
          <div className="table-col4">Game Type</div>
        </div>

        {/* Placeholder Table Body (Add dynamic rows here if needed) */}
        <div className="table-body4">
          {/* Example row (optional) */}
          {/* <div className="table-row">
          <div className="table-col">123</div>
          <div className="table-col">50</div>
          <div className="table-col">Open</div>
        </div> */}
        </div>

        {/* Submit Button */}
        <div className="headerpadd4">
          <button className="submit-button4">Submit</button>
        </div>
      </div>
    </div>

  )
}

export default TwoDigitPanel