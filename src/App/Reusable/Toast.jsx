import React from "react";
import { Toaster } from "react-hot-toast";

const Toast = ({ position }) => {
  return (
    <div>
      <Toaster
        position={position ? position : "bottom-center"}
        reverseOrder={false}
      />
    </div>
  );
};

export default Toast;
