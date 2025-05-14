import React, { useState } from "react";
import TermandCondition from "../../../../Components/TermandCondition";

function WithdrawFund() {
  const [amount, setAmount] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAmount(value === "" ? 0 : parseInt(value));
  };
  const [modal, setmodal] = useState(true);
  const myList = [
    "Minimum Deposit is 100rs.",
    "Minimum Withdraw is 500rs.",
    "Maximum Withdraw is 99Lakh rs.",
    "Withdraw request timing 10Am To 10Pm.",
    "Process Time Minimum 1Hour Maximum 24 Hours.",
    "Unlimited Withdraw Request in One Day",
    "Withdrawal is Available 365 Days in years.",
  ];
  return (
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
            <button
              className="btn btn-teal w-100 my-5 text-white fw-bold py-2"
              style={{ borderRadius: "25px", background: "#237f8a" }}
            >
              Send Request
            </button>
          </div>
        </div>
      </div>
      <TermandCondition
        isOpen={modal}
        onClose={() => setmodal(!modal)}
        title={"Terms and Conditions"}
        list={myList}
        buttontitle={"Accept"}
      />
    </div>
  );
}

export default WithdrawFund;
