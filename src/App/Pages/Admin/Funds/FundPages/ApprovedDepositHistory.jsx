import React, { useEffect, useState } from "react";
import { apiRoutes } from "../../../../Config/endpoints";
import { FOR_GET_LIST } from "../../../../Service/commanservice";
import NewContainer from "../../../../Containers/New_container";

function ApprovedDepositHistory() {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    try {
      const res = await FOR_GET_LIST(
        `${apiRoutes.GET_CREDIT_HISTORY}limit=10&skipValue=1`
      );
      if (res) {
        if (res.status == true) {
          setdata(res.data);
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
    <>
      <NewContainer title="jackpot bid History">
        <div className="fund-request-card p-2  rounded-4 mb-2">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="flex-column d-flex  ">
              <span className="bold-font">order id</span>
              <span className="">dfgfdg34534</span>
            </div>
            <h1 className=" text-muted">₹ 500</h1>
          </div>

          <div className="d-flex  mt-2 flex-column ">
            <div className=" d-flex text-left ">
              <span className="bold-font">
                Request Type &nbsp; : &nbsp;&nbsp;
              </span>
              <span className="">Credit</span>
            </div>
            <div className="d-flex text-center ">
              <span className="bold-font">
                Withdraw Mode &nbsp; : &nbsp;&nbsp;
              </span>
              <span className="">UPI/Bank</span>
            </div>
            <div className="d-flex text-center ">
              <span className="bold-font">Status &nbsp; : &nbsp;&nbsp;</span>
              <span className="">Decliend</span>
            </div>
            <div className="d-flex text-center ">
              <span className="bold-font">Date &nbsp; : &nbsp;&nbsp;</span>
              <span className="">25/02/2025 </span>
            </div>
          </div>
        </div>
      </NewContainer>
      {/* <div className="container-fluid mt-2">
        <div className="row">
          {data.map((item, i) => (
            <div className="col-12">
              <div className="test p-2 border rounded mb-2">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className=" ">
                    {item.reqDate} {item.reqTime}
                  </span>
                  <span
                    style={{
                      color: item.reqStatus == "Approved" ? "green" : "red",
                    }}
                  >
                    <i
                      class={`fa-solid ${
                        item.reqStatus == "Approved" ? "fa-check" : "fa-clock"
                      }`}
                    ></i>{" "}
                    {item.reqStatus}
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center ">
                  <h1 className=" text-muted">₹ {item.reqAmount}</h1>
                  <div className="flex-column d-flex text-center ">
                    <span className="fw-bold">Order Id</span>
                    <span className="" style={{ textAlign: "right" }}>
                      {item._id}
                    </span>
                  </div>
                </div>
                <hr className="p-0" />
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="flex-column d-flex text-left ">
                    <span className="fw-bold">Request Type</span>
                    <span className="">{item.reqType}</span>
                  </div>
                  <div className="flex-column d-flex text-center ">
                    <span className="fw-bold">Withdraw Mode</span>
                    <span className="">{item.withdrawalMode}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default ApprovedDepositHistory;
