import React, { useState } from "react";
import "../../assets/css/jackpotcard.css";
import { Link } from "react-router-dom";

const JackpotCard = () => {
  const [condition, setcondition] = useState(false);
  return (
    <div className="icon-grid-container">
      {[1, 1, 1, 1].map((_, i) => (
        <div className="icon-card">
          <div className="icon-label">paragrapgh..</div>
          <div className="numberincard">09</div>
          <div className={`icon-label ${condition ? "green" : "red"}`}>
            Game is Getting close
          </div>
        </div>
      ))}
    </div>
  );
};

export default JackpotCard;
