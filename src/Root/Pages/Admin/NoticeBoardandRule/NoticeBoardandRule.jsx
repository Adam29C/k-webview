import React, { useEffect, useState } from "react";
import "../../../../assets/css/noticeboard.css";
import { FOR_GET_LIST } from "../../../Service/commanservice";
import { apiRoutes } from "../../../Config/endpoints";
import NastedLayout from "../../../Containers/NastedLayout";

function NoticeBoardandRule() {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    try {
      const res = await FOR_GET_LIST(`${apiRoutes.GET_NOTICE_BOARD}`);
      if (res) {
        if (res.status == true) {
          setdata(res?.data[0]);
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
  // console.log(data);
  const desc1 = data.description1;
  const desc2 = data.description2;
  const desc3 = data.description3;
  return (
    <NastedLayout title={"GAMTRATES"} route={"/home"}>
      {/* <div class="noticecontainer"> */}
        <h1 class="noticeheading">{data.title1}</h1>
        <ul class="noticelist">
          <li
            class="noticelist-item"
            dangerouslySetInnerHTML={{ __html: desc1 }}
          ></li>
          {/* <li class="noticelist-item">
            👍Before requesting withdraw re check your details.
          </li>
          <li class="noticelist-item">
            👍After withdraw request if there is no valid wallet balance the
            request with be auto decline.
          </li> */}
        </ul>
        <div className="divider" />
        <h1 class="noticeheading">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="500" // Width of the SVG
              height="500" // Height of the SVG
              viewBox="0 0 256 256"
              xmlSpace="preserve"
              className="custom-svg" // Added className for styling
            >
              <g
                style={{
                  stroke: "none",
                  strokeWidth: 0,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "none",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 76.735 13.079 C 68.315 4.649 57.117 0.005 45.187 0 C 20.605 0 0.599 20.005 0.589 44.594 c -0.003 7.86 2.05 15.532 5.953 22.296 L 0.215 90 l 23.642 -6.202 c 6.514 3.553 13.848 5.426 21.312 5.428 h 0.018 c 0.001 0 -0.001 0 0 0 c 24.579 0 44.587 -20.007 44.597 -44.597 C 89.789 32.713 85.155 21.509 76.735 13.079 z M 27.076 46.217 c -0.557 -0.744 -4.55 -6.042 -4.55 -11.527 c 0 -5.485 2.879 -8.181 3.9 -9.296 c 1.021 -1.115 2.229 -1.394 2.972 -1.394 s 1.487 0.007 2.136 0.039 c 0.684 0.035 1.603 -0.26 2.507 1.913 c 0.929 2.231 3.157 7.717 3.436 8.274 c 0.279 0.558 0.464 1.208 0.093 1.952 c -0.371 0.743 -0.557 1.208 -1.114 1.859 c -0.557 0.651 -1.17 1.453 -1.672 1.952 c -0.558 0.556 -1.139 1.159 -0.489 2.274 c 0.65 1.116 2.886 4.765 6.199 7.72 c 4.256 3.797 7.847 4.973 8.961 5.531 c 1.114 0.558 1.764 0.465 2.414 -0.279 c 0.65 -0.744 2.786 -3.254 3.529 -4.369 c 0.743 -1.115 1.486 -0.929 2.507 -0.558 c 1.022 0.372 6.5 3.068 7.614 3.625 c 1.114 0.558 1.857 0.837 2.136 1.302 c 0.279 0.465 0.279 2.696 -0.65 5.299 c -0.929 2.603 -5.381 4.979 -7.522 5.298 c -1.92 0.287 -4.349 0.407 -7.019 -0.442 c -1.618 -0.513 -3.694 -1.199 -6.353 -2.347 C 34.934 58.216 27.634 46.961 27.076 46.217 z"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "#237f8a", // Updated color
                    fillRule: "evenodd",
                    opacity: 1,
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
              </g>
            </svg>
          </span>
          9999999999
        </h1>
        <div className="divider" />
        <h1 class="noticeheading">{data.title2}</h1>
        <ul class="noticelist">
          <li
            class="noticelist-item2"
            dangerouslySetInnerHTML={{ __html: desc2 }}
          ></li>
        </ul>
        <div className="divider" />
        <h1 class="noticeheading">{data.title3}</h1>
        <ul class="noticelist">
          <li
            class="noticelist-item2"
            dangerouslySetInnerHTML={{ __html: desc3 }}
          ></li>
        </ul>
      {/* </div> */}
    </NastedLayout>
  );
}
export default NoticeBoardandRule;
