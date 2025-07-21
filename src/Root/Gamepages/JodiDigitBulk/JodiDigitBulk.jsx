import React from "react";
import "./jodidigitbulk.css";
import PagesIndex from "../../Pages/pageIndex";
import NastedLayout from "../../Containers/NastedLayout";
import { numberRegexp } from "../../helpers/Valid_rejex";
import CenterModal from "../../Components/Reusable_modal";
import { getActualDateFormate } from "../../helpers/Common_Date";
import { BidNastedPayload, PlaceMainGameBid } from "../../helpers/PlaceBid";
import BidsSectionModal from "../SingledigitCode/BidsSectionModal";
import toast from "react-hot-toast";
function JodiDigitBulk() {
  const navigate = PagesIndex.useNavigate();
  const { state } = PagesIndex.useLocation();
  const { selectedProvider, getProfile } = PagesIndex.useSelector(
    (state) => state.CommonSlice
  );

  const [points, setPoints] = PagesIndex.useState("");
  const [jodiInput, setJodiInput] = PagesIndex.useState("");
  const [jodiArray, setJodiArray] = PagesIndex.useState([]);
  const [showModal, setshowModal] = PagesIndex.useState(false);
  const [BidArray, setBidArray] = PagesIndex.useState([]);

  let bidDateFormet = getActualDateFormate(new Date());

  const setPointsFunc = (e) => {
    const value = e.target.value;

    let valid = numberRegexp(value);

    if (!valid) {
      alert("Please enter a valid number");
    } else {
      setPoints(e.target.value);
    }
  };
  const handleJodiChange = (e) => {
    const value = e.target.value;

    let valid = numberRegexp(value);

    console.log("valid", valid);

    if (valid && /^\d{0,2}$/.test(value)) {
      setJodiInput(value);

      if (value.length === 2) {
        setJodiArray([
          ...jodiArray,
          { bidDigit: value, biddingPoints: points, gameSession: "Close" },
        ]);
        setJodiInput(""); // Reset input after storing
      }
    } else {
      alert("Please enter a valid number");
    }

    const response = BidNastedPayload(
      jodiArray,
      getProfile,
      selectedProvider,
      state,
      "Close"
    );

    setBidArray(response);
  };

  const PlaceBid = async () => {
    const response = PlaceMainGameBid(
      points,
      selectedProvider,
      jodiArray,
      "Close",
      toast,
      navigate
    );
  };

  const totalBids = jodiArray.filter((val) => Number(val) > 0).length;
  const totalPoints = jodiArray.reduce(
    (total, val) => total + (Number(val?.biddingPoints) || 0),
    0
  );

  return (
    <NastedLayout
      title={`${selectedProvider?.providerName} single digit board`}
      route={"/maingame"}
    >
      <div className="form-box17">
        <div className="form-group17">
          <label>Enter&nbsp;Points</label>
          <input
            type="text"
            placeholder="Enter Points"
            value={points}
            onChange={(e) => setPointsFunc(e)}
          />
        </div>

        <div className="form-group17">
          <label>Enter&nbsp;Jodi&nbsp;Digits</label>
          <input
            type="text"
            placeholder="Enter Jodi"
            value={jodiInput}
            onChange={handleJodiChange}
          />
        </div>
      </div>
      <div className="table-responsive fixed-header-table">
        <table className="table  text-center table-sm">
          <thead className="table-dark">
            <tr>
              <th>Jodi</th>
              <th>Points</th>
              <th>Game Type</th>
            </tr>
          </thead>
          <tbody>
            {jodiArray.map((item, index) => (
              <tr key={index}>
                <td>{item.bidDigit}</td>
                <td>
                  <i className="fa-solid fa-coins text-warning"></i>&nbsp;
                  {item.biddingPoints}
                </td>
                <td>Close</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="info17">
        <span className="infosum17">
          <div className="infotext17">Bids</div>
          <div>{jodiArray.length}</div>
        </span>
        <span className="infosum17">
          <div className="infotext17">Points</div>
          <div>{totalPoints}</div>
        </span>
        <button className="submit-button17" onClick={() => setshowModal(true)}>
          Submit
        </button>
      </div>

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
            BidArray={jodiArray}
            totalBids={totalBids}
            totalPoints={totalPoints}
            getProfile={getProfile}
          />
        }
      />
    </NastedLayout>
  );
}

export default JodiDigitBulk;
