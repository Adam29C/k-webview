import React, { useState } from "react";
import "../../assets/css/jackpotcard.css";
import { Link } from "react-router-dom";

const JackpotCard = ({ games, index }) => {
  return (
    <div className="icon-grid-container">
      {games.map((game, index) => (
        <div
          className="icon-card"
          key={index}
          style={{
            border:
              game.displayText == "Betting Is Running Now" && "2px solid blue",
          }}
        >
          <div className="icon-label">{game.providerName}</div>
          <div className="numberincard">{game.providerResult}</div>
          <div
            className={`icon-label ${
              game.displayText == "Betting Is Running Now" ? "green" : "red"
            }`}
          >
            {game.displayText}
          </div>
          {game.displayText == "Betting Is Running Now" && (
            <button className="playbuttonjackpot">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <polygon points="10,8 16,12 10,16" fill="currentColor" />
              </svg>
              Play Game
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default JackpotCard;
