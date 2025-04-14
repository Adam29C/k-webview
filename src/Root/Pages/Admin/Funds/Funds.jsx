import React from "react";
import Add_Fund from "../../../../assets/svgs/Add_Fund.svg";
import { Data } from "./data";

const Passbook = () => {
  return (
    <div>
      <div class="profile-wrapper">
        <div className="row">
          <div className="col-12">
            {Data.map((item) => {
              return (
                <>
                  <div class="card  rounded-4 mt-3">
                    <div class="card-inside d-flex justify-content-between align-items-center">
                      <div className="d-flex justisfy-content-between align-items-center ">
                        <i class={`icon-size mx-4 ms-1  ${item.icon}`}></i>
                        <div className="d-flex  flex-column">
                          <span class="fw-bold text-sm text-left">
                            {item.name}
                          </span>
                          <p class="card-text ">{item.description}</p>
                        </div>
                      </div>
                      <div className=" d-flex justify-content-center align-items-center bgr">
                        <i class="fa-solid fa-chevron-right "></i>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passbook;
