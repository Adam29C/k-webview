import React from 'react'
import "./groupjodi.css"
function GroupJodi() {
  return (
       <div>
      <div className="headerpadd6">
        <div className="date-header6">
          {/* <div className="date-text6">09/05/2025</div> */}
              <span className="date-text6">
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
      <div className="form-box6">
        <div className="form-group6">
          <label>JODI&nbsp;DIGIT</label>
          <input type="text" />
        </div>
        <div className="form-group6">
          <label>POINTS</label>
          <input type="text" />
        </div>
        <div className="form-group6">
          <div></div>
          <button className="addmore6">
            <span className="addmoreicon6">+</span>&nbsp;Add
          </button>
        </div>
      </div>
      <div className="game-table-container6">
        {/* Table Header */}
        <div className="table-header6">
          <div className="table-col6">Panna</div>
          <div className="table-col6">Points</div>
          <div className="table-col6">Game Type</div>
        </div>

        {/* Placeholder Table Body (Add dynamic rows here if needed) */}
        <div className="table-body6">
          {/* Example row (optional) */}
          {/* <div className="table-row">
          <div className="table-col">123</div>
          <div className="table-col">50</div>
          <div className="table-col">Open</div>
        </div> */}
        </div>

        {/* Submit Button */}
        <div className="headerpadd6">
          <button className="submit-button6">Submit</button>
        </div>
      </div>
    </div>

  )
}

export default GroupJodi