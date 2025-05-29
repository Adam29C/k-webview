import React, { useState } from "react";
import { FOR_POST_REQUEST } from "../../../../Service/commanservice";
import { apiRoutes } from "../../../../Config/endpoints";
import PagesIndex from "../../../pageIndex";
import NastedLayout from "../../../../Containers/NastedLayout";
import toast from "react-hot-toast";
// import ThirdContainer from "../Containers/New_container";
// import CommonTopSvg from "../../assets/svgs/secondary-top.svg";

const AddFund = () => {
  const { getProfile } = PagesIndex.useSelector((state) => state.CommonSlice);

  const [amount, setAmount] = useState("");
  const [modal, setmodal] = useState(false);

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAmount(value === "" ? 0 : parseInt(value));
  };
  const handlesubmit = async () => {
    if (amount <= 0) {
      setmodal(true);
    }

    const data = { amount: amount };
    try {
      const res = await FOR_POST_REQUEST(`${apiRoutes.POST_ADD_FUND}`, data);

      if (res.status) {
        console.log(res.data);
      } else {
        console.log("dasdsad", res.data.error);

        toast.error(res.data.error.message);
      }
    } catch (error) {
      console.log("dasdsad", res.data.error);

      toast.error(error.error.message);
    }
  };

  return (
    <NastedLayout title={"Add Fund"} route={"/funds"}>
      <div className="d-flex justify-content-between align-items-center p-2 border rounded">
        <div>
          <div className="fw-bold ">{getProfile?.username}</div>
          <div className="text-muted">+91{getProfile?.mobile}</div>
        </div>
        <div className="text-center">
          <div className="text-muted">Available Balance</div>
          <div className="fw-bold">₹ {getProfile?.wallet_balance || 0}</div>
        </div>
      </div>

      <div className="col-12 mt-2 ">
        <div className="d-flex flex-column justify-content-between align-items-center p-2 border rounded">
          <div class="container my-5">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <div class="input-group d-flex justify-content-center">
                  <h2 className="fw-bold">₹</h2>
                  <input
                    type="text"
                    class="fund-input-control"
                    value={amount}
                    placeholder="Enter amount"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row g-2 my-5">
            {[100, 500, 1000, 2000, 5000, 10000].map((value) => (
              <div className="col-4" key={value}>
                <button
                  className="btn btn-light w-100 shadow-sm"
                  onClick={() => handleAmountClick(value)}
                >
                  {value}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handlesubmit}
            className="btn btn-teal w-100 my-5 text-white fw-bold py-2"
            style={{ borderRadius: "25px", background: "#237f8a" }}
          >
            Add Fund
          </button>
        </div>
      </div>
      <PagesIndex.InformModal
        isOpen={modal}
        onClose={() => setmodal(!modal)}
        title={"Please  Enter Valid Amount Of at Least 100"}
        icon={"fa fa-info-circle"}
        buttontitle={"OK"}
      />
      <PagesIndex.Toast />
    </NastedLayout>
  );
};

export default AddFund;
