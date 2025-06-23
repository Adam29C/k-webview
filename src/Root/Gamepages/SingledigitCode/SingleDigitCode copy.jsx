import React, { useState, useEffect } from "react";
import "./singledigitcode.css";
import NastedLayout from "../../Containers/NastedLayout";
import PagesIndex from "../../Pages/pageIndex";
import { getActualDateFormate } from "../../helpers/Common_Date";
import toast from "react-hot-toast";
import CenterModal from "../../Components/Reusable_modal";
import { BidNastedPayload, PlaceMainGameBid } from "../../helpers/PlaceBid";

function SingleDigitCode() {
  const navigate = PagesIndex.useNavigate();
  const { state } = PagesIndex.useLocation();
  const { selectedProvider, getProfile } = PagesIndex.useSelector(
    (state) => state.CommonSlice
  );

  // State to store input values for digits 0 to 9
  const [bidInputs, setBidInputs] = useState(Array(10).fill(""));
  const [GameSessions, setGameSessions] = useState([]);
  const [BidArray, setBidArray] = useState([]);
  const [showModal, setshowModal] = useState(false);

  // get Acutal date formet for bids
  let bidDateFormet = getActualDateFormate(new Date());
  let bidUnixFormet = Date.now();

  // Calculate bids and total points
  const bids = bidInputs.filter((val) => Number(val) > 0).length;
  const points = bidInputs.reduce(
    (total, val) => total + (Number(val) || 0),
    0
  );

  const getMainDayDetails = async () => {
    const res = await PagesIndex.commanservice.FOR_GET_QUERY_LIST(
      `${PagesIndex.apiRoutes.GET_DAYS_GAME_BIDS_LIST}?providerId=${selectedProvider?.providerId}`
    );
    setGameSessions(res.date[0]);
  };

  useEffect(() => {
    getMainDayDetails();
  }, []);

  const handleInputChange = (index, value) => {
    const newInputs = [...bidInputs];
    newInputs[index] = value;
    setBidInputs(newInputs);

    const bids = [];

    const response = BidNastedPayload(
      newInputs,
      getProfile,
      selectedProvider,
      state,

      GameSessions
    );

    setBidArray(response);

    return console.log("response", response);

    // newInputs.forEach((points, i) => {
    //   if (points && parseInt(points) > 0) {
    //     const bid = {
    //       userId: getProfile?._id,
    //       providerId: selectedProvider?.providerId,
    //       gameTypeId: state?.gametype?._id,
    //       providerName: selectedProvider?.providerName,
    //       gameTypeName: state?.gametype?.gameName,
    //       gameTypePrice: parseFloat(state?.gametype?.gamePrice).toFixed(2),
    //       userName: getProfile?.username,
    //       mobileNumber: getProfile?.mobile,
    //       bidDigit: i.toString(),
    //       biddingPoints: points,
    //       gameSession: GameSessions?.gameSession,
    //       winStatus: 0,
    //       gameWinPoints: "0",
    //       gameDate: bidDateFormet,
    //       dateStamp: bidUnixFormet,
    //     };

    //     bids.push(bid);
    //   }
    // });
    setBidArray(bids);
  };

  const PlaceBid = async () => {
    // try {
    //   let BidRequest = {
    //     bidAmount: points,
    //     providerId: selectedProvider?.providerId,
    //     gameDate: bidDateFormet,
    //     gameSession: GameSessions?.gameSession,
    //     bidData: BidArray,
    //   };

    //   const res = await PagesIndex.commanservice.FOR_POST_REQUEST(
    //     `${PagesIndex.apiRoutes.PLACE_BID}`,
    //     BidRequest
    //   );

    //   if (res) {
    //     toast.success(res.message);
    //     navigate("/home");
    //   } else {
    //     toast.error(res.message);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    const response = PlaceMainGameBid(
      points,
      selectedProvider,
      BidArray,
      GameSessions,
      toast,
      navigate
    );

    console.log("sdfsdfdsfds", response);
  };

  return (
    <NastedLayout
      title={`${selectedProvider?.providerName} single digit board `}
      route={"/maingame"}
    >
      <div className="container16">
        <div className="form-box16">
          <div className="form-group16">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select>
              {GameSessions?.gameSession === "Close" ? (
                <option value="Close">
                  {selectedProvider?.providerName} Close
                </option>
              ) : (
                <>
                  <option value="Open">
                    {selectedProvider?.providerName} Open
                  </option>
                  <option value="Close">
                    {selectedProvider?.providerName} Close
                  </option>
                </>
              )}
            </select>
          </div>
          <div className="divider16" />
        </div>
      </div>

      <div className="input-grid16">
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="input-wrapper16">
            <div className="circle16">{index}</div>
            <input
              type="number"
              placeholder="Enter Points"
              value={bidInputs[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="info16">
        <span className="infosum16">
          <div className="infotext16">Bids</div>
          <div>{bids}</div>
        </span>
        <span className="infosum16">
          <div className="infotext16">Points</div>
          <div>{points}</div>
        </span>
        <button className="submit-button16" onClick={() => setshowModal(true)}>
          Submit
        </button>

        <PagesIndex.Toast position={"top-center"} />

        <CenterModal
          id={`timinig-test`}
          showBtn={true}
          title={`${selectedProvider?.providerName} ${bidDateFormet} `}
          size={"sm"}
          ShowModal={showModal}
          onClose={() => setshowModal(false)}
          onSave={PlaceBid}
          children={
            <>
              <table class="table bid-table">
                <thead>
                  <tr>
                    <th scope="col">Digit</th>
                    <th scope="col">Points</th>
                    <th scope="col">Game Type</th>
                  </tr>
                </thead>
                <tbody>
                  {BidArray &&
                    BidArray.map((items) => {
                      return (
                        <tr>
                          <td>{items?.bidDigit}</td>
                          <td>{items?.biddingPoints}</td>
                          <td>{items?.gameSession}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>

              <div className="d-flex justify-content-between mt-2">
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <span className="fist-title text-secondary">
                      Total Bids
                    </span>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                </div>

                <div className="d-flex justify-content-between w-100">
                  <div className="ms-3">
                    <span className="fist-title">Total Bids Amount</span>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <span className="second-title">
                      Wallet Before
                      <br />
                      Deduction
                    </span>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                </div>

                <div className="d-flex justify-content-between w-100">
                  <div className="ms-3">
                    <span className="second-title">
                      Wallet After
                      <br />
                      Deduction
                    </span>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <p className="buttom-title">
                *Note : Bid Once Played Will Not Be Cancelled*
              </p>
            </>
          }
        />
      </div>
    </NastedLayout>
  );
}

export default SingleDigitCode;
