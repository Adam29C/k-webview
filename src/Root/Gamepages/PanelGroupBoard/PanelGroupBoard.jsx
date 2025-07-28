// import React from "react";
// import "./panelgroupboard.css";
// import NastedLayout from "../../Containers/NastedLayout";
// import PagesIndex from "../../Pages/pageIndex";
// function PanelGroupBoard() {
//   const navigate = PagesIndex.useNavigate();
//   const { state } = PagesIndex.useLocation();
//   const { selectedProvider, getProfile } = PagesIndex.useSelector(
//     (state) => state.CommonSlice
//   );

//   const [GameTypeSelect, setGameTypeSelect] = PagesIndex.useState("Open");
//   const [GameSessions, setGameSessions] = PagesIndex.useState();

//   return (
//     <NastedLayout
//       title={`${selectedProvider?.providerName} dashboard `}
//       route={"/maingame"}
//     >
//       {/* <div className="headerpadd20">
//         <div className="date-header20">
//           <span className="date-text20">
//             <div
//               onClick={() => document.getElementById("dateInput").showPicker()}
//             >
//               <input
//                 id="dateInput"
//                 type="date"
//                 className="date-input"
//                 // value={selectedDate}
//                 // onChange={handleDateChange}
//               />
//             </div>
//           </span>
//           <div className="day-label20">MAYA DAY Open</div>
//         </div>
//       </div> */}
//       <div className="form-box20 ">
//         <div className="form-group13">
//           <label>Select&nbsp;Game&nbsp;Type</label>
//           <select
//             onChange={(e) => setGameTypeSelect(e.target.value)}
//             value={GameTypeSelect}
//           >
//             {GameSessions?.gameSession === "Close" ? (
//               <option value="Close">
//                 {selectedProvider?.providerName} CLOSE
//               </option>
//             ) : (
//               <>
//                 <option value="Open">
//                   {selectedProvider?.providerName} OPEN
//                 </option>
//                 <option value="Close">
//                   {selectedProvider?.providerName} CLOSE
//                 </option>
//               </>
//             )}
//           </select>
//         </div>
//         <div className="form-group20">
//           <label>PANNA</label>
//           <input type="text" />
//         </div>
//         <div className="form-group20">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group20">
//           <div></div>
//           <button className="addmore20">
//             <span className="addmoreicon20">+</span>&nbsp;Add
//           </button>
//         </div>
//       </div>
//       <div className="game-table-container20">
//         {/* Table Header */}
//         <div className="table-header20">
//           <div className="table-col20">Panna</div>
//           <div className="table-col20">Points</div>
//           <div className="table-col20">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body20">
//           {/* Example row (optional) */}
//           <div className="table-row20">
//             <div className="table-col20">123</div>
//             <div className="table-col20">50</div>
//             <div className="table-col20">Open</div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd20">
//           <button className="submit-button20">Submit</button>
//         </div>
//       </div>
//     </NastedLayout>
//   );
// }

// export default PanelGroupBoard;

import React from "react";
import "./panelgroupboard.css";
import NastedLayout from "../../Containers/NastedLayout";
import PagesIndex from "../../Pages/pageIndex";

function PanelGroupBoard() {
  const navigate = PagesIndex.useNavigate();
  const { state } = PagesIndex.useLocation();
  const { selectedProvider, getProfile } = PagesIndex.useSelector(
    (state) => state.CommonSlice
  );

  const [GameTypeSelect, setGameTypeSelect] = PagesIndex.useState("Open");
  const [GameSessions, setGameSessions] = PagesIndex.useState();
  const [pannaInput, setPannaInput] = PagesIndex.useState("");
  const [suggestions, setSuggestions] = PagesIndex.useState([]);

  const handlePannaChange = (e) => {
    const input = e.target.value;
    setPannaInput(input);

    if (input.length >= 2) {
      const flatPanas = PanaArray.flat();
      const filtered = flatPanas.filter((p) => p.startsWith(input));
      setSuggestions(filtered.slice(0, 10));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (value) => {
    setPannaInput(value);
    setSuggestions([]);
  };

  return (
    <NastedLayout
      title={`${selectedProvider?.providerName} dashboard `}
      route={"/maingame"}
    >
      <div className="form-box20">
        <div className="form-group13">
          <label>Select&nbsp;Game&nbsp;Type</label>
          <select
            onChange={(e) => setGameTypeSelect(e.target.value)}
            value={GameTypeSelect}
          >
            {GameSessions?.gameSession === "Close" ? (
              <option value="Close">
                {selectedProvider?.providerName} CLOSE
              </option>
            ) : (
              <>
                <option value="Open">
                  {selectedProvider?.providerName} OPEN
                </option>
                <option value="Close">
                  {selectedProvider?.providerName} CLOSE
                </option>
              </>
            )}
          </select>
        </div>

        <div className="form-group20" style={{ position: "relative" }}>
          <label>PANNA</label>
          <input
            type="text"
            value={pannaInput}
            onChange={handlePannaChange}
            autoComplete="off"
          />
          {suggestions.length > 0 && (
            <ul className="suggestion-box">
              {suggestions.map((item, idx) => (
                <li key={idx} onClick={() => handleSuggestionClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="form-group20">
          <label>POINTS</label>
          <input type="text" />
        </div>

        <div className="form-group20">
          <div></div>
          <button className="addmore20">
            <span className="addmoreicon20">+</span>&nbsp;Add
          </button>
        </div>
      </div>

      <div className="game-table-container20">
        <div className="table-header20">
          <div className="table-col20">Panna</div>
          <div className="table-col20">Points</div>
          <div className="table-col20">Game Type</div>
        </div>

        <div className="table-body20">
          <div className="table-row20">
            <div className="table-col20">123</div>
            <div className="table-col20">50</div>
            <div className="table-col20">Open</div>
          </div>
        </div>

        <div className="headerpadd20">
          <button className="submit-button20">Submit</button>
        </div>
      </div>
    </NastedLayout>
  );
}

export default PanelGroupBoard;

const PanaArray = [
  ["128", "137", "236", "678", "123", "268", "367", "178"],
  ["129", "147", "246", "679", "124", "179", "467", "269"],
  ["120", "157", "256", "670", "170", "567", "125", "260"],
  ["130", "158", "680", "356", "180", "568", "135", "360"],
  ["140", "159", "456", "690", "190", "569", "145", "460"],
  ["245", "240", "290", "259", "470", "457", "579", "790"],
  ["345", "890", "390", "458", "480", "340", "589", "359"],
  ["139", "189", "148", "468", "346", "369", "689", "134"],
  ["789", "379", "347", "478", "248", "289", "239", "234"],
  ["230", "280", "258", "235", "357", "578", "780", "370"],
  ["380", "880", "335", "330", "588", "358"],
  ["570", "250", "255", "557", "200", "700"],
  ["247", "477", "779", "279", "229", "224"],
  ["167", "117", "112", "126", "266", "667"],
  ["249", "244", "799", "299", "447", "479"],
  ["489", "448", "344", "899", "399", "349"],
  ["138", "368", "336", "133", "688", "188"],
  ["445", "459", "599", "990", "490", "440"],
  ["149", "144", "446", "199", "699", "469"],
  ["348", "334", "339", "488", "889", "389"],
  ["100", "600", "155", "556", "560", "150"],
  ["660", "115", "110", "566", "156", "160"],
  ["300", "800", "580", "558", "355", "350"],
  ["400", "900", "455", "559", "590", "450"],
  ["168", "136", "113", "668", "366", "118"],
  ["146", "114", "669", "466", "119", "169"],
  ["778", "278", "237", "223", "228", "377"],
  ["337", "378", "238", "288", "788", "233"],
  ["220", "225", "770", "577", "257", "270"],
  ["122", "677", "177", "127", "267", "226"],
  ["227", "277", "777", "222"],
  ["499", "449", "444", "999"],
  ["166", "116", "111", "666"],
  ["338", "388", "888", "333"],
  ["500", "550", "555", "000"],
];
