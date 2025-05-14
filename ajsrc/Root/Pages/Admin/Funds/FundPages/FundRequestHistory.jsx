import React from "react";

function FundRequestHistory() {
  return (
    <div>
      {/* <div className="Image-Container position-relative">
               <div className="d-flex align-items-center text-light w-100 p-3">
                <i className="fa-solid fa-arrow-left fa-2x cursor-pointer"></i>
                 <div className="d-flex flex-column align-items-center">
                   <h2 className="mx-3 mb-0">Title</h2>
                   <span className="">online</span>
                </div>
               </div>
            </div> */}
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-12">
            <div className="test p-2 border rounded mb-2">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className=" ">19/07/2025 04:47:87PM</span>
                <span className="text-danger">
                  <i class="fa-solid fa-clock"></i> failed
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center ">
                <h1 className=" text-muted">₹ 500</h1>
                <div className="flex-column d-flex text-center ">
                  <span className="fw-bold">order id</span>
                  <span className="">dfgfdg34534</span>
                </div>
              </div>
              <hr className="p-0" />
              <div className="d-flex justify-content-between align-items-center ">
                <div className="flex-column d-flex text-left ">
                  <span className="fw-bold">Request Type</span>
                  <span className="">Credit</span>
                </div>
                <div className="flex-column d-flex text-center ">
                  <span className="fw-bold">Withdraw Mode</span>
                  <span className="">UPI/Bank</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundRequestHistory;
