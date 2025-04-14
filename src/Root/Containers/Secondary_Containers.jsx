import React from "react";

const Secondary_Containers = ({ children }) => {
  return (
    <div>
      <section className="main-container my-3">
        <div className="row gy-3 gx-0">
          <div className="col-12">{children}</div>
          {/* <div className="col-6 border border-dark">left</div>
          <div className="col-6 border border-primary">left</div> */}
        </div>
      </section>
    </div>
  );
};

export default Secondary_Containers;
