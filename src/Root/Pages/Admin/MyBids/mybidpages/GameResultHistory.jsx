import React, { useEffect, useState } from "react";
import {
  FOR_GET_LIST,
  FOR_POST_REQUEST,
} from "../../../../Service/commanservice";
import { apiRoutes } from "../../../../Config/endpoints";
import NastedLayout from "../../../../Containers/NastedLayout";
function GameResultHistory() {
  const [data, setdata] = useState([]);
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const convertDateFormat = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };
  const getdata = async () => {
    try {
      // const data = { date: convertDateFormat(selectedDate) };
      const res = await FOR_GET_LIST(
        `${apiRoutes.GET_GAMERESULT_HISTORY}${convertDateFormat(selectedDate)}`
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
  }, [selectedDate]);
  return (
    <NastedLayout title={"Bid History"} route={"/bids"}>
      <div className="game-result-card   rounded-pill mb-2 d-flex">
        <div className="col-6 p-2  game-result-left">
          <span className="date-picker-container">
            {/* <i  class="fa-solid fa-calendar-days"></i> &nbsp; */}
            <div
              onClick={() => document.getElementById("dateInput").showPicker()}
            >
              <input
                id="dateInput"
                type="date"
                className="date-input"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
            {/* {convertDateFormat(date)} */}
          </span>
        </div>
        <div className="col-6 p-2 game-result-right">
          <span className="w-50">Main Game Result</span>
        </div>
      </div>
      {data?.length > 0 ? (
        <>
          {data?.map((item, i) => (
            <div
              key={item.providerId}
              className=" py-3 px-3 my-2 border rounded"
            >
              <div className="d-flex primary-color fw-bold justify-content-between align-items-center  ">
                <span className="">
                  <i class="fa-solid fa-clock"></i> &nbsp; {item.providerName}
                </span>
                <span>
                  {item.openWinningDigit}-{item.openWinningDigitFamily}
                  {item.closeWinningDigitFamily}-{item.closeWinningDigit}
                </span>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="nodatafoundtext">No Game Result Found</p>
      )}
    </NastedLayout>
  );
}

export default GameResultHistory;
