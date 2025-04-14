import React from "react";
import ThirdContainer from "../Containers/Third-Container";

const ContactDetails = () => {
  return (
    <ThirdContainer>
      <div className="row  d-flex justify-content-around px-2 py-2">
        <div className="col-5  tab-container  py-2 ">
          <i class="fa-brands fa-whatsapp "></i>
          &nbsp; 9057877555
        </div>
        <div className="col-5  tab-container py-2 ">
          <i class="fa-solid fa-phone"></i>
          &nbsp; 9057877555
        </div>
      </div>
    </ThirdContainer>
  );
};

export default ContactDetails;
