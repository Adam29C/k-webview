import React, { useEffect, useState } from "react";
import "../../../../assets/css/howtoplay.css";
import { FOR_GET_LIST } from "../../../Service/commanservice";
import { apiRoutes } from "../../../Config/endpoints";
function HowToPlay() {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_HOW_TO_PLAY}`);
      if (res) {
        if (res.status == true) {
          setdata(res?.data);
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
      <div className="how-to-play-container">
        <h2 className="how-to-play-instructions-title">{data[0]?.title}</h2>
        <div className="how-to-play-instructions">
          <ol className="how-to-play-list">
            <li className="how-to-play-list-item">{data[0]?.description}</li>
            {/* <li className="how-to-play-list-item">
              आम धारणा के विपरीत Lorem Ipsum बस यादृच्छिक (random) पाठ नहीं है.
            </li> */}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
