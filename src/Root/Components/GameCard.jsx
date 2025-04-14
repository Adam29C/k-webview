import React, { useEffect, useState } from "react";
import CenterModal from "./Reusable_modal";

const GameCard = ({ index, game }) => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleOpenModal = () => {
    setSelectedGame(game);
  };

  useEffect(() => {
    console.log("Selected game updated:", selectedGame); // Check karein ki state update ho rahi hai ya nahi
  }, [selectedGame]);
  return (
    <>
      <div key={index}>
        <div className="custom-container mt-3">
          <div className="row gy-3 gx-0">
            <div className="col-12">
              <div
                className=" card rounded-4 mb-2"
                data-bs-toggle="modal"
                data-bs-target={`#timinig-${index}`}
                onClick={handleOpenModal}
              >
                <div className="d-flex justify-content-between align-items-center  px-3 py-2">
                  <div className="text-left">
                    <div className="maintitle">
                      <span>{game?.providerName}</span>
                      <i class="fa-solid fa-circle-info m-2 "></i>
                    </div>
                    <div className="digit">
                      <span> {game?.providerResult}</span>
                    </div>
                    <div
                      className={`open-close ${
                        game.gameDetails[0]?.message === "Close for today"
                          ? "close-for-today"
                          : game.gameDetails[0]?.message ===
                            "Betting is running for close"
                          ? "forClose"
                          : game.gameDetails[0]?.message ===
                            "Betting is running for open"
                          ? "forOpen"
                          : "forOpen"
                      }`}
                    >
                      <span className="text-denger">
                        {game.gameDetails[0]?.message}
                      </span>
                    </div>
                  </div>

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
                          game.gameDetails[0]?.message === "Close for today"
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
                          game.gameDetails[0]?.message === "Close for today"
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
                </div>
                <div className="verticle-line"> </div>
                <div className="d-flex justify-content-between px-3 py-2 game-timing-font-size ">
                  <span>
                    Open Bids : <b> {game.gameDetails[0]?.OBT}</b>
                  </span>
                  <span>
                    Close Bids : <b> {game.gameDetails[0]?.CBT}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CenterModal
        id={`timinig-${index}`}
        showBtn={false}
        children={
          <>
            <div class="mb-3 d-flex justify-content-between align-items-center flex-column ">
              <div class=" mx-auto ">
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
                      selectedGame?.gameDetails[0]?.message ===
                      "Close for today"
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
                      selectedGame?.gameDetails[0]?.message ===
                      "Close for today"
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
              <span
                className={`open-close py-1 ${
                  selectedGame?.gameDetails[0]?.message === "Close for today"
                    ? "close-for-today"
                    : selectedGame?.gameDetails[0]?.message ===
                      "Betting is running for close"
                    ? "forClose"
                    : selectedGame?.gameDetails[0]?.message ===
                      "Betting is running for open"
                    ? "forOpen"
                    : "forOpen"
                }`}
              >
                {selectedGame && selectedGame?.gameDetails[0]?.message}
              </span>
              <h6 class="primary-color py-1 fw-bold">
                {selectedGame && selectedGame?.providerName}
              </h6>
            </div>

            <div class="my-3">
              <p class="d-flex justify-content-between">
                <span class="fw-bold">OPEN RESULT TIME</span>
                <span>{selectedGame?.gameDetails[0]?.OBRT}</span>
              </p>
              <p class="d-flex justify-content-between">
                <span class="fw-bold">CLOSE RESULT TIME</span>
                <span>{selectedGame?.gameDetails[0]?.CBRT}</span>
              </p>
              <p class="d-flex justify-content-between">
                <span class="fw-bold">OPEN BID LAST TIME</span>
                <span>{selectedGame?.gameDetails[0]?.OBT}</span>
              </p>
              <p class="d-flex justify-content-between">
                <span class="fw-bold">CLOSE BID LAST TIME</span>
                <span>{selectedGame?.gameDetails[0]?.CBT}</span>
              </p>
            </div>
            {console.log("selectedGame", selectedGame)}
            <button
              type="button"
              class="btn primary-button rounded-pill w-100 text-center"
              data-bs-dismiss="modal"
            >
              OK
            </button>
          </>
        }
      />
    </>
  );
};

export default GameCard;
