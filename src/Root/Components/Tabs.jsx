import React, { useEffect, useState } from "react";
import { Tab, Tabs as Tabs1, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GameCard from "./Games/MainGameCard";
import JackpotCard from "./JackpotCard";

import { FOR_GET_LIST, FOR_POST_REQUEST } from "../Service/commanservice";
import { apiRoutes } from "../Config/endpoints";
import "../../assets/css/settings.css";
import { useDispatch } from "react-redux";
import StarlineGameCard from "./Games/StarlineGameCard";

const Tabs = () => {
  const dispatch = useDispatch();
  const [starlinetype, setstarlinetype] = useState([]);
  const [starlinegameresult, setstarlinegameresult] = useState([]);
  const [games, setgames] = useState([]);
  const [andarbahargameres, setandarbahargameres] = useState([]);
  const [andarbahargametype, setandarbahargametype] = useState([]);
  const [GetContact, setGetContact] = useState([]);

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
      const res1 = await FOR_GET_LIST(`${apiRoutes.GET_CONTACT}`);

      setGetContact(res1.data[0]);
      if (res) {
        if (res.status) {
          setdata(res.data);
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
            <div className="mx-3 tab-list-card rounded-5 my-2">
              <div className="contact-card-container ">
                <div className="  homeicon-div  ">
                  <i className="fab fa-whatsapp text-success homeicon fw-bolder  me-2"></i>
                  <span className="contact-number">{GetContact?.number}</span>
                </div>
                <div className="contact-box  homeicon-div    ">
                  <i className="fas fa-phone homeicon1 text-danger  fw-bold  me-2"></i>
                  <span className="contact-number">{GetContact?.number}</span>
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
            <StarlineGameCard
              dataArrayofstarlinegames={dataArrayofstarlinegames}
            />
        
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
