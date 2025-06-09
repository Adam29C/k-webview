import React from "react";
import "./redbracket.css";
import NastedLayout from "../../Containers/NastedLayout";
import PagesIndex from "../../Pages/pageIndex";

function RedBracket() {
  const { state } = PagesIndex.useLocation();

  return (
    <NastedLayout
      title={`${state.title.toUpperCase()} dashboard `}
      route={"/maingame"}
    >
      <div className="headerpadd1">
        <div className="date-header1">
          <span className="date-text1">
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
          {/* <div className="day-label">MAYA DAY Open</div> */}
          <label className="checkbox-section1">
            <input type="checkbox" />
            <span className="checkbox-label1">BID ON ALL BRACKETS</span>
          </label>
        </div>
      </div>
      <div className="form-box1">
        <div className="form-group1">
          <label>RED BRACKET</label>
          <input type="text" />
        </div>
        <div className="form-group1">
          <label>POINTS</label>
          <input type="text" />
        </div>
        <div className="form-group1">
          <div></div>
          <button className="addmore1">
            <span className="addmoreicon1">+</span>&nbsp;Add
          </button>
        </div>
      </div>
      <div className="game-table-container1">
        {/* Table Header */}
        <div className="table-header1">
          <div className="table-col1">Panna</div>
          <div className="table-col1">Points</div>
          <div className="table-col1">Game Type</div>
        </div>

        {/* Placeholder Table Body (Add dynamic rows here if needed) */}
        <div className="table-body1">
          {/* Example row (optional) */}
          {/* <div className="table-row">
          <div className="table-col">123</div>
          <div className="table-col">50</div>
          <div className="table-col">Open</div>
        </div> */}
        </div>

        {/* Submit Button */}
        <div className="headerpadd1">
          <button className="submit-button1 ">Submit</button>
        </div>
      </div>
    </NastedLayout>
  );
}

export default RedBracket;
