import React, { useEffect, useState } from "react";
import { FOR_GET_LIST } from "../../../../Service/commanservice";
import { apiRoutes } from "../../../../Config/endpoints";

function FundRequestHistory() {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    try {
      const res = await FOR_GET_LIST(
        `${apiRoutes.GET_FUND_HISTORY}limit=10&skipValue=1`
      );
      if (res) {
        if (res.status == true) {
          setdata(res.data);
          // console.log(res.data);
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
      </div>
    </div>
  );
}

export default FundRequestHistory;
