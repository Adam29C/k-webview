import "./fullsangam.css";
import NastedLayout from "../../Containers/NastedLayout";
import PagesIndex from "../../Pages/pageIndex";
function FullSangam() {
  const { state } = PagesIndex.useLocation();

  return (
    <NastedLayout
      title={`${state.title.toUpperCase()} dashboard `}
      route={"/maingame"}
    >
      <div className="headerpadd22">
        <div className="date-header22">
          {/* <div className="date-text22">09/05/2025</div> */}
          <span className="date-text22">
            {/* <i  class="fa-solid fa-calendar-days"></i> &nbsp; */}
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
            {/* {convertDateFormat(date)} */}
          </span>
        </div>
      </div>
      <div className="form-box22">
        <div className="form-group22">
          <label>OPEN PANNA</label>
          <input type="text" />
        </div>
        <div className="form-group22">
          <label>CLOSE PANNA</label>
          <input type="text" />
        </div>
        <div className="form-group22">
          <label>POINTS</label>
          <input type="text" />
        </div>
        <div className="form-group22">
          <div></div>
          <button className="addmore22">
            <span className="addmoreicon22">+</span>&nbsp;Add
          </button>
        </div>
      </div>
      <div className="game-table-container22">
        {/* Table Header */}
        <div className="table-header22">
          <div className="table-col22">Panna</div>
          <div className="table-col22">Points</div>
          <div className="table-col22">Game Type</div>
        </div>

        {/* Placeholder Table Body (Add dynamic rows here if needed) */}
        <div className="table-body22">
          {/* Example row (optional) */}
          <div className="table-row22">
            <div className="table-col22">123</div>
            <div className="table-col22">50</div>
            <div className="table-col22">Open</div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="headerpadd22">
          <button className="submit-button22">Submit</button>
        </div>
      </div>
    </NastedLayout>
  );
}

export default FullSangam;
