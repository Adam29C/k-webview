import React, { useState, useEffect } from "react";
import "./singledigitcode.css";
import NastedLayout from "../../Containers/NastedLayout";
import PagesIndex from "../../Pages/pageIndex";
import { getActualDateFormate } from "../../helpers/Common_Date";
import toast from "react-hot-toast";
import CenterModal from "../../Components/Reusable_modal";
import { BidNastedPayload, PlaceMainGameBid } from "../../helpers/PlaceBid";
import BidsSectionModal from "./BidsSectionModal";

function SingleDigitCode() {
  const navigate = PagesIndex.useNavigate();
  const { state } = PagesIndex.useLocation();
  const { selectedProvider, getProfile } = PagesIndex.useSelector(
    (state) => state.CommonSlice
  );

  // State to store input values for digits 0 to 9
  const [bidInputs, setBidInputs] = PagesIndex.useState(Array(10).fill(""));
  const [GameSessions, setGameSessions] = PagesIndex.useState([]);
  const [BidArray, setBidArray] = PagesIndex.useState([]);
  const [showModal, setshowModal] = PagesIndex.useState(false);
  const [GameTypeSelect, setGameTypeSelect] = PagesIndex.useState("");

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

    const response = BidNastedPayload(
      newInputs,
      getProfile,
      selectedProvider,
      state,
      GameSessions,
      GameTypeSelect
    );

    setBidArray(response);
  };

  const PlaceBid = async () => {
    const response = PlaceMainGameBid(
      points,
      selectedProvider,
      BidArray,
      GameSessions,
      toast,
      navigate,
      GameTypeSelect
    );
  };

  return (
    <NastedLayout
      title={`${selectedProvider?.providerName} single digit board `}
      route={"/maingame"}
    >
      <div className="form-box16">
        <div className="form-group16">
          <label>Select&nbsp;Game&nbsp;Type</label>
          <select onChange={(e) => setGameTypeSelect(e.target.value)}>
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
  );
}

export default SingleDigitCode;
