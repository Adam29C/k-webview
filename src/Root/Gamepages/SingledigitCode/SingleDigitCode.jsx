// import React from "react";
// import "./singledigitcode.css";
// import NastedLayout from "../../Containers/NastedLayout";
// import PagesIndex from "../../Pages/pageIndex";
// function SingleDigitCode() {
//   const { state } = PagesIndex.useLocation();

//   const { selectedProvider, getProfile } = PagesIndex.useSelector(
//     (state) => state.CommonSlice
//   );
//   // const { getProfile } = PagesIndex.useSelector((state) => state.CommonSlice);

//   console.log("selectedProvider", getProfile);

//   const PlaceBid = () => {
//     //   {
//     //     "bidAmount": 1,
//     //     "providerId": selectedProvider?.providerId,
//     //     "gameDate": "05-14-2025",
//     //     "gameSession": "Open",
//     //     "bidData": [
//     //         {
//     //             "userId": getProfile.?_id,
//     //             "providerId": selectedProvider?.providerId,
//     //             "gameTypeId": "6690701918732c8c3c427b09",
//     //             "providerName": selectedProvider?.providerName,
//     //             "gameTypeName": "Single Digit",
//     //             "gameTypePrice": "10.0",
//     //             "userName": getProfile?.username,
//     //             "mobileNumber": getProfile?.mobile,
//     //             "bidDigit": "1",
//     //             "biddingPoints": "1",
//     //             "gameSession": "Open",
//     //             "winStatus": 0,
//     //             "gameWinPoints": "0",
//     //             "gameDate": "05-14-2025",
//     //             "dateStamp": 1747161000
//     //         }
//     //     ]
//     // }
//   };

//   const getMainDayDetails = async () => {
//     const res = await PagesIndex.commanservice.FOR_GET_LIST(
//       `${PagesIndex.apiRoutes.GET_DAYS_GAME_BIDS_LIST}`
//     );
//   };

//   PagesIndex.useEffect(() => {
//     getMainDayDetails();
//   }, []);

//   return (
//     <NastedLayout
//       title={`${selectedProvider?.providerName} single digit board `}
//       route={"/maingame"}
//     >
//       <div className="container16">
//         <div className="form-box16">
//           <div className="form-group16">
//             <label>Select&nbsp;Game&nbsp;Type</label>
//             <select>
//               <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
//               <option value="MADHUR DAY Open">MADHUR DAY Open</option>
//             </select>
//           </div>
//           <div className="divider16" />
//         </div>
//       </div>

//       <div class="input-grid16">
//         <div class="input-wrapper16">
//           <div class="circle16">1</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper16">
//           <div class="circle16">2</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper16">
//           <div class="circle16">3</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper16">
//           <div class="circle16">4</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper16">
//           <div class="circle16">5</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper16">
//           <div class="circle16">6</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper16">
//           <div class="circle16">7</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper16">
//           <div class="circle16">8</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper16">
//           <div class="circle16">9</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper16">
//           <div class="circle16">0</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//       </div>

//       <div className="info16">
//         <span className="infosum16">
//           <div className="infotext16">Bids</div>
//           <div>0</div>
//         </span>
//         <span className="infosum16">
//           <div className="infotext16">Points</div>
//           <div>{123 || 0}</div>
//         </span>
//         <button className="submit-button16" onClick={(e) => PlaceBid(e)}>
//           Submit
//         </button>
//       </div>
//     </NastedLayout>
//   );
// }

// export default SingleDigitCode;

import React, { useState, useEffect } from "react";
import "./singledigitcode.css";
import NastedLayout from "../../Containers/NastedLayout";
import PagesIndex from "../../Pages/pageIndex";

function SingleDigitCode() {
  const { state } = PagesIndex.useLocation();
  const { selectedProvider, getProfile } = PagesIndex.useSelector(
    (state) => state.CommonSlice
  );

  // State to store input values for digits 0 to 9
  const [bidInputs, setBidInputs] = useState(Array(10).fill(""));

  // Calculate bids and total points
  const bids = bidInputs.filter((val) => Number(val) > 0).length;
  const points = bidInputs.reduce(
    (total, val) => total + (Number(val) || 0),
    0
  );

  const handleInputChange = (index, value) => {
    const newInputs = [...bidInputs];
    newInputs[index] = value;
    setBidInputs(newInputs);
  };

  const PlaceBid = () => {
    console.log("Placing bid with:", bidInputs);
    console.log("Total Bids:", bids, "Total Points:", points);

    //   {
    //     //     "bidAmount": 1,
    //     //     "providerId": selectedProvider?.providerId,
    //     //     "gameDate": "05-14-2025",
    //     //     "gameSession": "Open",
    //     //     "bidData": [
    //     //         {
    //     //             "userId": getProfile.?_id,
    //     //             "providerId": selectedProvider?.providerId,
    //     //             "gameTypeId": "6690701918732c8c3c427b09",
    //     //             "providerName": selectedProvider?.providerName,
    //     //             "gameTypeName": "Single Digit",
    //     //             "gameTypePrice": "10.0",
    //     //             "userName": getProfile?.username,
    //     //             "mobileNumber": getProfile?.mobile,
    //     //             "bidDigit": "1",
    //     //             "biddingPoints": "1",
    //     //             "gameSession": "Open",
    //     //             "winStatus": 0,
    //     //             "gameWinPoints": "0",
    //     //             "gameDate": "05-14-2025",
    //     //             "dateStamp": 1747161000
    //     //         }
    //     //     ]
    //     // }

    // Actual bid submission logic goes here
  };

  const getMainDayDetails = async () => {
    const res = await PagesIndex.commanservice.FOR_GET_LIST(
      `${PagesIndex.apiRoutes.GET_DAYS_GAME_BIDS_LIST}`
    );
  };

  useEffect(() => {
    getMainDayDetails();
  }, []);

  return (
    <NastedLayout
      title={`${selectedProvider?.providerName} single digit board `}
      route={"/maingame"}
    >
      <div className="container16">
        <div className="form-box16">
          <div className="form-group16">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select>
              <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
              <option value="MADHUR DAY Open">MADHUR DAY Open</option>
            </select>
          </div>
          <div className="divider16" />
        </div>
      </div>

      <div className="input-grid16">
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="input-wrapper16">
            <div className="circle16">{index}</div>
            <input
              type="number"
              placeholder="Enter Points"
              value={bidInputs[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="info16">
        <span className="infosum16">
          <div className="infotext16">Bids</div>
          <div>{bids}</div>
        </span>
        <span className="infosum16">
          <div className="infotext16">Points</div>
          <div>{points}</div>
        </span>
        <button className="submit-button16" onClick={PlaceBid}>
          Submit
        </button>
      </div>
    </NastedLayout>
  );
}

export default SingleDigitCode;
