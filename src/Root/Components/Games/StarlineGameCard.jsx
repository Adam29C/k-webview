import React from "react";
// import GameOn from "../../../assets/svgs/gameon.svg";
const StarlineGameCard = ({ dataArrayofstarlinegames }) => {
  // console.log("dataArrayofstarlinegames", dataArrayofstarlinegames);

  return (
    <div>
      <div className="custom-container my-1">
        <div className="row gy-3 gx-0">
          <div className="col-12 ">
            {dataArrayofstarlinegames?.map((game, i) => (
              <>
                <div
                  class="betting-card shadow-sm my-2"
                  style={{
                    border:
                      game.displayText === "Betting Is Running Now"
                        ? "2px solid green"
                        : "2px solid red",
                  }}
                >
                  <div class="d-flex  align-items-left flex-column">
                    <div class="betting-time">{game?.providerName}</div>
                    <div class="masked-code">{game?.providerResult}</div>
                    <div class="status-text">{game.displayText}</div>
                  </div>
                  {game.displayText == "Betting Is Running Now" && (
                    <div class="zoom-in-zoom-out me-1 ">
                      <svg
                        id="video"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 31.277 31.708"
                        className="svg-size "
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

               
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarlineGameCard;
