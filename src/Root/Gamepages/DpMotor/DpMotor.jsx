import React from "react";
import "./dpmotor.css";
import PagesIndex from "../../Pages/pageIndex";
function DpMotor() {
  const { state } = PagesIndex.useLocation();

  return (
    <NastedLayout
      title={`${state.title.toUpperCase()} dashboard `}
      route={"/maingame"}
    >
      <div className="headerpadd7">
        <div className="date-header7">
          <span className="date-text7">
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
          <div className="day-label7">MAYA DAY Open</div>
        </div>
      </div>
      <div className="form-box7">
        <div className="form-group7">
          <label>DP&nbsp;MOTOR</label>
          <input type="text" />
        </div>
        <div className="form-group7">
          <label>POINTS</label>
          <input type="text" />
        </div>
        <div className="form-group7">
          {" "}
          <div></div>
          <button className="addmore7">Add&nbsp;More</button>
        </div>
      </div>
      <div className="game-table-container7">
        {/* Table Header */}
        <div className="table-header7">
          <div className="table-col7">Panna</div>
          <div className="table-col7">Points</div>
          <div className="table-col7">Game Type</div>
        </div>

        {/* Placeholder Table Body (Add dynamic rows here if needed) */}
        <div className="table-body7">
          {/* Example row (optional) */}
          {/* <div className="table-row">
          <div className="table-col">123</div>
          <div className="table-col">50</div>
          <div className="table-col">Open</div>
        </div> */}
        </div>

        {/* Submit Button */}
        <div className="headerpadd7">
          <button className="submit-button7">Submit</button>
        </div>
      </div>
    </NastedLayout>
  );
}

export default DpMotor;
