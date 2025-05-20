import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewContainer from "../../../Containers/New_container";
import { FOR_GET_LIST } from "../../../Service/commanservice";
import { apiRoutes } from "../../../Config/endpoints";

const Passbook = () => {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    try {
      const res = await FOR_GET_LIST(
        `${apiRoutes.GET_WALLET_HISTORY}skipValue=1&limit=10`
      );
      if (res) {
        if (res.status == true) {
          setdata(res.data);
          console.log(res.data);
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
    <div style={{ padding: "5px" }}>
      {/* <NewContainer title="Passbook"> */}

      {data.map((item, i) => (
        <div
          className="test p-3 border rounded mb-2 "
          style={{ marginTop: "10px" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span
              style={{ textTransform: "capitalize" }}
              className={`${
                item.reqType == "Credit"
                  ? "text-success fs-14 fw-bold"
                  : "text-danger fs-14 fw-bold"
              }`}
            >
              {item.description}
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span>{item.transaction_date}</span>
            <span
              className={
                item.reqType == "Credit" ? "text-success" : "text-danger"
              }
            >
              {item.reqType == "Credit" ? "+" : "-"} {item.transaction_amount}
            </span>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between flex-column align-items-center">
              <span className="passbook-title">Previous Amount</span>
              <span>{item.previous_amount}</span>
            </div>
            <div className="d-flex justify-content-between flex-column align-items-center">
              <span className="passbook-title">Current Amount</span>
              <span>{item.current_amount}</span>
            </div>
          </div>
        </div>
      ))}
      {/* <div
        className="test p-3 border rounded mb-2 "
        style={{ marginTop: "10px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span
            style={{ textTransform: "capitalize" }}
            className="text-danger fs-14 fw-bold"
          >
            wallet Fund Debit via Payment Gatway
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span>24/02/2025 </span>
          <span className="text-danger">-100.00Rs</span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between flex-column align-items-center">
            <span className="passbook-title fs-14">Previous Amount</span>
            <span>690Rs</span>
          </div>
          <div className="d-flex justify-content-between flex-column align-items-center">
            <span className="passbook-title fs-14">Current Amount</span>
            <span>790Rs</span>
          </div>
        </div>
      </div> */}
      {/* </NewContainer> */}
    </div>
  );
};

export default Passbook;
