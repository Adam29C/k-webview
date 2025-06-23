import PagesIndex from "../Pages/pageIndex";
import { getActualDateFormate } from "./Common_Date";

let bidDateFormet = getActualDateFormate(new Date());
let bidUnixFormet = Date.now();

export const PlaceMainGameBid = async (
  points,
  selectedProvider,
  BidArray,
  GameSessions,
  toast,
  navigate,
  GameTypeSelect
) => {
  let bidDateFormet = getActualDateFormate(new Date());
  let bidUnixFormet = Date.now();

  try {
    let BidRequest = {
      bidAmount: points,
      providerId: selectedProvider?.providerId,
      gameDate: bidDateFormet,
      gameSession: GameSessions?.gameSession || GameTypeSelect,
      bidData: BidArray,
    };

    const res = await PagesIndex.commanservice.FOR_POST_REQUEST(
      `${PagesIndex.apiRoutes.PLACE_BID}`,
      BidRequest
    );

    if (res) {
      navigate("/maingame");
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const BidNastedPayload = (
  newInputs,
  getProfile,
  selectedProvider,
  state,
  GameTypeSelect,
  GameSessions
) => {
  // console.log(
  //   "newInputs -----",
  //   newInputs,
  //   "getProfile -----",
  //   getProfile,
  //   "selectedProvider -----",
  //   selectedProvider,
  //   "state -----",
  //   state,
  //   "GameTypeSelect -----",
  //   GameTypeSelect,
  //   "GameSessions -----",
  //   GameSessions
  // );

  const bids = [];

  newInputs.forEach((points, i) => {
    if (points && parseInt(points) > 0) {
      const bid = {
        userId: getProfile?._id,
        providerId: selectedProvider?.providerId,
        gameTypeId: state?.gametype?._id,
        providerName: selectedProvider?.providerName,
        gameTypeName: state?.gametype?.gameName,
        gameTypePrice: parseFloat(state?.gametype?.gamePrice).toFixed(2),
        userName: getProfile?.username,
        mobileNumber: getProfile?.mobile,
        bidDigit: i.toString(),
        biddingPoints: points,
        gameSession: GameTypeSelect,
        winStatus: 0,
        gameWinPoints: "0",
        gameDate: bidDateFormet,
        dateStamp: bidUnixFormet,
      };

      bids.push(bid);
    }
  });

  return bids;
};
