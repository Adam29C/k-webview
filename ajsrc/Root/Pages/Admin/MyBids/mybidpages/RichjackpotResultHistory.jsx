import React, { useEffect, useState } from "react";
import { FOR_POST_REQUEST } from "../../../../Service/commanservice";
function RichjackpotResultHistory() {
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
      const data = { date: convertDateFormat(selectedDate) };
      const res = await FOR_POST_REQUEST(
        `history/andarBaharRequestHistory`,
        data
      );
      if (res) {
        setdata(res.data);
        // console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, [selectedDate]);
  return (
    <div>
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
          </span>
        </div>
        <div className="col-6 p-2 game-result-right">
          <span className="w-50 rightside">Ratan Jackpot Result</span>
        </div>
      </div>
      {data.map((item, i) => (
        <div key={item.providerId} className=" py-3 px-3 my-2 border rounded">
          <div className="d-flex primary-color fw-bold justify-content-between align-items-center  ">
            <span className="">
              <i class="fa-solid fa-clock"></i> &nbsp; {item.providerName}
            </span>
            <span>{item.winningDigit}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RichjackpotResultHistory;
