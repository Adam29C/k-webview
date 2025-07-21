import React from "react";

const BidsSectionModal = ({ BidArray,   getProfile }) => {
  console.log("BidArray", BidArray);

  const totalBids = BidArray.length;
  const totalPoints = BidArray.reduce(
    (total, val) => total + (Number(val.biddingPoints) || 0),
    0
  );

  return (
    <div>
      <table class="table bid-table">
        <thead>
          <tr>
            <th scope="col">Digit</th>
            <th scope="col">Points</th>
            <th scope="col">Game Type</th>
          </tr>
        </thead>
        <tbody>
          {BidArray &&
            BidArray?.map((items) => {
              return (
                <tr>
                  <td>{items?.bidDigit || items.jodi}</td>
                  <td>{items?.biddingPoints}</td>
                  <td>{items?.gameSession}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="d-flex justify-content-between mt-2">
        <div className="d-flex justify-content-between w-100">
          <div>
            <span className="fist-title text-secondary">Total Bids</span>
          </div>
          <div>
            <span>{totalBids}</span>
          </div>
        </div>

        <div className="d-flex justify-content-between w-100">
          <div className="ms-3">
            <span className="fist-title">Total Bids Amount</span>
          </div>
          <div>
            <span>{totalPoints}</span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <div className="d-flex justify-content-between w-100">
          <div>
            <span className="second-title">
              Wallet Before
              <br />
              Deduction
            </span>
          </div>
          <div>
            <span>{getProfile?.wallet_balance}</span>
          </div>
        </div>

        <div className="d-flex justify-content-between w-100">
          <div className="ms-3">
            <span className="second-title">
              Wallet After
              <br />
              Deduction
            </span>
          </div>
          <div>
            <span>{getProfile?.wallet_balance - totalPoints}</span>
          </div>
        </div>
      </div>
      <p className="buttom-title">
        *Note : Bid Once Played Will Not Be Cancelled*
      </p>
    </div>
  );
};

export default BidsSectionModal;
