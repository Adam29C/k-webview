import React from "react";
import "./maingamepage.css";
import { Link } from "react-router-dom";
import NastedLayout from "../Containers/NastedLayout";
import PagesIndex from "../Pages/pageIndex";
import SingleDigit from "../../assets/svgs/gaming/singledigit.svg";

const MainGamePage = () => {
  const { state } = PagesIndex.useLocation();

  const { selectedProvider } = PagesIndex.useSelector(
    (state) => state.CommonSlice
  );

  const [GetGameType, setGetGameType] = PagesIndex.useState([]);

  const getdata = async () => {
    try {
      const res = await PagesIndex.commanservice.FOR_GET_LIST(
        `${PagesIndex.apiRoutes.GET_GAME_TYPE_LIST}`
      );

      console.log("res", res.data);

      if (res.status) {
        setGetGameType(res.data);
        // setmyList(res.data.textMain);
        // console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  PagesIndex.useEffect(() => {
    getdata();
  }, []);

  const items = [
    {
      label: "Single Digit",
      className: "single-digit",
      path: "/maingame/singledigitcode",
    },
    {
      label: "Single Digit bulk",
      className: "single-digit-bulk",
      path: "/maingame/singledigitbulk",
    },
    {
      label: "Jodi Digit",
      className: "jodi-digit",
      path: "/maingame/jodidigitboard",
    },
    {
      label: "Jodi Digit Bulk",
      className: "jodi-digit-bulk",
      path: "/maingame/jodidigitboard",
    },
    {
      label: "Single Pana ",
      className: "single-pana",
      path: "/maingame/singlepanaboard",
    },
    {
      label: "Single Pana Bulk",
      className: "single-pana-bulk",
      path: "/maingame/singlepanabulk",
    },
    {
      label: "Double Pana",
      className: "double-pana",
      path: "/maingame/doublepanaboard",
    },
    {
      label: "Double Pana Bulk",
      className: "double-pana-bulk",
      path: "/maingame/doublepanabulk",
    },
    {
      label: "Triple Pana",
      className: "triple-pana",
      path: "/maingame/triplepanaboard",
    },
    {
      label: "Triple Pana Bulk",
      className: "triple-pana-bulk",
      path: "/maingame/triplepanabulk",
    },
    { label: "SP Motor", className: "sp-motor", path: "/maingame/spmotor" },
    { label: "DP Motor", className: "dp-motor", path: "/maingame/dpmotor" },
    {
      label: "Group Jodi",
      className: "jodi-group",
      path: "/maingame/groupjodi",
    },
    { label: "Even Odd", className: "odd-even", path: "/maingame/evenodd" },
    {
      label: "Two Digit Panel(CP,SR)",
      className: "two-digit-panel",
      path: "/maingame/twodigitpanel",
    },

    { label: "SP DP TP", className: "sp-dp-tp", path: "/maingame/spdptp" },

    {
      label: "Red Bracket",
      className: "red-bracket",
      path: "/maingame/redbracket",
    },

    {
      label: "Digit Based Jodi",
      className: "digit-based-jodi",
      path: "/maingame/digitbased",
    },
    {
      label: "Choice Pana",
      className: "choice-pana",
      path: "/maingame/choicepanaspdpboard",
    },
    {
      label: "Panel Group Board",
      className: "panel-group",
      path: "/maingame/panelgroupboard",
    },

    {
      label: "Half Sangam",
      className: "half-sangam",
      path: "/maingame/halfsangam",
    },
    {
      label: "FullSangam",
      className: "full-sangam",
      path: "/maingame/fullsangam",
    },
  ];
  return (
    <NastedLayout
      title={`${selectedProvider?.providerName} DASHBOARD`}
      route={"/home"}
    >
      <div className="icon-grid-container11">
        {items.map((item, index) => (
          <Link
            to={item.path}
            // state={{ title: state?.title }}
            style={{ textDecoration: "none", color: "inherit" }}
            state={{ gametype: item }}
          >
            <div className="icon-card border  border-dark" key={index}>
              <div className={`icon ${item.className}`}></div>
              <div className="icon-label-main">{item.label}</div>
            </div>
          </Link>
        ))}

        {/* {GetGameType.map((item, index) => (
          <Link
            to={"singledigitbulk"}
            style={{ textDecoration: "none", color: "inherit" }}
            state={{ gametype: item }}
          >
            <div className="icon-card " key={index}>
              <img src={SingleDigit} alt="" />
              <div className="icon-label">{item.gameName}</div>
            </div>
          </Link>
        ))} */}
      </div>
    </NastedLayout>
  );
};

export default MainGamePage;
