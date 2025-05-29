import React, { useEffect, useState } from "react";
import NewContainer from "../../../../Containers/New_container";
import {
  FOR_GET_LIST,
  FOR_POST_REQUEST,
} from "../../../../Service/commanservice";
import ConfirmModal from "../../../../Components/ConfirmModal";
import { useLocation, useNavigate } from "react-router-dom";
import InformModal from "../../../../Components/InformModal";
import { apiRoutes } from "../../../../Config/endpoints";
// import BottomSheetFilter from "../../../../Components/BottomSheetFilter";
import FilterBottomSheet from "../../../../Components/FilterBottomSheet";

function GameBidHistory() {
  const [data, setdata] = useState([]);
  const [modal, setmodal] = useState(false);
  const navigate = useNavigate();
  const getdata = async () => {
    try {
      const res = await FOR_GET_LIST(
        `${apiRoutes.GET_GAMEBID_HISTORY}limit=10&skipValue=1`
      );
      if (res) {
        if (res.status == true) {
          setdata(res.data);
          console.log(res.data);
        }
        if (res.status == false) {
          setmodal(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    general: [],
    status: [],
    games: [],
  });
  const handleSubmit = (filters) => {
    console.log("Submitted Filters:", filters);
    postFilter(filters);
  };
  const [gameprovider, setprovider] = useState([]);
  const getgameprovider = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_MAIN_GAME_PROVIDER}`);
      if (res) {
        if (res.status == true) {
          setprovider(res.data);
          // console.log(res.data);
        }
        if (res.status == false) {
          setmodal(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const postFilter = async (filters) => {
    const data = {
      providerId: filters.games,
      session: filters.general,
      status: filters.status,
    };
    try {
      const res = await FOR_POST_REQUEST(
        `${apiRoutes.POST_GAMEBID_BIDFILTER}limit=10&skipValue=1`,
        data
      );
      if (res) {
        if (res.status == true) {
          // setprovider(res.data);
          console.log(res.data);
        }
        if (res.status == false) {
          // setmodal(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
    getgameprovider();
  }, []);
  const handlecancel = () => {
    setIsOpen(false);
    setSelectedFilters({
      general: [],
      status: [],
      games: [],
    });
  };
  const goback = () => {
    navigate(-1);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div onClick={goback}>{"<-"}BID HISTORY</div>
        <button
          onClick={() => setIsOpen(true)}
          style={{ border: "none", backgroundColor: "white" }}
        >
          Filter&nbsp;Type
          <i className="fas fa-filter" style={{ marginLeft: "6px" }}></i>
        </button>
      </div>

      {data?.length > 0 ? (
        <>
          {data?.map((item, i) => (
            <div className="test mt-2 rounded-4 ">
              <div className="history-title mb-2">
                <span className=" ">
                  8:30 PM ({item.gameTypeName}, {item.providerName})
                </span>
              </div>
              <div className="d-flex justify-content-around align-items-center">
                <div className="d-flex flex-column ">
                  <span className="passbook-title">Bid ID</span>
                  <span>{item._id}</span>
                </div>
                <div className="d-flex flex-column ">
                  <span className="passbook-title">Digit</span>
                  <span>{item.bidDigit}</span>
                </div>
                <div className="d-flex flex-column ">
                  <span className="passbook-title">Point</span>
                  <span>{item.biddingPoints}</span>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-around align-items-center">
                  <div className="d-flex flex-column text-center ">
                    <span className="passbook-title">Play On :</span>
                    <span>09/01/2025 thursday</span>
                  </div>
                  <div className="d-flex flex-column text-center ">
                    <span className="passbook-title">Play For :</span>
                    <span>09/01/2025 thursday</span>
                  </div>
                </div>
                <div className="d-flex my-2 justify-content-center ">
                  <div className="d-flex  align-items-center  text-center">
                    <span className="fw-bold">Play For :</span>
                    <span>09/01/2025 thursday</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="">Better Luck Next Time</span>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="nodatafoundtext">No Bid History Found</p>
      )}

      <FilterBottomSheet
        isOpen={isOpen}
        onClose={() => handlecancel()}
        onSubmit={handleSubmit}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        gamelist={gameprovider}
        gametype={true}
      />

      <InformModal
        isOpen={modal}
        onClose={() => setmodal(!modal)}
        title={"No Bid History Found"}
        icon={"fa fa-info-circle"}
        buttontitle={"OK"}
      />
    </div>
  );
}

export default GameBidHistory;
