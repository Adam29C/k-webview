import React from "react";

const StarlineGameCard = ({ index, game }) => {
  return (
    <div>
      <div className="custom-container my-3  ">
        <div className="row gy-3 gx-0">
          <div className="col-12 ">
            <div
              className="card rounded-4 mb-2 px-4 py-2  border-2 border-danger"
              data-bs-toggle="modal"
            >
              <span className="maintitle text-dark">{game?.providerName}</span>
              <div className="digit">{game?.providerResult}</div>
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
                {game.gameDetails[0]?.message}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarlineGameCard;
