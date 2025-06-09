import React, { useState } from "react";
import "./madhurgame.css";
import NastedLayout from "../../Containers/NastedLayout";
import PagesIndex from "../../Pages/pageIndex";
function MadhurGame() {
    const { state } = PagesIndex.useLocation();

  const [selectedGame, setSelectedGame] = useState("MADHUR NIGHT Open");
  const [points, setPoints] = useState("");
  const [bids, setBids] = useState(0);
  const handleNumberClick = (num) => {
    setPoints((prev) => prev + num);
  };

  const handleSubmit = () => {
    console.log("Game Type:", selectedGame);
    console.log("Points:", points);
    setBids(bids + 1);
    setPoints("");
  };

  return (
     <NastedLayout
      title={`${state.title.toUpperCase()} dashboard `}
      route={"/maingame"}
    >
      <div className="container18">
        <div className="form-box18">
          {/* <div className="form-group18">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
            >
              <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
              <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
              <option value="MADHUR DAY Open">MADHUR DAY Open</option>
            </select>
          </div> */}
           <div className="form-group18">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select>
              <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
              <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
              <option value="MADHUR DAY Open">MADHUR DAY Open</option>
            </select>
          </div>

          <div className="form-group18">
            <label>Enter&nbsp;Points</label>
            <input type="text" placeholder="Enter Points" value={points} />
          </div>
          <div className="divider18" />
          <div className="number-grid18">
            {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
              >
                {num}
              </button>
            ))}
            <div className="zero-button18">
              <button onClick={() => handleNumberClick("0")}>0</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="info18">
          <span className="infosum18">
            <div className="infotext18">Bids</div>
            <div>{bids}</div>
          </span>
          <span className="infosum18">
            <div className="infotext18"> Points</div>
            <div>{points || 0}</div>
          </span>
          <button className="submit-button18" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      </NastedLayout>
  );
}

export default MadhurGame;
