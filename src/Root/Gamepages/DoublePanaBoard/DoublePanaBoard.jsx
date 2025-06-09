import React from "react";
import "./doublepanaboard.css";
import PagesIndex from "../../Pages/pageIndex";
import NastedLayout from "../../Containers/NastedLayout";
function DoublePanaBoard() {
  const { state } = PagesIndex.useLocation();

  return (
    <NastedLayout
      title={`${state.title.toUpperCase()} dashboard `}
      route={"/maingame"}
    >
      <div className="container12">
        <div className="form-box12">
          <div className="form-group12">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select>
              <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
              <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
              <option value="MADHUR DAY Open">MADHUR DAY Open</option>
            </select>
          </div>
          <div className="form-group12">
            <label>Double&nbsp;Pana</label>
            <input type="text" placeholder="Enter Points" />
          </div>
          <div className="form-group12">
            <label>Enter&nbsp;Points</label>
            <input type="text" placeholder="Enter Points" />
          </div>
          <div className="form-group12">
            <div></div>
            <button className="addmore12">Add&nbsp;More</button>
          </div>

          <div className="tabletype12">
            <div className="tabletext12">Jodi</div>
            <div className="tabletext12">Points</div>
            <div className="tabletext12">Game&nbsp;Type</div>{" "}
          </div>

          <div className="divider12" />
        </div>
      </div>
      <div>
        <div className="info12">
          <span className="infosum12">
            <div className="infotext12">Bids</div>
            <div>0</div>
          </span>
          <span className="infosum12">
            <div className="infotext12"> Points</div>
            <div>{123 || 0}</div>
          </span>
          <button className="submit-button12">Submit</button>{" "}
        </div>
      </div>
    </NastedLayout>
  );
}

export default DoublePanaBoard;
