import NastedLayout from "../../Containers/NastedLayout";
import NastedWraper from "../NastedRoute/index";
import Passbook from "../../Pages/Admin/Passbook/Passbook";
import AddFund from "../../Pages/Admin/Funds/FundPages/AddFund";
import WithdrawFund from "../../Pages/Admin/Funds/FundPages/WithdrawFund";
import ApprovedDepositHistory from "../../Pages/Admin/Funds/FundPages/ApprovedDepositHistory";
import ApprovedWithdrawalHistory from "../../Pages/Admin/Funds/FundPages/ApprovedWithdrawalHistory";
import FundRequestHistory from "../../Pages/Admin/Funds/FundPages/FundRequestHistory";
import AddBankDetails from "../../Pages/Admin/Funds/FundPages/AddBankDetails";
import GameBidHistory from "../../Pages/Admin/MyBids/mybidpages/GameBidHistory";
import GameResultHistory from "../../Pages/Admin/MyBids/mybidpages/GameResultHistory";
import RichstarlineBidHistory from "../../Pages/Admin/MyBids/mybidpages/RichstarlineBidHistory";
import RichstarlineResultHistory from "../../Pages/Admin/MyBids/mybidpages/RichstarlineResultHistory";
import RichjackpotBidHistory from "../../Pages/Admin/MyBids/mybidpages/RichjackpotBidHistory";
import RichjackpotResultHistory from "../../Pages/Admin/MyBids/mybidpages/RichjackpotResultHistory";
import Notification from "../../Pages/Admin/Notification/Notification";
import HowToPlay from "../../Pages/Admin/HowToPlay/HowToPlay";
import Support from "../../Pages/Admin/Support/Support";
import GameRates from "../../Pages/Admin/GameRates/GameRates";
import GenerateMPin from "../../Pages/Admin/GenerateMPin/GenerateMPin";
import NoticeBoardandRule from "../../Pages/Admin/NoticeBoardandRule/NoticeBoardandRule";
import SubmitYourIdea from "../../Pages/Admin/SubmitYourIdea/SubmitYourIdea";
import Settings from "../../Pages/Admin/Settings/Settings";
import MainGamePage from "../../MainGamePage/MainGamePage";

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

const isAuthenticated = "";
const NastedRoutes = [
  {
    // path: "/",
    // element: <NastedLayout />,
    // children: [
    //   {
    path: "passbook",
    element: <Passbook />,
  },
  {
    path: "/funds/addfunds",
    element: <AddFund />,
  },
  {
    path: "/funds/withdrawfund",
    element: <WithdrawFund />,
  },
  {
    path: "/funds/approveddeposithistory",
    element: <ApprovedDepositHistory />,
  },
  {
    path: "/funds/approvedwithdrawalhistory",
    element: <ApprovedWithdrawalHistory />,
  },
  {
    path: "/funds/fundrequesthistory",
    element: <FundRequestHistory />,
  },
  {
    path: "/funds/addbankdetails",
    element: <AddBankDetails />,
  },
  {
    path: "bids/gamebidhistory",
    element: <GameBidHistory />,
  },
  {
    path: "bids/gameresulthistory",
    element: <GameResultHistory />,
  },
  {
    path: "bids/richstarlinebidhistory",
    element: <RichstarlineBidHistory />,
  },

  {
    path: "bids/richstarlineresulthistory",
    element: <RichstarlineResultHistory />,
  },
  {
    path: "bids/richjackpotbidhistory",
    element: <RichjackpotBidHistory />,
  },
  {
    path: "bids/richjackpotresulthistory",
    element: <RichjackpotResultHistory />,
  },
  {
    path: "notification",
    element: <Notification />,
  },
  {
    path: "howtoplay",
    element: <HowToPlay />,
  },
  {
    path: "support",
    element: <Support />,
  },
  {
    path: "gamerates",
    element: <GameRates />,
  },
  {
    path: "genratempin",
    element: <GenerateMPin />,
  },
  {
    path: "noticeboard",
    element: <NoticeBoardandRule />,
  },
  {
    path: "submityouridea",
    element: <SubmitYourIdea />,
  },
  {
    path: "setting",
    element: <Settings />,
  },
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
];

export default NastedRoutes;
