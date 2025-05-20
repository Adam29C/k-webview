import React from "react";
import "./singledigitcode.css";
function SingleDigitCode() {
  return (
    <>
      <div className="container16">
        <div className="form-box16">
          <div className="form-group16">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select>
              <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
              <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
              <option value="MADHUR DAY Open">MADHUR DAY Open</option>
            </select>
          </div>
          <div className="divider16" />
        </div>
      </div>

      <div class="input-grid16">
        <div class="input-wrapper16">
          <div class="circle16">1</div>
          <input type="text" placeholder="Enter Points" />
        </div>
        <div class="input-wrapper16">
          <div class="circle16">2</div>
          <input type="text" placeholder="Enter Points" />
        </div>
        <div class="input-wrapper16">
          <div class="circle16">3</div>
          <input type="text" placeholder="Enter Points" />
        </div>
        <div class="input-wrapper16">
          <div class="circle16">4</div>
          <input type="text" placeholder="Enter Points" />
        </div>
        <div class="input-wrapper16">
          <div class="circle16">5</div>
          <input type="text" placeholder="Enter Points" />
        </div>
        <div class="input-wrapper16">
          <div class="circle16">6</div>
          <input type="text" placeholder="Enter Points" />
        </div>
        <div class="input-wrapper16">
          <div class="circle16">7</div>
          <input type="text" placeholder="Enter Points" />
        </div>
        <div class="input-wrapper16">
          <div class="circle16">8</div>
          <input type="text" placeholder="Enter Points" />
        </div>
        <div class="input-wrapper16">
          <div class="circle16">9</div>
          <input type="text" placeholder="Enter Points" />
        </div>
        <div class="input-wrapper16">
          <div class="circle16">0</div>
          <input type="text" placeholder="Enter Points" />
        </div>
      </div>

      <div className="info16">
        <span className="infosum16">
          <div className="infotext16">Bids</div>
          <div>0</div>
        </span>
        <span className="infosum16">
          <div className="infotext16"> Points</div>
          <div>{123 || 0}</div>
        </span>
        <button className="submit-button16">Submit</button>{" "}
      </div>
    </>
  );
}

export default SingleDigitCode;
