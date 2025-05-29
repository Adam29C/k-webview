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
];

export default NastedRoutes;
