import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NewContainer from "../../../Containers/NastedLayout";
import { FOR_GET_LIST } from "../../../Service/commanservice";
import { apiRoutes } from "../../../Config/endpoints";
import NastedLayout from "../../../Containers/NastedLayout";

const Passbook = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const observer = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && currentPage < pages) {
          setCurrentPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, currentPage, pages]
  );

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
    <NastedLayout title={"PASSBOOKS"} route={"/home"}>
      <div style={{ padding: "5px" }}>
        {items?.length > 0 ? (
          <>
            {items.map((item) => (
              <div key={item._id}>
                <div
                  className="test p-3 border rounded mb-2"
                  style={{ marginTop: "10px" }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span
                      style={{ textTransform: "capitalize" }}
                      className={`${
                        item.reqType === "Credit"
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
                        item.reqType === "Credit"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {item.reqType === "Credit" ? "+" : "-"}{" "}
                      {item.transaction_amount}&nbsp;Rs
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
              </div>
            ))}
          </>
        ) : (
          <p className="nodatafoundtext">No History Found</p>
        )}
      </div>
    </NastedLayout>
  );
};

export default Passbook;
