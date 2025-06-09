import React from "react";
import "./choicepanaspdpboard.css";
import NastedLayout from "../../Containers/NastedLayout";
import PagesIndex from "../../Pages/pageIndex";
function ChoicePanaSpDpBoard() {
  const { state } = PagesIndex.useLocation();

  return (
    <NastedLayout
      title={`${state.title.toUpperCase()} dashboard `}
      route={"/maingame"}
    >
      <div className="headerpadd19">
        <div className="date-header19">
          <span className="date-text19">
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
          <div className="day-label19">MAYA DAY Open</div>
        </div>
      </div>
      <div className="form-box19">
        <div className="digit-options19">
          <label className="checkbox-group19">
            <input type="checkbox" />
            <span>SP</span>
          </label>
          <label className="checkbox-group19">
            <input type="checkbox" />
            <span>DP</span>
          </label>
          <label className="checkbox-group19">
            <input type="checkbox" />
            <span>TP</span>
          </label>
        </div>
      </div>
      <div className="form-box19">
        <div className="digit-inputs19">
          <div className="input-group19">
            <label>LEFT&nbsp;DIGIT</label>
            <input style={{ borderRadius: "10px" }} type="text" />
          </div>
          <div className="input-group19">
            <label>MIDDLE&nbsp;DIGIT</label>
            <input style={{ borderRadius: "10px" }} type="text" />
          </div>
          <div className="input-group19">
            <label>RIGHT&nbsp;DIGIT</label>
            <input style={{ borderRadius: "10px" }} type="text" />
          </div>
        </div>
      </div>
      <div className="form-group19">
        <label>POINTS</label>
        <input type="text" />
      </div>
      <div className="form-group19">
        <div></div>
        <button className="addmore19">
          <span className="addmoreicon19">+</span>&nbsp;Add
        </button>
      </div>
      <div className="game-table-container19">
        {/* Table Header */}
        <div className="table-header19">
          <div className="table-col19">Panna</div>
          <div className="table-col19">Points</div>
          <div className="table-col19">Game Type</div>
        </div>

        {/* Placeholder Table Body (Add dynamic rows here if needed) */}
        <div className="table-body19">
          {/* Example row (optional) */}
          {/* <div className="table-row">
//          <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
        </div>

        {/* Submit Button */}
        <div className="headerpadd19">
          <button className="submit-button19">Submit</button>
        </div>
      </div>
    </NastedLayout>
  );
}

export default ChoicePanaSpDpBoard;
