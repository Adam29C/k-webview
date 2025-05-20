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

import React, { useEffect, useState } from "react";
import StarlineGameCard from "./StarlineGameCard";
import { Tab, Tabs as Tabs1, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GameCard from "./GameCard";
import JackpotCard from "./JackpotCard";
import { FOR_GET_LIST } from "../Service/commanservice";
import { apiRoutes } from "../Config/endpoints";
const Tabs = () => {
  const [starlinetype, setstarlinetype] = useState([]);
  const [starlinegameresult, setstarlinegameresult] = useState([]);
  const [games, setgames] = useState([]);
  const [andarbahargameres, setandarbahargameres] = useState([]);
  const [andarbahargametype, setandarbahargametype] = useState([]);
  const getstartlinegametype = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_STARLINE_GAMETYPE}`);
      if (res) {
        if (res.status == true) {
          // console.log(res.data);
          setstarlinetype(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getstarlinegameresult = async () => {
    try {
      const res = await FOR_GET_LIST(
        `${apiRoutes.GET_STARRLINE_STARLINERESULT}`
      );
      if (res) {
        if (res.status == true) {
          // console.log(res.data);
          setstarlinegameresult(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getgameresult = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_GAME_GAMERESULT}`);
      if (res) {
        if (res.status == true) {
          // console.log(res.data);
          setgames(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getandarbahargameresult = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_ANDARBAHARGAME_RESULT}`);
      if (res) {
        if (res.status == true) {
          // console.log(res.data);
          setandarbahargameres(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getandarbahargametype = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_ANDARBAHAR_GAMETYPE}`);
      if (res) {
        if (res.status == true) {
          console.log(res.data);
          setandarbahargametype(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(andarbahargametype);
  useEffect(() => {
    getstartlinegametype();
    getstarlinegameresult();
    getgameresult();
    getandarbahargameresult();
    getandarbahargametype();
  }, []);
  const dataArrayofstarlinegames = Object.values(starlinegameresult);
  const gamearrayofgames = Object.values(games);
  const andarbahargames = Object.values(andarbahargameres);
  return (
    <>
      {/* <StarlineGameCard/> */}
      <div style={{ marginTop: "0px" }}>
        <Tabs1>
          <TabList style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Tab style={{ fontSize: "12px" }}>Games</Tab>
            <Tab style={{ fontSize: "12px" }}>Starline</Tab>
            <Tab style={{ fontSize: "12px" }}>Jackpot</Tab>
          </TabList>
          <TabPanel style={{ padding: "2px" }}>
            {gamearrayofgames?.map((data, i) => (
              <GameCard game={data} index={i} />
            ))}
          </TabPanel>
          <TabPanel style={{ padding: "2px" }}>
            {/* <p>Cards for Starline</p> */}
            <div className="box321">
              <div className="grid321">
                {starlinetype?.map((item, i) => (
                  <div className="grid-item321">
                    <div className="newdiv321">
                      <span>{item.gameName}</span>
                      <span className="gameprice">{item.gamePrice}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="custom-container my-3">
              <div className="row gy-3 gx-0">
                <div className="col-12 ">
                  {dataArrayofstarlinegames?.map((game, i) => (
                    <div
                      className="card rounded-4 mb-2 px-4 py-2  border-2 "
                      data-bs-toggle="modal"
                      style={{
                        border:
                          game.displayText == "Closed For Today"
                            ? "1px solid red"
                            : game.displayText == "Betting Is Closed For Today"
                            ? "1px solid red"
                            : "1px solid green",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span className="maintitle text-dark">
                          {game?.providerName}
                        </span>

                        {game.displayText == "Closed For Today" ? (
                          <div></div>
                        ) : game.displayText ==
                          "Betting Is Closed For Today" ? (
                          <div></div>
                        ) : (
                          <div class="zoom-in-zoom-out me-2 ">
                            <svg
                              id="video"
                              xmlns="http://www.w3.org/2000/svg"
                              width="50"
                              height="50"
                              viewBox="0 0 31.277 31.708"
                            >
                              <path
                                id="Path_593"
                                data-name="Path 593"
                                d="M15.589,0A15.589,15.589,0,1,1,0,15.589,15.589,15.589,0,0,1,15.589,0Z"
                                class="play_icon_class "
                                transform="translate(0.098 0)"
                                fill={
                                  game.displayText == "Closed For Today"
                                    ? "red"
                                    : game.displayText ==
                                      "Betting Is Closed For Today"
                                    ? "red"
                                    : "#237f8a"
                                }
                              ></path>
                              <path
                                id="Path_590"
                                data-name="Path 590"
                                d="M31.179,256H0a15.589,15.589,0,1,0,31.179,0Z"
                                transform="translate(0 -239.882)"
                                fill={
                                  game.displayText == "Closed For Today"
                                    ? "red"
                                    : game.displayText ==
                                      "Betting Is Closed For Today"
                                    ? "red"
                                    : "#237f8a"
                                }
                              ></path>
                              <g
                                id="Group_1840"
                                data-name="Group 1840"
                                transform="translate(11.884 8.643)"
                              >
                                <g
                                  id="Group_1786"
                                  data-name="Group 1786"
                                  transform="translate(0 0)"
                                >
                                  <g id="Group_1785" data-name="Group 1785">
                                    <path
                                      id="Path_591"
                                      data-name="Path 591"
                                      d="M171.741,125.324a.741.741,0,0,1-.741-.741V111.741a.741.741,0,0,1,1.175-.6l8.89,6.421a.741.741,0,0,1,0,1.2l-8.89,6.421A.74.74,0,0,1,171.741,125.324Z"
                                      transform="translate(-171 -111)"
                                      fill="#fff"
                                    ></path>
                                  </g>
                                </g>
                                <g
                                  id="Group_1787"
                                  data-name="Group 1787"
                                  transform="translate(0 7.162)"
                                >
                                  <path
                                    id="Path_592"
                                    data-name="Path 592"
                                    d="M171,256v6.421a.741.741,0,0,0,1.175.6l8.89-6.421a.741.741,0,0,0,.307-.6Z"
                                    transform="translate(-171 -256)"
                                    fill="#fff"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </div>
                        )}
                      </div>
                      {/* <span className="maintitle text-dark">Provider Name</span> */}

                      <div className="digit">{game?.providerResult}</div>
                      {/* <div className="digit">Result</div> */}

                      <div
                        // className={`open-close ${
                        //   game.displayText === "Close for today"
                        //     ? "close-for-today"
                        //     : game.displayText ===
                        //       "Betting is running for close"
                        //     ? "forClose"
                        //     : game.displayText === "Betting is running for open"
                        //     ? "forOpen"
                        //     : "forOpen"
                        // }`}
                        // className={`open-close ${
                        //   "Close for today" === "Close for today"
                        //     ? "close-for-today"
                        //     : "Close for today" === "Betting is running for close"
                        //     ? "forClose"
                        //     : "Close for today" === "Betting is running for open"
                        //     ? "forOpen"
                        //     : "forOpen"
                        // }`}
                        style={{
                          color:
                            game.displayText == "Closed For Today"
                              ? "red"
                              : game.displayText ==
                                "Betting Is Closed For Today"
                              ? "red"
                              : "green",
                        }}
                      >
                        {game.displayText}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel style={{ padding: "2px" }}>
            {/* <p>Cards for Jackpot</p> */}
            <div className="">
              <div className="andarbaharconatiner">
                <div className="andarbahartext">
                  {andarbahargametype[0]?.gameName}:
                  {andarbahargametype[0]?.gamePrice}
                </div>
              </div>
              <div className="andarbahardivider" />
            </div>
            <JackpotCard games={andarbahargames} />
          </TabPanel>
        </Tabs1>
      </div>
    </>
  );
};

export default Tabs;
