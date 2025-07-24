import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NewContainer from "../../../Containers/NastedLayout";
import { FOR_GET_LIST } from "../../../Service/commanservice";
import { apiRoutes } from "../../../Config/endpoints";
import NastedLayout from "../../../Containers/NastedLayout";
import useInfiniteScroll from "../../../Components/InfiniteScroll";
import Loader from "../../../Components/Loader";

const Passbook = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const lastItemRef = useInfiniteScroll({
    loading,
    hasMore: currentPage < pages,
    onLoadMore: () => setCurrentPage((prev) => prev + 1),
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await await FOR_GET_LIST(
          `${apiRoutes.GET_WALLET_HISTORY}skipValue=${currentPage}&limit=10`
        );
        if (res) {
          if (res.status == true) {
            setItems((prev) => [...prev, ...res.data]);
            setPages(res.pages);
            setLoading(false);
            // console.log(res.data);
          }
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <NastedLayout title={"PASSBOOKS"} route={"/home"} className="h-100 overflow-scroll" >
      <div   > 
        {items?.length > 0 ? (
          <>
            {items.map((item, index) => (
              <div
                key={item._id}
                ref={index === items.length - 1 ? lastItemRef : null}
              >
                <div
                  className="test p-2 border rounded mb-2"
                  style={{ marginTop: "10px" }}
                >
                  <div className="d-flex justify-content-left align-items-center ">
                    <span
                      style={{ textTransform: "capitalize" }}
                      className={`${
                        item.reqType === "Credit"
                          ? "text-success fs-14 "
                          : "text-danger fs-14 "
                      }`}
                    >
                      {index + 1}. {item.description}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center  ">
                    <span className="passbook-title fw-bold">Date:</span>
                    <span className="passbook-title">
                      {item.transaction_date}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center   ">
                    <span className="passbook-title fw-bold">Amount:</span>
                    <span
                      className={`
                        passbook-title + ${item.reqType === "Credit"
                          ? "text-success"
                          : "text-danger"}
                      `}
                    >
                      {item.reqType === "Credit" ? "+" : "-"}
                      {item.transaction_amount}&nbsp;Rs
                    </span>
                  </div>

                  <div className="d-flex justify-content-between ">
                    <div className="d-flex justify-content-between flex-column align-items-start">
                      <span className="passbook-title">Previous Amount</span>
                      <span className="passbook-title">₹ {parseFloat(item.previous_amount).toFixed(1)}</span>
                    </div>
                    <div className="d-flex justify-content-between flex-column align-items-start">
                      <span className="passbook-title">Current Amount</span>
                      <span className="passbook-title">₹ {parseFloat(item.current_amount).toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {loading && <Loader />}
          </>
        ) : loading ? (
          <Loader />
        ) : (
          <p className="nodatafoundtext">No History Found</p>
        )}
      </div>
    </NastedLayout>
  );
};

export default Passbook;
