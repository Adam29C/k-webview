import React from "react";
import "./maingamepage.css";
import { Link } from "react-router-dom";

const MainGamePage = () => {
  const items = [
    { label: "Red Bracket", className: "single-digit", path: "redbracket" },
    { label: "Digit Based", className: "single-digit", path: "digitbased" },
    { label: "SP DP TP", className: "single-digit", path: "spdptp" },
    {
      label: "Two Digit Panel",
      className: "single-digit",
      path: "twodigitpanel",
    },
    { label: "Even Odd", className: "single-digit", path: "evenodd" },
    { label: "Group Jodi", className: "single-digit", path: "groupjodi" },
    { label: "DP Motor", className: "single-digit", path: "dpmotor" },
    { label: "SP Motor", className: "single-digit", path: "spmotor" },
    {
      label: "Triple Pana Bulk",
      className: "single-digit",
      path: "triplepanabulk",
    },
    {
      label: "Triple Pana Board",
      className: "single-digit",
      path: "triplepanaboard",
    },
    {
      label: "Double Pana Bulk",
      className: "single-digit",
      path: "doublepanabulk",
    },
    {
      label: "Double Pana Board",
      className: "single-digit",
      path: "doublepanaboard",
    },
    {
      label: "Single Pana Bulk",
      className: "single-digit",
      path: "singlepanabulk",
    },
    {
      label: "Single Pana Board",
      className: "single-digit",
      path: "singlepanaboard",
    },
    {
      label: "Jodi Digit Board",
      className: "single-digit",
      path: "jodidigitboard",
    },
    {
      label: "Single DigitCode",
      className: "single-digit",
      path: "singledigitcode",
    },
    {
      label: "Single Digit bulk",
      className: "single-digit",
      path: "singledigitbulk",
    },
    { label: "madhurgame", className: "single-digit", path: "madhurgame" },
    {
      label: "Choice Pana SPDP Board",
      className: "single-digit",
      path: "choicepanaspdpboard",
    },
    {
      label: "Panel Group Board",
      className: "single-digit",
      path: "panelgroupboard",
    },
    { label: "Half Sangam", className: "single-digit", path: "halfsangam" },
    { label: "FullSangam", className: "single-digit", path: "fullsangam" },

    // { label: "Single Digit", className: "single-digit", path: "" },
    // { label: "Single Digit Bulk", className: "single-digit-bulk", path: "" },
    // { label: "Single Pana", className: "single-pana", path: "" },
    // { label: "Single Pana Bulk", className: "single-pana-bulk", path: "" },
    // { label: "Double Pana", className: "double-pana", path: "" },
    // { label: "Double Pana Bulk", className: "double-pana-bulk", path: "" },
    // { label: "Triple Pana", className: "triple-pana", path: "" },
    // { label: "Triple Pana Bulk", className: "triple-pana-bulk", path: "" },
    // { label: "SP Motor", className: "sp-motor", path: "" },
    // { label: "DP Motor", className: "dp-motor", path: "" },
    // { label: "Odd Even", className: "odd-even", path: "" },
    // {
    //   label: "Two Digit Panel (CP, SR)",
    //   className: "two-digit-panel",
    //   path: "",
    // },
    // { label: "SP DP TP", className: "sp-dp-tp", path: "" },
    // { label: "Choice Pana", className: "choice-pana", path: "" },
    // { label: "Panel Group", className: "panel-group", path: "" },
  ];
  return (
    <div className="icon-grid-container">
      {items.map((item, index) => (
        <Link
          to={item.path}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="icon-card" key={index}>
            <div className={`icon ${item.className}`}></div>
            <div className="icon-label">{item.label}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainGamePage;
