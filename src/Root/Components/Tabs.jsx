import React, { useEffect, useState } from "react";
import { Tab, Tabs as Tabs1, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GameCard from "./GameCard";
import JackpotCard from "./JackpotCard";
import { FOR_GET_LIST, FOR_POST_REQUEST } from "../Service/commanservice";
import { apiRoutes } from "../Config/endpoints";
import "../../assets/css/settings.css";

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
          setstarlinetype(res.data);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const getstarlinegameresult = async () => {
    try {
      const res = await FOR_GET_LIST(
        `${apiRoutes.GET_STARRLINE_STARLINERESULT}`
      );
      if (res) {
        if (res.status == true) {
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
          setandarbahargametype(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [data, setdata] = useState({
    mainNotification: false,
    gameNotification: false,
    starLineNotification: false,
    andarBaharNotification: false,
  });
  const getdata = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_NOTIFICATION_STATUS}`);
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

  const handleToggle = async (key) => {
    const updatedSettings = {
      type: key,
      statusNotification: !data[key],
    };
    try {
      const res = await FOR_POST_REQUEST(
        `${apiRoutes.POST_NOTIFICATIONCHANGE_STATUS}`,
        updatedSettings
      );
      if (res) {
        if (res.status == true) {
          getdata();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getstartlinegametype();
    getstarlinegameresult();
    getgameresult();
    getandarbahargameresult();
    getandarbahargametype();
    getdata();
  }, []);
  const dataArrayofstarlinegames = Object.values(starlinegameresult);
  const gamearrayofgames = Object.values(games);
  const andarbahargames = Object.values(andarbahargameres);
  return (
    <>
      <div>
        <Tabs1>
          <TabList className="tab-list-card">
            <Tab>Games</Tab>
            <Tab>Starline</Tab>
            <Tab>Jackpot</Tab>
          </TabList>
          <TabPanel>
            <div className="mx-3 tab-list-card rounded-5 mt-3">
              <div className="contact-card-container ">
                <div className="  homeicon-div  ">
                  <i className="fab fa-whatsapp homeicon me-2"></i>
                  <span className="contact-number">9999999999</span>
                </div>
                <div className="contact-box  homeicon-div   ">
                  <i className="fas fa-phone homeicon1 me-2"></i>
                  <span className="contact-number">9999999999</span>
                </div>
              </div>
            </div>

            {gamearrayofgames?.map((data, i) => (
              <GameCard game={data} index={i} />
            ))}
          </TabPanel>
          <TabPanel>
            <div className="tabstickyhome mt-2 mx-3">
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
              <div class="settinglist-item" style={{ marginTop: "10px" }}>
                <div className="gametabs">
                  <span className="newzyx">Notification</span>
                  <label class="android-toggle">
                    <input
                      type="checkbox"
                      checked={data.starLineNotification}
                      onChange={() => handleToggle("starLineNotification")}
                    />
                    <span class="slider"></span>
                  </label>
                </div>
                <div className="tabsright">View history</div>
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
                          alignItems: "center",
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

                      <div className="maintitle">{game?.providerResult}</div>
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
          <TabPanel>
            {/* <p>Cards for Jackpot</p> */}
            <div className="tabstickyhome mt-2">
              <div className="">
                <div className="andarbaharconatiner">
                  <div className="andarbahartext">
                    {andarbahargametype[0]?.gameName}:
                    {andarbahargametype[0]?.gamePrice}
                  </div>
                </div>
                <div className="andarbahardivider" />
              </div>
              <li class="settinglist-item">
                <div className="gametabs">
                  <span className="newzyx">Notification</span>
                  <label class="android-toggle">
                    <input
                      type="checkbox"
                      checked={data.andarBaharNotification}
                      onChange={() => handleToggle("andarBaharNotification")}
                    />
                    <span class="slider"></span>
                  </label>
                </div>
                <div className="tabsright">View history</div>
              </li>
            </div>
            <JackpotCard games={andarbahargames} />
          </TabPanel>
        </Tabs1>
      </div>
    </>
  );
};

export default Tabs;
