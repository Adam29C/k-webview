import React from "react";
import "./triplepanaboard.css";
import NastedLayout from "../../Containers/NastedLayout";
import PagesIndex from "../../Pages/pageIndex";
function TriplePanaBoard() {
  const { state } = PagesIndex.useLocation();

  return (
    <NastedLayout
      title={`${state.title.toUpperCase()} dashboard `}
      route={"/maingame"}
    >
      <div className="container10">
        <div className="form-box10">
          <div className="form-group10">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select>
              <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
              <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
              <option value="MADHUR DAY Open">MADHUR DAY Open</option>
            </select>
          </div>
          <div className="form-group10">
            <label>Triple&nbsp;Pana</label>
            <input type="text" placeholder="Enter Points" />
          </div>
          <div className="form-group10">
            <label>Enter&nbsp;Points</label>
            <input type="text" placeholder="Enter Points" />
          </div>
          <div className="form-group10">
            <div></div>
            <button className="addmore10">Add&nbsp;More</button>
          </div>

          <div className="tabletype10">
            <div className="tabletext10">Jodi</div>
            <div className="tabletext10">Points</div>
            <div className="tabletext10">Game&nbsp;Type</div>{" "}
          </div>

          <div className="divider10" />
        </div>
      </div>
      <div>
        <div className="info10">
          <span className="infosum10">
            <div className="infotext10">Bids</div>
            <div>0</div>
          </span>
          <span className="infosum10">
            <div className="infotext10"> Points</div>
            <div>{123 || 0}</div>
          </span>
          <button className="submit-button10">Submit</button>{" "}
        </div>
      </div>
    </NastedLayout>
  );
}

export default TriplePanaBoard;
