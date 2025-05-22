import React from "react";
import Main_Containers from "../../../Containers/Main_Containers";
import infinit from "../../../../assets/img/infinit.svg";


function Charts() {
  return (
    <div className="mt-3">
      <Main_Containers>
        <div class=" d-flex align-items-center ">
          <img
            src={infinit}
            alt="https://khatri555.com/"
            class="mx-2 img-hover-rotate "
          />
          <h4 class="mx-4">
            <a
              class="text-decoration-none primary-color"
              href="/jodi-chart/indramorning/jodi-chart"
            >
              INDRA MORNING
            </a>
          </h4>
        </div>
      </Main_Containers>
    </div>
  );
}

export default Charts;
