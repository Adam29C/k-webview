import React, { useState } from "react";
import { FOR_POST_REQUEST } from "../../../../Service/commanservice";
import { apiRoutes } from "../../../../Config/endpoints";
// import ThirdContainer from "../Containers/New_container";
// import CommonTopSvg from "../../assets/svgs/secondary-top.svg";

const AddFund = () => {
  const [amount, setAmount] = useState("");
  const handleAmountClick = (value) => {
    setAmount(value);
  };
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAmount(value === "" ? 0 : parseInt(value));
  };
  const handlesubmit = async () => {
    const data = { amount: amount };
    try {
      const res = await FOR_POST_REQUEST(`${apiRoutes.POST_ADD_FUND}`, data);
      if (res) {
        if (res.status == true) {
          // setmyList(res.data.textMain);
          console.log(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        {/* <div className="Image-Container position-relative">
          <div className="d-flex align-items-center text-light w-100 p-3">
            <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
            <h2 className="mx-3 mb-0">Title</h2>
          </div>
        </div> */}

        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center p-2 border rounded">
                <div>
                  <div className="fw-bold ">TESTEMULATOR</div>
                  <div className="text-muted">+919876543210</div>
                </div>
                <div className="text-center">
                  <div className="text-muted">Available Balance</div>
                  <div className="fw-bold">₹ 69,000</div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-2">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFund;
