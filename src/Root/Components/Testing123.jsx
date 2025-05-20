// madhur game..... 1
// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function GameForm() {
//   const [selectedGame, setSelectedGame] = useState("MADHUR NIGHT Open");
//   const [points, setPoints] = useState("");
//   const [bids, setBids] = useState(0);

//   const handleNumberClick = (num) => {
//     setPoints((prev) => prev + num);
//   };

//   const handleSubmit = () => {
//     console.log("Game Type:", selectedGame);
//     console.log("Points:", points);
//     setBids(bids + 1);
//     setPoints("");
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="form-box">
//           <div className="form-group">
//             <label>Select&nbsp;Game&nbsp;Type</label>
//             <select
//               value={selectedGame}
//               onChange={(e) => setSelectedGame(e.target.value)}
//             >
//               <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
//               <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
//               <option value="MADHUR DAY Open">MADHUR DAY Open</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Enter&nbsp;Points</label>
//             <input type="text" placeholder="Enter Points" value={points} />
//           </div>
//           <div className="divider" />
//           <div className="number-grid">
//             {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
//               <button
//                 key={num}
//                 onClick={() => handleNumberClick(num.toString())}
//               >
//                 {num}
//               </button>
//             ))}
//             <div className="zero-button">
//               <button onClick={() => handleNumberClick("0")}>0</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="info">
//           <span className="infosum">
//             <div className="infotext">Bids</div>
//             <div>{bids}</div>
//           </span>
//           <span className="infosum">
//             <div className="infotext"> Points</div>
//             <div>{points || 0}</div>
//           </span>
//           <button className="submit-button" onClick={handleSubmit}>
//             Submit
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// ending madhur game 1

// jodi digit bulk 2 starting...
// import React from "react";
// import "../../assets/css/gameratelist.css";

// function Testing123() {
//   return (
//     <div>
//       <div className="form-box">
//         <div className="form-group">
//           <label>Enter&nbsp;Points</label>
//           <input type="text" placeholder="Enter Points" />
//         </div>

//         <div className="form-group">
//           <label>Enter&nbsp;Jodi&nbsp;Digits</label>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//       </div>
//       <div className="tabletype">
//         <div className="tabletext">Jodi</div>
//         <div className="tabletext">Points</div>
//         <div className="tabletext">Game&nbsp;Type</div>
//       </div>
//       <div className="divider" />

//       <div className="info">
//         <span className="infosum">
//           <div className="infotext">Bids</div>
//           <div>0</div>
//         </span>
//         <span className="infosum">
//           <div className="infotext"> Points</div>
//           <div>{123 || 0}</div>
//         </span>
//         <button className="submit-button">Submit</button>
//       </div>
//     </div>
//   );
// }

// export default Testing123;
//jodi digit bulk 2 ending...

// starting 3 single digit code
// import React from "react";
// import "../../assets/css/gameratelist.css";

// function Testing123() {
//   return (
//     <>
//       <div className="container">
//         <div className="form-box">
//           <div className="form-group">
//             <label>Select&nbsp;Game&nbsp;Type</label>
//             <select>
//               <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
//               <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
//               <option value="MADHUR DAY Open">MADHUR DAY Open</option>
//             </select>
//           </div>
//           <div className="divider" />
//         </div>
//       </div>

//       <div class="input-grid">
//         <div class="input-wrapper">
//           <div class="circle">1</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper">
//           <div class="circle">2</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper">
//           <div class="circle">3</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper">
//           <div class="circle">4</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper">
//           <div class="circle">5</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper">
//           <div class="circle">6</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper">
//           <div class="circle">7</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper">
//           <div class="circle">8</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper">
//           <div class="circle">9</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div class="input-wrapper">
//           <div class="circle">0</div>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//       </div>

//       <div className="info">
//         <span className="infosum">
//           <div className="infotext">Bids</div>
//           <div>0</div>
//         </span>
//         <span className="infosum">
//           <div className="infotext"> Points</div>
//           <div>{123 || 0}</div>
//         </span>
//         <button className="submit-button">Submit</button>{" "}
//       </div>
//     </>
//   );
// }

// export default Testing123;
/*ending of 3 single digit code */

// starting of 4 jodi digit Board

// import React from "react";
// import "../../assets/css/gameratelist.css";

// function Testing123() {
//   return (
//     <div>
//       <div className="form-box">
//         <div className="form-group">
//           <label>Enter&nbsp;Points</label>
//           <input type="text" placeholder="Enter Points" />
//         </div>

//         <div className="form-group">
//           <label>Enter&nbsp;Jodi&nbsp;Digits</label>
//           <input type="text" placeholder="Enter Points" />
//         </div>
//         <div className="form-group">
//           <div></div>
//           <button className="addmore">Add&nbsp;More</button>
//         </div>
//       </div>
//       <div className="tabletype">
//         <div className="tabletext">Jodi</div>
//         <div className="tabletext">Points</div>
//         <div className="tabletext">Game&nbsp;Type</div>
//       </div>
//       <div className="divider" />

//       <div className="info">
//         <span className="infosum">
//           <div className="infotext">Bids</div>
//           <div>0</div>
//         </span>
//         <span className="infosum">
//           <div className="infotext"> Points</div>
//           <div>{123 || 0}</div>
//         </span>
//         <button className="submit-button">Submit</button>
//       </div>
//     </div>
//   );
// }

// export default Testing123;
//ending of 4 jodi digit board

// today....
// starting of 5 Singlepana bulk done

// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   return (
//     <>
//       <div className="container">
//         <div className="form-box">
//           <div className="form-group">
//             <label>Select&nbsp;Game&nbsp;Type</label>
//             <select>
//               <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
//               <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
//               <option value="MADHUR DAY Open">MADHUR DAY Open</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Enter&nbsp;Points</label>
//             <input type="text" placeholder="Enter Points" />
//           </div>
//           <div className="keypad">
//             {keys.map((key) => (
//               <button key={key} className="key">
//                 {key}
//               </button>
//             ))}
//           </div>
//           <div className="tabletype">
//             <div className="tabletext">Jodi</div>
//             <div className="tabletext">Points</div>
//             <div className="tabletext">Game&nbsp;Type</div>{" "}
//           </div>

//           <div className="divider" />
//         </div>
//       </div>
//       <div>
//         <div className="info">
//           <span className="infosum">
//             <div className="infotext">Bids</div>
//             <div>0</div>
//           </span>
//           <span className="infosum">
//             <div className="infotext"> Points</div>
//             <div>{123 || 0}</div>
//           </span>
//           <button className="submit-button">Submit</button>{" "}
//         </div>
//       </div>
//     </>
//   );
// }
// ending of 5 single pana bulk

// starting of 6 double pana board done

// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   return (
//     <>
//       <div className="container">
//         <div className="form-box">
//           <div className="form-group">
//             <label>Select&nbsp;Game&nbsp;Type</label>
//             <select>
//               <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
//               <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
//               <option value="MADHUR DAY Open">MADHUR DAY Open</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Double&nbsp;Pana</label>
//             <input type="text" placeholder="Enter Points" />
//           </div>
//           <div className="form-group">
//             <label>Enter&nbsp;Points</label>
//             <input type="text" placeholder="Enter Points" />
//           </div>
//           <div className="form-group">
//             <div></div>
//             <button className="addmore">Add&nbsp;More</button>
//           </div>

//           <div className="tabletype">
//             <div className="tabletext">Jodi</div>
//             <div className="tabletext">Points</div>
//             <div className="tabletext">Game&nbsp;Type</div>{" "}
//           </div>

//           <div className="divider" />
//         </div>
//       </div>
//       <div>
//         <div className="info">
//           <span className="infosum">
//             <div className="infotext">Bids</div>
//             <div>0</div>
//           </span>
//           <span className="infosum">
//             <div className="infotext"> Points</div>
//             <div>{123 || 0}</div>
//           </span>
//           <button className="submit-button">Submit</button>{" "}
//         </div>
//       </div>
//     </>
//   );
// }

// starting  of 7 double pana bulk board done

// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   return (
//     <>
//       <div className="container">
//         <div className="form-box">
//           <div className="form-group">
//             <label>Select&nbsp;Game&nbsp;Type</label>
//             <select>
//               <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
//               <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
//               <option value="MADHUR DAY Open">MADHUR DAY Open</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Enter&nbsp;Points</label>
//             <input type="text" placeholder="Enter Points" />
//           </div>
//           <div className="keypad">
//             {keys.map((key) => (
//               <button key={key} className="key">
//                 {key}
//               </button>
//             ))}
//           </div>
//           <div className="tabletype">
//             <div className="tabletext">Jodi</div>
//             <div className="tabletext">Points</div>
//             <div className="tabletext">Game&nbsp;Type</div>{" "}
//           </div>

//           <div className="divider" />
//         </div>
//       </div>
//       <div>
//         <div className="info">
//           <span className="infosum">
//             <div className="infotext">Bids</div>
//             <div>0</div>
//           </span>
//           <span className="infosum">
//             <div className="infotext"> Points</div>
//             <div>{123 || 0}</div>
//           </span>
//           <button className="submit-button">Submit</button>{" "}
//         </div>
//       </div>
//     </>
//   );
// }

// ending of 7 double pana bulk board

// starting of 8 triple pana board done
// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   return (
//     <>
//       <div className="container">
//         <div className="form-box">
//           <div className="form-group">
//             <label>Select&nbsp;Game&nbsp;Type</label>
//             <select>
//               <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
//               <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
//               <option value="MADHUR DAY Open">MADHUR DAY Open</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Triple&nbsp;Pana</label>
//             <input type="text" placeholder="Enter Points" />
//           </div>
//           <div className="form-group">
//             <label>Enter&nbsp;Points</label>
//             <input type="text" placeholder="Enter Points" />
//           </div>
//           <div className="form-group">
//             <div></div>
//             <button className="addmore">Add&nbsp;More</button>
//           </div>

//           <div className="tabletype">
//             <div className="tabletext">Jodi</div>
//             <div className="tabletext">Points</div>
//             <div className="tabletext">Game&nbsp;Type</div>{" "}
//           </div>

//           <div className="divider" />
//         </div>
//       </div>
//       <div>
//         <div className="info">
//           <span className="infosum">
//             <div className="infotext">Bids</div>
//             <div>0</div>
//           </span>
//           <span className="infosum">
//             <div className="infotext"> Points</div>
//             <div>{123 || 0}</div>
//           </span>
//           <button className="submit-button">Submit</button>{" "}
//         </div>
//       </div>
//     </>
//   );
// }

// starting of 9 triple pana bulk board done

// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   return (
//     <>
//       <div className="container">
//         <div className="form-box">
//           <div className="form-group">
//             <label>Select&nbsp;Game&nbsp;Type</label>
//             <select>
//               <option value="MADHUR NIGHT Open">MADHUR NIGHT Open</option>
//               <option value="MADHUR MORNING Open">MADHUR MORNING Open</option>
//               <option value="MADHUR DAY Open">MADHUR DAY Open</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Enter&nbsp;Points</label>
//             <input type="text" placeholder="Enter Points" />
//           </div>
//           <div className="keypad">
//             {keys.map((key) => (
//               <button key={key} className="key">
//                 {key}
//               </button>
//             ))}
//           </div>
//           <div className="tabletype">
//             <div className="tabletext">Jodi</div>
//             <div className="tabletext">Points</div>
//             <div className="tabletext">Game&nbsp;Type</div>{" "}
//           </div>

//           <div className="divider" />
//         </div>
//       </div>
//       <div>
//         <div className="info">
//           <span className="infosum">
//             <div className="infotext">Bids</div>
//             <div>0</div>
//           </span>
//           <span className="infosum">
//             <div className="infotext"> Points</div>
//             <div>{123 || 0}</div>
//           </span>
//           <button className="submit-button">Submit</button>{" "}
//         </div>
//       </div>
//     </>
//   );
// }

// ending of 9 triple pana board

// starting of 10 sp motor Board done

// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   return (
//     <div>
//       <div className="headerpadd">
//       <div className="date-header">
//         <div className="date-text">09/05/2025</div>
//         <div className="day-label">MAYA DAY Open</div>
//       </div>
//       </div>
//       <div className="form-box">
//         <div className="form-group">
//           <label>SP&nbsp;MOTOR</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           {" "}
//           <div></div>
//           <button className="addmore">Add&nbsp;More</button>
//         </div>
//       </div>
//       <div className="game-table-container">
//         {/* Table Header */}
//         <div className="table-header">
//           <div className="table-col">Panna</div>
//           <div className="table-col">Points</div>
//           <div className="table-col">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
//           <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd">

//         <button className="submit-button ">Submit</button>

//         </div>
//       </div>
//     </div>
//   );
// }
// ending of 10 sp motor

// starting of 11 dp motor done
// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   return (
//     <div>
//       <div className="headerpadd">
//       <div className="date-header">
//         <div className="date-text">09/05/2025</div>
//         <div className="day-label">MAYA DAY Open</div>
//       </div>
//       </div>
//       <div className="form-box">
//         <div className="form-group">
//           <label>DP&nbsp;MOTOR</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           {" "}
//           <div></div>
//           <button className="addmore">Add&nbsp;More</button>
//         </div>
//       </div>
//       <div className="game-table-container">
//         {/* Table Header */}
//         <div className="table-header">
//           <div className="table-col">Panna</div>
//           <div className="table-col">Points</div>
//           <div className="table-col">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
//           <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd">

//         <button className="submit-button ">Submit</button>

//         </div>
//       </div>
//     </div>
//   );
// }

// ending of 11 dp motor

// starting of 12 group jodi done
// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   return (
//     <div>
//       <div className="headerpadd">
//         <div className="date-header">
//           <div className="date-text">09/05/2025</div>
//         </div>
//       </div>
//       <div className="form-box">
//         <div className="form-group">
//           <label>JODI&nbsp;DIGIT</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <div></div>
//           <button className="addmore">
//             <span className="addmoreicon">+</span>&nbsp;Add
//           </button>
//         </div>
//       </div>
//       <div className="game-table-container">
//         {/* Table Header */}
//         <div className="table-header">
//           <div className="table-col">Panna</div>
//           <div className="table-col">Points</div>
//           <div className="table-col">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
//           <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd">
//           <button className="submit-button ">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// ending of 12 group jodi

// starting of 13 odd even done

// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   return (
//     <div>
//       <div className="headerpadd">
//         <div className="date-header">
//           <div className="date-text">09/05/2025</div>
//           <div className="day-label">MAYA DAY Open</div>
//         </div>
//       </div>
//       <div className="form-box">
//         <div className="digit-options">
//           <label className="checkbox-group">
//             <input type="checkbox" />
//             <span>Add Odd Digits</span>
//           </label>
//           <label className="checkbox-group">
//             <input type="checkbox" />
//             <span>Add Even Digits</span>
//           </label>
//         </div>
//         <div className="form-group">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           {" "}
//           <div></div>
//           <button className="addmore"> <span className="addmoreicon">+</span>&nbsp;Add</button>
//         </div>
//       </div>
//       <div className="game-table-container">
//         {/* Table Header */}
//         <div className="table-header">
//           <div className="table-col">Panna</div>
//           <div className="table-col">Points</div>
//           <div className="table-col">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
//           <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd">
//           <button className="submit-button ">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// ending of 13 odd even

// starting of 14 two digit panel done

// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   return (
//     <div>
//       <div className="headerpadd">
//         <div className="date-header">
//           <div className="date-text">09/05/2025</div>
//           <div className="day-label">MAYA DAY Open</div>
//         </div>
//       </div>
//       <div className="form-box">
//         <div className="form-group">
//           <label>TWO DIGIT(CP,SR)</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           {" "}
//           <div></div>
//           <button className="addmore">
//             {" "}
//             <span className="addmoreicon">+</span>&nbsp;Add
//           </button>
//         </div>
//       </div>
//       <div className="game-table-container">
//         {/* Table Header */}
//         <div className="table-header">
//           <div className="table-col">Panna</div>
//           <div className="table-col">Points</div>
//           <div className="table-col">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
//           <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd">
//           <button className="submit-button ">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// ending of 14 two digit panel

// starting of 15 SP DP TP Board done

// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   return (
//     <div>
//       <div className="headerpadd">
//         <div className="date-header">
//           <div className="date-text">09/05/2025</div>
//           <div className="day-label">MAYA DAY Open</div>
//         </div>
//       </div>
//       <div className="form-box">
//         <div className="digit-options">
//           <label className="checkbox-group">
//             <input type="checkbox" />
//             <span>SP</span>
//           </label>
//           <label className="checkbox-group">
//             <input type="checkbox" />
//             <span>DP</span>
//           </label>
//           <label className="checkbox-group">
//             <input type="checkbox" />
//             <span>TP</span>
//           </label>
//         </div>
//         <div className="form-group">
//           <label>DIGIT</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           {" "}
//           <div></div>
//           <button className="addmore">
//             {" "}
//             <span className="addmoreicon">+</span>&nbsp;Add
//           </button>
//         </div>
//       </div>
//       <div className="game-table-container">
//         {/* Table Header */}
//         <div className="table-header">
//           <div className="table-col">Panna</div>
//           <div className="table-col">Points</div>
//           <div className="table-col">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
//           <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd">
//           <button className="submit-button ">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// ending of 15 SP DP TP Board

// starting of 16  Red Bracket Board done
// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   return (
//     <div>
//       <div className="headerpadd">
//         <div className="date-header">
//           <div className="date-text">09/05/2025</div>
//           {/* <div className="day-label">MAYA DAY Open</div> */}
//           <label className="checkbox-section">
//             <input type="checkbox" />
//             <span className="checkbox-label">BID ON ALL BRACKETS</span>
//           </label>
//         </div>
//       </div>
//       <div className="form-box">
//         <div className="form-group">
//           <label>RED BRACKET</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           {" "}
//           <div></div>
//           <button className="addmore">
//             {" "}
//             <span className="addmoreicon">+</span>&nbsp;Add
//           </button>
//         </div>
//       </div>
//       <div className="game-table-container">
//         {/* Table Header */}
//         <div className="table-header">
//           <div className="table-col">Panna</div>
//           <div className="table-col">Points</div>
//           <div className="table-col">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
//           <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd">
//           <button className="submit-button ">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// ending of 16 Red bracket board

// starting of 17 Digit Based Jodi done

// import React, { useState } from "react";
// import "../../assets/css/gameratelist.css";

// export default function Testing123() {
//   return (
//     <div>
//       <div className="headerpadd">
//         <div className="date-header">
//           <div className="date-text">09/05/2025</div>
//         </div>
//       </div>
//       <div className="form-box">
//         {/* <div className="form-group">
//           <label>RED BRACKET</label>
//           <input type="text" />
//         </div> */}

//         <div className="digit-inputs">
//           <div className="input-group">
//             <label>LEFT DIGIT</label>
//             <input style={{ borderRadius: "10px" }} type="text" />
//           </div>
//           <div className="input-group">
//             <label>RIGHT DIGIT</label>
//             <input style={{ borderRadius: "10px" }} type="text" />
//           </div>
//         </div>
//         <div className="form-group">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <div></div>
//           <button className="addmore">
//             <span className="addmoreicon">+</span>&nbsp;Add
//           </button>
//         </div>
//       </div>
//       <div className="game-table-container">
//         {/* Table Header */}
//         <div className="table-header">
//           <div className="table-col">Panna</div>
//           <div className="table-col">Points</div>
//           <div className="table-col">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
//           <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd">
//           <button className="submit-button ">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// ending of 17 Digit Based Jodi done

// starting of choice panaaSp Dp Board 19
// import React from "react";
// import "../../assets/css/gameratelist.css";

// function Testing123() {
//   return (
//     <div>
//       <div className="headerpadd19">
//         <div className="date-header19">
//           <div className="date-text19">09/05/2025</div>
//           <div className="day-label19">MAYA DAY Open</div>
//         </div>
//       </div>
//       <div className="form-box19">
//         <div className="digit-options19">
//           <label className="checkbox-group19">
//             <input type="checkbox" />
//             <span>SP</span>
//           </label>
//           <label className="checkbox-group19">
//             <input type="checkbox" />
//             <span>DP</span>
//           </label>
//           <label className="checkbox-group19">
//             <input type="checkbox" />
//             <span>TP</span>
//           </label>
//         </div>
//       </div>
//       <div className="form-box19">
//         <div className="digit-inputs19">
//           <div className="input-group19">
//             <label>LEFT&nbsp;DIGIT</label>
//             <input style={{ borderRadius: "10px" }} type="text" />
//           </div>
//           <div className="input-group19">
//             <label>MIDDLE&nbsp;DIGIT</label>
//             <input style={{ borderRadius: "10px" }} type="text" />
//           </div>
//           <div className="input-group19">
//             <label>RIGHT&nbsp;DIGIT</label>
//             <input style={{ borderRadius: "10px" }} type="text" />
//           </div>
//         </div>
//       </div>
//       <div className="form-group19">
//         <label>POINTS</label>
//         <input type="text" />
//       </div>
//       <div className="form-group19">
//         <div></div>
//         <button className="addmore19">
//           <span className="addmoreicon19">+</span>&nbsp;Add
//         </button>
//       </div>
//       <div className="game-table-container19">
//         {/* Table Header */}
//         <div className="table-header19">
//           <div className="table-col19">Panna</div>
//           <div className="table-col19">Points</div>
//           <div className="table-col19">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body19">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
// //          <div className="table-col">123</div>
// //           <div className="table-col">50</div>
// //           <div className="table-col">Open</div>
// //         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd19">
//           <button className="submit-button19">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testing123;
// ending of choice panaaSp Dp Board 19


// starting of panel group board 20
// import React from 'react'
// import "../../assets/css/gameratelist.css";

// function Testing123() {
//   return (
//         <div>
//       <div className="headerpadd">
//         <div className="date-header">
//           <div className="date-text">09/05/2025</div>
//           <div className="day-label">MAYA DAY Open</div>
//         </div>
//       </div>
//       <div className="form-box">
//         <div className="form-group">
//           <label>PANNA</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           {" "}
//           <div></div>
//           <button className="addmore">
//             {" "}
//             <span className="addmoreicon">+</span>&nbsp;Add
//           </button>
//         </div>
//       </div>
//       <div className="game-table-container">
//         {/* Table Header */}
//         <div className="table-header">
//           <div className="table-col">Panna</div>
//           <div className="table-col">Points</div>
//           <div className="table-col">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
//           <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd">
//           <button className="submit-button ">Submit</button>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Testing123

// ending of panel group board 20



// starting of half sangam 21

// import React from 'react'
// import "../../assets/css/gameratelist.css";

// function Testing123() {
//   return (
//         <div>
//       <div className="headerpadd">
//         <div className="date-header">
//           <div className="date-text">09/05/2025</div>
//           <div className="day-label">MAYA DAY Open</div>
//         </div>
//       </div>
//       <div className="form-box">
//         <div className="form-group">
//           <label>OPEN DIGIT</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>CLOSE DIGIT</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           {" "}
//           <div></div>
//           <button className="addmore">
//             {" "}
//             <span className="addmoreicon">+</span>&nbsp;Add
//           </button>
//         </div>
//       </div>
//       <div className="game-table-container">
//         {/* Table Header */}
//         <div className="table-header">
//           <div className="table-col">Panna</div>
//           <div className="table-col">Points</div>
//           <div className="table-col">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
//           <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd">
//           <button className="submit-button ">Submit</button>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Testing123
// ending of half sangman 21



// starting  of  full sangam 22

// import React from 'react'
// import "../../assets/css/gameratelist.css";

// function Testing123() {
//   return (
//         <div>
//       <div className="headerpadd">
//         <div className="date-header">
//           <div className="date-text">09/05/2025</div>
//           <div className="day-label">MAYA DAY Open</div>
//         </div>
//       </div>
//       <div className="form-box">
//         <div className="form-group">
//           <label>OPEN PANNA</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>CLOSE PANNA</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>POINTS</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           {" "}
//           <div></div>
//           <button className="addmore">
//             {" "}
//             <span className="addmoreicon">+</span>&nbsp;Add
//           </button>
//         </div>
//       </div>
//       <div className="game-table-container">
//         {/* Table Header */}
//         <div className="table-header">
//           <div className="table-col">Panna</div>
//           <div className="table-col">Points</div>
//           <div className="table-col">Game Type</div>
//         </div>

//         {/* Placeholder Table Body (Add dynamic rows here if needed) */}
//         <div className="table-body">
//           {/* Example row (optional) */}
//           {/* <div className="table-row">
//           <div className="table-col">123</div>
//           <div className="table-col">50</div>
//           <div className="table-col">Open</div>
//         </div> */}
//         </div>

//         {/* Submit Button */}
//         <div className="headerpadd">
//           <button className="submit-button ">Submit</button>
//         </div>
//       </div>
//     </div>

//   )
// }
// export default Testing123
import React from 'react'

function Testing123() {
  return (
    <div>Testing123</div>
  )
}

export default Testing123