import React from "react";
import "./twodigitpanel.css";
import NastedLayout from "../../Containers/NastedLayout";
import PagesIndex from "../../Pages/pageIndex";

function TwoDigitPanel() {
  const { state } = PagesIndex.useLocation();

  const PlaceBid = () => {
    //   {
    //     "bidAmount": 1,
    //     "providerId": "67eebea9a361832d96e38f33",
    //     "gameDate": "05-14-2025",
    //     "gameSession": "Open",
    //     "bidData": [
    //         {
    //             "userId": "67974c7eb81801947f2d26ef",
    //             "providerId": "67eebea9a361832d96e38f33",
    //             "gameTypeId": "6690701918732c8c3c427b09",
    //             "providerName": "DHARM DAY",
    //             "gameTypeName": "Single Digit",
    //             "gameTypePrice": "10.0",
    //             "userName": "codeit02",
    //             "mobileNumber": "+919987654321",
    //             "bidDigit": "1",
    //             "biddingPoints": "1",
    //             "gameSession": "Open",
    //             "winStatus": 0,
    //             "gameWinPoints": "0",
    //             "gameDate": "05-14-2025",
    //             "dateStamp": 1747161000
    //         }
    //     ]
    // }
  };

  return (
    <NastedLayout
      title={`${state.title.toUpperCase()} dashboard `}
      route={"/maingame"}
    >
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
          <button className="submit-button4" onClick={(e) => PlaceBid(e)}>
            Submit
          </button>
        </div>
      </div>
    </NastedLayout>
  );
}

export default TwoDigitPanel;
