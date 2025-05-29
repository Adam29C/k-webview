import React from "react";
import Main_Containers from "../../../Containers/Main_Containers";
import Header from "../../../Layout/Header/Header";
import Footer from "../../../Layout/Footer/Footer";
import { Link } from "react-router-dom";

const MyBids = () => {
  const data = [
    {
      name: "game bid history",
      link: "gamebidhistory",
      icon: "fa-solid fa-dollar-sign",
      description: "You can view your market bid history",
    },
    {
      name: "game result history",
      link: "gameresulthistory",
      icon: "fa-solid fa-dollar-sign",
      description: "You can view your game bid result history",
    },
    {
      name: "rich starline bid history",
      link: "richstarlinebidhistory",
      icon: "fa-solid fa-dollar-sign",
      description: "You can view your Starline bid history",
    },
    {
      name: "rich starline result history",
      link: "richstarlineresulthistory",
      icon: "fa-solid fa-dollar-sign",
      description: "You can view your Starline result",
    },
    {
      name: "rich jackpot bid history",
      link: "richjackpotbidhistory",
      icon: "fa-solid fa-dollar-sign",
      description: "You can view your Jackpot bid history",
    },
    {
      name: "rich jackpot result history",
      link: "richjackpotresulthistory",
      icon: "fa-solid fa-dollar-sign",
      description: "You can view your Jackpot result",
    },
  ];

  return (

    
    <div class="profile-wrapper">
      <div className="row">
        <div className="col-12">
          {data.map((item) => {
            return (
              <>
                <Link
                  to={item.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div class="card  rounded-4 mt-3">
                    <div class="card-inside d-flex justify-content-between align-items-center">
                      <div className="d-flex justisfy-content-between align-items-center ">
                        <i class={`icon-size mx-4 ms-1  ${item.icon}`}></i>
                        <div className="d-flex  flex-column">
                          <span
                            class="fw-bold text-sm text-left"
                            style={{ textTransform: "capitalize" }}
                          >
                            {item.name}
                          </span>
                          <p class="card-text ">{item.description}</p>
                        </div>
                      </div>
                      <div className=" d-flex justify-content-center align-items-center bgr">
                        <i class="fa-solid fa-chevron-right "></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyBids;
