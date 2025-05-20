import React, { useEffect, useState } from "react";
import "../../../../assets/css/gamerates.css";
import { FOR_GET_LIST } from "../../../Service/commanservice";
import { apiRoutes } from "../../../Config/endpoints";
function GameRates() {
  const [data, setdata] = useState({});
  const getdata = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_GAME_RATES}`);
      if (res) {
        if (res.status == true) {
          setdata(res.data);
          // console.log(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div class="gameratecontainer">
        <h1 class="gamerateheading">Game Win Ratio For All Bids(game rates)</h1>
        <ul class="gameratelist">
          {data?.gameRates?.map((item, i) => (
            <li key={i} class="gameratelist-item">
              {item.gameName}-{item.gamePrice}
            </li>
          ))}
        </ul>
        <h1 class="gamerateheading">Game Win Ratio For All Bids (starline)</h1>
        <ul class="gameratelist">
          {data?.starGameRates?.map((item, i) => (
            <li key={i} class="gameratelist-item">
              {item.gameName}-{item.gamePrice}
            </li>
          ))}
        </ul>
        <h1 class="gamerateheading">
          Game Win Ratio For All Bids (andar bahar)
        </h1>
        <ul class="gameratelist">
          {data?.ABgameRates?.map((item, i) => (
            <li key={i} class="gameratelist-item">
              {item.gameName}-{item.gamePrice}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GameRates;
