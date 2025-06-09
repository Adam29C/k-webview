import React from "react";
import "./doublepanabulk.css";
import PagesIndex from "../../Pages/pageIndex";
import NastedLayout from "../../Containers/NastedLayout";
function DoublePanaBulk() {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const { state } = PagesIndex.useLocation();

  return (
    <NastedLayout
      title={`${state.title.toUpperCase()} dashboard `}
      route={"/maingame"}
    >
      <div className="container11">
        <div className="form-box11">
          <div className="form-group11">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select>
              <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
              <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
              <option value="MADHUR DAY Open">MADHUR DAY Open</option>
            </select>
          </div>

          <div className="form-group11">
            <label>Enter&nbsp;Points</label>
            <input type="text" placeholder="Enter Points" />
          </div>
          <div className="keypad11">
            {keys.map((key) => (
              <button key={key} className="key11">
                {key}
              </button>
            ))}
          </div>
          <div className="tabletype11">
            <div className="tabletext11">Jodi</div>
            <div className="tabletext11">Points</div>
            <div className="tabletext11">Game&nbsp;Type</div>{" "}
          </div>

          <div className="divider11" />
        </div>
      </div>
      <div>
        <div className="info11">
          <span className="infosum11">
            <div className="infotext11">Bids</div>
            <div>0</div>
          </span>
          <span className="infosum11">
            <div className="infotext11"> Points</div>
            <div>{123 || 0}</div>
          </span>
          <button className="submit-button11">Submit</button>{" "}
        </div>
      </div>
    </NastedLayout>
  );
}

export default DoublePanaBulk;
