import React from 'react'
import "./jodidigitboard.css"
function JodiDigitBoard() {
  return (
       <div>
      <div className="form-box15">
        <div className="form-group15">
          <label>Enter&nbsp;Points</label>
          <input type="text" placeholder="Enter Points" />
        </div>

        <div className="form-group15">
          <label>Enter&nbsp;Jodi&nbsp;Digits</label>
          <input type="text" placeholder="Enter Points" />
        </div>
        <div className="form-group15">
          <div></div>
          <button className="addmore15">Add&nbsp;More</button>
        </div>
      </div>
      <div className="tabletype15">
        <div className="tabletext15">Jodi</div>
        <div className="tabletext15">Points</div>
        <div className="tabletext15">Game&nbsp;Type</div>
      </div>
      <div className="divider15" />

      <div className="info15">
        <span className="infosum15">
          <div className="infotext15">Bids</div>
          <div>0</div>
        </span>
        <span className="infosum15">
          <div className="infotext15"> Points</div>
          <div>{123 || 0}</div>
        </span>
        <button className="submit-button15">Submit</button>
      </div>
    </div>

  )
}

export default JodiDigitBoard