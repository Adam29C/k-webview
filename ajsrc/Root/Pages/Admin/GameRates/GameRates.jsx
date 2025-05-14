import React from "react";
import "../../../../assets/css/gamerates.css";
function GameRates() {
  const item1 = [
    "Single Digit-10.0",
    "Single Digit-10.0",
    "Single Digit-10.0",
    "Single Digit-10.0",
    "Single Digit-10.0",
  ];
  const item2 = [
    "Single Digit-10.1",
    "Single Digit-10.2",
    "Single Digit-10.4",
    "Single Digit-10.6",
    "Single Digit-10.9",
  ];
  return (
    <>
      <div class="gameratecontainer">
        <h1 class="gamerateheading">Game Win Ratio For All Bids</h1>
        <ul class="gameratelist">
          {item1.map((item, i) => (
            <li key={i} class="gameratelist-item">
              {item}
            </li>
          ))}
        </ul>
        <h1 class="gamerateheading">Game Win Ratio For All Bids 1</h1>
        <ul class="gameratelist">
          {item2.map((item, i) => (
            <li key={i} class="gameratelist-item">
              {item} 1
            </li>
          ))} 
        </ul>
        <h1 class="gamerateheading">Game Win Ratio For All Bids 2</h1>
        <ul class="gameratelist">
          {item2.map((item, i) => (
            <li key={i} class="gameratelist-item">
              {item} 2
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GameRates;
