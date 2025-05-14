import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewContainer from "../../../Containers/New_container";

const Passbook = () => {
  return (
    <div style={{ padding: "5px" }}>
      {/* <NewContainer title="Passbook"> */}
      <div
        className="test p-3 border rounded mb-2 "
        style={{ marginTop: "10px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span
            style={{ textTransform: "capitalize" }}
            className="text-success fs-14 fw-bold"
          >
            wallet Fund Credit via Payment Gatway
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span>24/02/2025 </span>
          <span className="text-success">+100.00Rs</span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between flex-column align-items-center">
            <span className="passbook-title">Previous Amount</span>
            <span>690Rs</span>
          </div>
          <div className="d-flex justify-content-between flex-column align-items-center">
            <span className="passbook-title">Current Amount</span>
            <span>790Rs</span>
          </div>
        </div>
      </div>
      <div
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
      </div>
      {/* </NewContainer> */}
    </div>
  );
};

export default Passbook;
