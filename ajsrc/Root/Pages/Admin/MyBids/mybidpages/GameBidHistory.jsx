import React, { useEffect, useState } from "react";
import NewContainer from "../../../../Containers/New_container";
import { FOR_POST_REQUEST } from "../../../../Service/commanservice";
import ConfirmModal from "../../../../Components/ConfirmModal";
import { useNavigate } from "react-router-dom";
import InformModal from "../../../../Components/InformModal";

function GameBidHistory() {
  const [data, setdata] = useState([]);
  const [modal, setmodal] = useState(true);
  const navigate = useNavigate();
  const getdata = async () => {
    try {
      const data = { userId: "67b41598ce6ebe00c0d6a1c5", skipValue: "1" };
      const res = await FOR_POST_REQUEST(
        `bidsHistory/gameBidsPagination`,
        data
      );
      if (res) {
        setdata(res.data);
        // console.log(res.message);
        if (res.status == 0) {
          setmodal(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <div className="test mt-2 rounded-4 ">
        <div className="history-title mb-2">
          <span className=" ">8:30 PM (JODI, JODI)</span>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <div className="d-flex flex-column ">
            <span className="passbook-title">Bid ID</span>
            <span>690</span>
          </div>
          <div className="d-flex flex-column ">
            <span className="passbook-title">Digit </span>
            <span>690</span>
          </div>
          <div className="d-flex flex-column ">
            <span className="passbook-title">Point</span>
            <span>790</span>
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
