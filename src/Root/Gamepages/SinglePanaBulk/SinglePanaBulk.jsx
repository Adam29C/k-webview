import React, { useState, useEffect } from "react";
import "./singlepanabulk.css";
import PagesIndex from "../../Pages/pageIndex";
import NastedLayout from "../../Containers/NastedLayout";
import { getActualDateFormate } from "../../helpers/Common_Date";
import BidsSectionModal from "../SingledigitCode/BidsSectionModal";
import { BidNastedPayload, PlaceMainGameBid } from "../../helpers/PlaceBid";

function SinglePanaBulk() {
  // Keypad layout. Using strings for keys to be consistent.
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", ""];

  const navigate = PagesIndex.useNavigate();
  const { state } = PagesIndex.useLocation();
  const { selectedProvider, getProfile } = PagesIndex.useSelector(
    (state) => state.CommonSlice
  );

  const [pointInput, setPointInput] = useState("");
  const [bidInputs, setBidInputs] = useState(Array(10).fill(""));
  const [GameSessions, setGameSessions] = useState();
  const [BidArray, setBidArray] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [GameTypeSelect, setGameTypeSelect] = PagesIndex.useState("Open");

  console.log("ffffffffffffff", GameTypeSelect);

  // const getMainDayDetails = async () => {
  //   const res = await PagesIndex.commanservice.FOR_GET_QUERY_LIST(
  //     `${PagesIndex.apiRoutes.GET_DAYS_GAME_BIDS_LIST}?providerId=${selectedProvider?.providerId}`
  //   );
  // console.log("GameSessions", GameSessions);

  //   setGameSessions(res?.date[0]);
  // };

  // console.log("GameSessions", GameSessions);

  // useEffect(() => {
  //   getMainDayDetails();
  // }, []);

  let bidDateFormet = getActualDateFormate(new Date());

  const totalBids = bidInputs.filter((val) => Number(val) > 0).length;
  const totalPoints = bidInputs.reduce(
    (total, val) => total + (Number(val) || 0),
    0
  );

  //   const getMainDayDetails = async () => {
  //   const res = await PagesIndex.commanservice.FOR_GET_QUERY_LIST(
  //     `${PagesIndex.apiRoutes.GET_DAYS_GAME_BIDS_LIST}?providerId=${selectedProvider?.providerId}`
  //   );
  //   setGameSessions(res.date[0]);
  // };

  // useEffect(() => {
  //   getMainDayDetails();
  // }, []);

  useEffect(() => {
    const response = BidNastedPayload(
      bidInputs,
      getProfile,
      selectedProvider,
      state,
      // GameSessions,
      GameTypeSelect
    );
    setBidArray(response);
  }, [
    bidInputs,
    getProfile,
    selectedProvider,
    state,
    GameSessions,
    GameTypeSelect,
  ]);

  const PlaceBid = async () => {
    // const toast = () => {};
    PlaceMainGameBid(
      totalPoints,
      selectedProvider,
      BidArray,
      GameSessions,
      toast,
      navigate,
      GameTypeSelect
    );
    setshowModal(false);
  };

  const handleKeypadClick = (key) => {
    const digit = parseInt(key, 10);
    const pointsToAdd = parseInt(pointInput, 10);

    if (isNaN(pointsToAdd) || pointsToAdd <= 0) {
      alert("Please enter a valid point amount first.");
      return;
    }

    const newInputs = [...bidInputs];
    const existingPoints = parseInt(newInputs[digit], 10) || 0;
    newInputs[digit] = (existingPoints + pointsToAdd).toString();

    setBidInputs(newInputs);
  };
  return (
    <>
      {/* <style>{styles}</style> */}
      <NastedLayout
        title={`${selectedProvider?.providerName} dashboard`}
        route={"/maingame"}
      >
        <div className="form-box13">
          <div className="form-group13">
            <label>Select&nbsp;Game&nbsp;Type</label>
            <select
              onChange={(e) => setGameTypeSelect(e.target.value)}
              value={GameTypeSelect}
            >
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

          <div className="form-group13">
            <label>Enter&nbsp;Points</label>
            <input
              type="number"
              placeholder="Enter Points"
              value={pointInput}
              className="bid-input"
              onChange={(e) => setPointInput(e.target.value)}
            />
          </div>

          <div className="keypad13">
            {keys.map((key, index) => {
              if (key === "") {
                return <div key={`empty-${index}`} className="visiiblty" />;
              }
              const currentBid = bidInputs[parseInt(key, 10)] || "";
              return (
                <button
                  key={key}
                  className={"parentbutton key13"}
                  onClick={() => handleKeypadClick(key)}
                >
                  {key}
                  {currentBid && (
                    <span className="inside-button">{currentBid}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="info13">
            <span className="infosum13">
              <div className="infotext13">Bids</div>
              <div>{totalBids}</div>
            </span>
            <span className="infosum13">
              <div className="infotext13"> Points</div>
              <div>{totalPoints}</div>
            </span>
            <button
              className="submit-button13"
              onClick={() => setshowModal(true)}
              disabled={totalPoints === 0}
            >
              Submit
            </button>
          </div>
          <PagesIndex.Toast position={"top-center"} />
          <PagesIndex.CenterModal
            id={`timinig-test`}
            showBtn={true}
            title={`${selectedProvider?.providerName} ${bidDateFormet} `}
            size={"sm"}
            ShowModal={showModal}
            onClose={() => setshowModal(false)}
            onSave={PlaceBid}
            children={
              <BidsSectionModal
                BidArray={BidArray}
                totalBids={totalBids}
                totalPoints={totalPoints}
                getProfile={getProfile}
              />
            }
          />
        </div>
      </NastedLayout>
    </>
  );
}

export default SinglePanaBulk;
