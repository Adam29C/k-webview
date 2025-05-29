import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Auth/AuthUser";
import PublicRoute from "../PublicRoute/index";
import Home from "../../Pages/Admin/Home/Home";
import MyBids from "../../Pages/Admin/MyBids/MyBids";
import Passbook from "../../Pages/Admin/Passbook/Passbook";
import Support from "../../Pages/Admin/Support/Support";
import Funds from "../../Pages/Admin/Funds/Funds";
import Wraper from "../../Layout/wraper";
import GameBidHistory from "../../Pages/Admin/MyBids/mybidpages/GameBidHistory";
import GameResultHistory from "../../Pages/Admin/MyBids/mybidpages/GameResultHistory";
import RichstarlineBidHistory from "../../Pages/Admin/MyBids/mybidpages/RichstarlineBidHistory";
import RichstarlineResultHistory from "../../Pages/Admin/MyBids/mybidpages/RichstarlineResultHistory";
import RichjackpotBidHistory from "../../Pages/Admin/MyBids/mybidpages/RichjackpotBidHistory";
import RichjackpotResultHistory from "../../Pages/Admin/MyBids/mybidpages/RichjackpotResultHistory";
import WithdrawFund from "../../Pages/Admin/Funds/FundPages/WithdrawFund";
import ApprovedDepositHistory from "../../Pages/Admin/Funds/FundPages/ApprovedDepositHistory";
import ApprovedWithdrawalHistory from "../../Pages/Admin/Funds/FundPages/ApprovedWithdrawalHistory";
// import FundRequestHistory from "../../Pages/Admin/Funds/FundPages/FundRequestHistory";
import AddBankDetails from "../../Pages/Admin/Funds/FundPages/AddBankDetails";
import Testing123 from "../../Components/Testing123";
import Settings from "../../Pages/Admin/Settings/Settings";
import NoticeBoardandRule from "../../Pages/Admin/NoticeBoardandRule/NoticeBoardandRule";
import GameRates from "../../Pages/Admin/GameRates/GameRates";
import GenerateMPin from "../../Pages/Admin/GenerateMPin/GenerateMPin";
import SubmitYourIdea from "../../Pages/Admin/SubmitYourIdea/SubmitYourIdea";
import HowToPlay from "../../Pages/Admin/HowToPlay/HowToPlay";
import Charts from "../../Pages/Admin/Charts/Charts";
import ErrorPage from "../../Pages/Admin/ErrorPage/ErrorPage";
import Notification from "../../Pages/Admin/Notification/Notification";
import RedBracket from "../../Gamepages/RedBracket/RedBracket";
import DigitBasedjodi from "../../Gamepages/DigitBasedJodi/DigitBasedjodi";
import SpDpTp from "../../Gamepages/SPDPTP/SpdpTp";
import TwoDigitPanel from "../../Gamepages/TwoDigitPanel/TwoDigitPanel";
import EvenOdd from "../../Gamepages/EvenOdd/EvenOdd";
import GroupJodi from "../../Gamepages/GroupJodi/GroupJodi";
import DpMotor from "../../Gamepages/DpMotor/DpMotor";
import SpMotor from "../../Gamepages/SpMoto/SpMotor";
import TriplePanaBulk from "../../Gamepages/TriplePanabulk/TriplePanaBulk";
import Tessting from "../../Components/Tessting";
import TriplePanaBoard from "../../Gamepages/TriplePanaBoard/TriplePanaBoard";
import DoublePanaBulk from "../../Gamepages/DoublePanaBulk/DoublePanaBulk";
import DoublePanaBoard from "../../Gamepages/DoublePanaBoard/DoublePanaBoard";
import SinglePanaBulk from "../../Gamepages/SinglePanaBulk/SinglePanaBulk";
import SinglePanaBoard from "../../Gamepages/SinglePanaBoard/SinglePanaBoard";
import JodiDigitBoard from "../../Gamepages/JodiDigitBoard/JodiDigitBoard";
import SingleDigitCode from "../../Gamepages/SingledigitCode/SingleDigitCode";
import JodiDigitBulk from "../../Gamepages/JodiDigitBulk/JodiDigitBulk";
import MadhurGame from "../../Gamepages/Madhurgame/MadhurGame";
import ChoicePanaSpDpBoard from "../../Gamepages/ChoicePanaSpDpBoard/ChoicePanaSpDpBoard";
import PanelGroupBoard from "../../Gamepages/PanelGroupBoard/PanelGroupBoard";
import HalfSangam from "../../Gamepages/HalfSangam/HalfSangam";
import FullSangam from "../../Gamepages/FullSangam/FullSangam";
import MainGamePage from "../../MainGamePage/MainGamePage";
import RedirectIfAuthenticated from "../../Auth/RedirectIfAuthenticated";
import ProtectedRoute from "../../Auth/ProtectedRoute";
import LoginPage from "../../Auth/LoginPage";
import Welcome from "../../Pages/Auth/Welcome-screen";

const isAuthenticated = "";

const publicRoutes = [
  {
    path: "/",
    element: <PublicRoute element={Wraper} />,

    // errorElement: <Wraper />,
    children: [
      {
        // element: <ProtectedRoute />,
        children: [
          // {
          //   path: "test",
          //   element: <Tessting />,
          // },
          {
            path: "maingame",
            element: <MainGamePage />,
          },
          {
            path: "maingame/redbracket",
            element: <RedBracket />,
            // 1
          },
          {
            path: "maingame/digitbased",
            element: <DigitBasedjodi />,
            // 2
          },
          {
            path: "maingame/spdptp",
            element: <SpDpTp />,
            // 3
          },
          {
            path: "maingame/twodigitpanel",
            element: <TwoDigitPanel />,
            // 4
          },
          {
            path: "maingame/evenodd",
            element: <EvenOdd />,
            // 5
          },
          {
            path: "maingame/groupjodi",
            element: <GroupJodi />,
            // 6
          },
          {
            path: "maingame/dpmotor",
            element: <DpMotor />,
            // 7
          },
          {
            path: "maingame/spmotor",
            element: <SpMotor />,
            // 8
          },
          {
            path: "maingame/triplepanabulk",
            element: <TriplePanaBulk />,
            // 9
          },
          {
            path: "maingame/triplepanaboard",
            element: <TriplePanaBoard />,
            // 10
          },
          {
            path: "maingame/doublepanabulk",
            element: <DoublePanaBulk />,
            // 11
          },
          {
            path: "maingame/doublepanaboard",
            element: <DoublePanaBoard />,
            // 12
          },
          {
            path: "maingame/singlepanabulk",
            element: <SinglePanaBulk />,
            // 13
          },
          {
            path: "maingame/singlepanaboard",
            element: <SinglePanaBoard />,
            // 14
          },
          {
            path: "maingame/jodidigitboard",
            element: <JodiDigitBoard />,
            // 15
          },
          {
            path: "maingame/singledigitcode",
            element: <SingleDigitCode />,
            // 16
          },
          {
            path: "maingame/singledigitbulk",
            element: <JodiDigitBulk />,
            // 17
          },
          {
            path: "maingame/madhurgame",
            element: <MadhurGame />,
            // 18
          },
          {
            path: "maingame/choicepanaspdpboard",
            element: <ChoicePanaSpDpBoard />,
            // 19
          },
          {
            path: "maingame/panelgroupboard",
            element: <PanelGroupBoard />,
            // 20
          },
          {
            path: "maingame/halfsangam",
            element: <HalfSangam />,
            // 21
          },
          {
            path: "maingame/fullsangam",
            element: <FullSangam />,
            // 22
          },
          {
            path: "demo",
            element: <Testing123 />,
          },
          {
            path: "home",
            element: <PublicRoute element={Home} />,
          },
          {
            path: "bids",
            element: <PublicRoute element={MyBids} />,
          },
          // {
          //   path: "bids/gamebidhistory",
          //   element: <PublicRoute element={GameBidHistory} />,
          // },
          // {
          //   path: "bids/gameresulthistory",
          //   element: <PublicRoute element={GameResultHistory} />,
          // },
          // {
          //   path: "bids/richstarlinebidhistory",
          //   element: <PublicRoute element={RichstarlineBidHistory} />,
          // },
          // {
          //   path: "bids/richstarlineresulthistory",
          //   element: <PublicRoute element={RichstarlineResultHistory} />,
          // },
          // {
          //   path: "bids/richjackpotbidhistory",
          //   element: <PublicRoute element={RichjackpotBidHistory} />,
          // },
          // {
          //   path: "bids/richjackpotresulthistory",
          //   element: <PublicRoute element={RichjackpotResultHistory} />,
          // },
          // {
          //   path: "passbook",
          //   element: <PublicRoute element={Passbook} />,
          // },
          {
            path: "funds",
            element: (
              <PublicRoute element={Funds} isAuthenticated={isAuthenticated} />
            ),
          },
          // {
          //   path: "/funds/addfunds",
          //   element: (
          //     <PublicRoute
          //       element={AddFund}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "/funds/withdrawfund",
          //   element: (
          //     <PublicRoute
          //       element={WithdrawFund}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "/funds/approveddeposithistory",
          //   element: (
          //     <PublicRoute
          //       element={ApprovedDepositHistory}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "/funds/approvedwithdrawalhistory",
          //   element: (
          //     <PublicRoute
          //       element={ApprovedWithdrawalHistory}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "/funds/fundrequesthistory",
          //   element: (
          //     <PublicRoute
          //       element={FundRequestHistory}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "/funds/addbankdetails",
          //   element: (
          //     <PublicRoute
          //       element={AddBankDetails}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          {
            path: "charts",
            element: (
              <PublicRoute element={Charts} isAuthenticated={isAuthenticated} />
            ),
          },
          // {
          //   path: "support",
          //   element: (
          //     <PublicRoute
          //       element={Support}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "setting",
          //   element: (
          //     <PublicRoute
          //       element={Settings}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "noticeboard",
          //   element: (
          //     <PublicRoute
          //       element={NoticeBoardandRule}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "gamerates",
          //   element: (
          //     <PublicRoute
          //       element={GameRates}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "genratempin",
          //   element: (
          //     <PublicRoute
          //       element={GenerateMPin}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "submityouridea",
          //   element: (
          //     <PublicRoute
          //       element={SubmitYourIdea}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "howtoplay",
          //   element: (
          //     <PublicRoute
          //       element={HowToPlay}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          // {
          //   path: "notification",
          //   element: (
          //     <PublicRoute
          //       element={Notification}
          //       isAuthenticated={isAuthenticated}
          //     />
          //   ),
          // },
          {
            path: "*",
            element: (
              <PublicRoute
                element={ErrorPage}
                isAuthenticated={isAuthenticated}
              />
            ),
          },
        ],
      },
    ],

    // path: "/test",
    // element: <PublicRoute element={Wraper} />,
  },
];

export default publicRoutes;
