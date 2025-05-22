// import { useEffect } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import GameCard from "./GameCard";

// import ContactDetails from "./Contact-Details";
// import {
//   allServices,
//   apiRoutes,
//   gameSlice,
//   useDispatch,
//   useSelector,
// } from "../Pages/pageIndex";
// import StarlineGameCard from "./StarlineGameCard";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { maingames, jackpotgames, starlinegames } = useSelector(
//     (state) => state.AllGames
//   );

//   const GetGamesList = async () => {
//     try {
//       const response = await allServices.FOR_GET_LIST(apiRoutes.GET_ALL_GAMES);
//       const response1 = await allServices.FOR_GET_LIST(
//         apiRoutes.GET_ALL_STARLINE_GAMES
//       );
//       const response2 = await allServices.FOR_GET_LIST(
//         apiRoutes.GET_ALL_JACKPOT_GAMES
//       );

//       if (response.status) {
//         dispatch(gameSlice.setMainGames(response.data));
//         dispatch(gameSlice.setStarlineGames(response1.data));
//         dispatch(gameSlice.setJackpotGames(response2.data));
//       }
//     } catch (error) {
//       console.error("Error fetching game list:", error);
//     }
//   };

//   useEffect(() => {

//     GetGamesList();
//   }, []);

//   return (
//     <Tabs>
//       <div className="tab-container ">
//         <TabList>
//           <Tab>Games</Tab>
//           <Tab>Starline</Tab>
//           <Tab>Jackpot</Tab>
//         </TabList>
//       </div>

//       <ContactDetails />
//       <TabPanel>
//         {maingames &&
//           maingames?.map((game, index) => <GameCard key={index} game={game} />)}
//       </TabPanel>
//       <TabPanel>
//         {starlinegames &&
//           starlinegames?.map((game, index) => (
//             <StarlineGameCard key={index} game={game} />
//           ))}
//       </TabPanel>
//       <TabPanel>
//         {jackpotgames &&
//           jackpotgames?.map((game, index) => (
//             <StarlineGameCard key={index} game={game} />
//           ))}
//       </TabPanel>
//     </Tabs>
//   );
// };

// export default Home;

import React, { useState } from "react";
import StarlineGameCard from "./StarlineGameCard";
import { Tab, Tabs as Tabs1, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GameCard from "./GameCard";
import JackpotCard from "./JackpotCard";
const Tabs = () => {

  const data = {
    providerName: "providername",
    providerResult: "result",
    gameDetails: [{ message: "Close for today", OBT: "10:00", CBT: "10:00" }],
  };
  
  return (
    <>
      {/* <StarlineGameCard/> */}
      <div style={{ marginTop: "20px" }}>
        <Tabs1>
          <TabList style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Tab style={{ fontSize: "12px" }}>Games</Tab>
            <Tab style={{ fontSize: "12px" }}>Starline</Tab>
            <Tab style={{ fontSize: "12px" }}>Jackpot</Tab>
          </TabList>
          <TabPanel style={{ padding: "2px" }}>
            <p>Cards for Games</p>
            <GameCard game={data} />
          </TabPanel>
          <TabPanel style={{ padding: "2px" }}>
            {/* <p>Cards for Starline</p> */}
            <div className="custom-container my-3">
              <div className="row gy-3 gx-0">
                <div className="col-12 ">
                  <div
                    className="card rounded-4 mb-2 px-4 py-2  border-2 border-danger"
                    data-bs-toggle="modal"
                  >
                    {/* <span className="maintitle text-dark">{game?.providerName}</span> */}
                    <span className="maintitle text-dark">Provider Name</span>

                    {/* <div className="digit">{game?.providerResult}</div> */}
                    <div className="digit">Result</div>

                    <div
                      // className={`open-close ${
                      //   game.gameDetails[0]?.message === "Close for today"
                      //     ? "close-for-today"
                      //     : game.gameDetails[0]?.message ===
                      //       "Betting is running for close"
                      //     ? "forClose"
                      //     : game.gameDetails[0]?.message ===
                      //       "Betting is running for open"
                      //     ? "forOpen"
                      //     : "forOpen"
                      // }`}
                      className={`open-close ${
                        "Close for today" === "Close for today"
                          ? "close-for-today"
                          : "Close for today" === "Betting is running for close"
                          ? "forClose"
                          : "Close for today" === "Betting is running for open"
                          ? "forOpen"
                          : "forOpen"
                      }`}
                    >
                      {/* {game.gameDetails[0]?.message} */}
                      message
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel style={{ padding: "2px" }}>
            {/* <p>Cards for Jackpot</p> */}
            <JackpotCard />
          </TabPanel>
        </Tabs1>
      </div>
    </>
  );
};

export default Tabs;
