import React, { useCallback, useEffect, useRef, useState } from "react";
import { FOR_GET_LIST } from "../../../../Service/commanservice";
import { apiRoutes } from "../../../../Config/endpoints";
import NastedLayout from "../../../../Containers/NastedLayout";

function FundRequestHistory() {
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
          `${apiRoutes.GET_FUND_HISTORY}limit=10&skipValue=${currentPage}`
        );
        if (res) {
          if (res.status == true) {
            // console.log(res);
            setItems((prev) => [...prev, ...res.data]);
            setPages(res.totalPages);
            setLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  // const getdata = async () => {
  //   try {
  //     const res = await FOR_GET_LIST(
  //       `${apiRoutes.GET_FUND_HISTORY}limit=10&skipValue=1`
  //     );
  //     if (res) {
  //       if (res.status == true) {
  //         console.log(res)
  //         setdata(res.data);
  //         // console.log(res.data);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getdata();
  // }, []);
  return (
    <NastedLayout title={"Approved Debit History"} route={"/funds"}>
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
    </NastedLayout>
  );
}

export default FundRequestHistory;
