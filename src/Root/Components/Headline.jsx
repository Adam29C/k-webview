import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FOR_GET_LIST } from "../Service/commanservice";
import { apiRoutes } from "../Config/endpoints";
import "../../assets/css/marque.css";
const Headline = () => {
  const [headline, setheadline] = useState("");
  const getdata = async () => {
    try {
      const res = await FOR_GET_LIST(apiRoutes.GET_HEADLINE);
      setheadline(res.data.headline);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    // <div className="w-100 overflow-hidden bg-gray-900 text-danger border border-bottom position-fixed">
    //   <motion.h6
    //     className="font-bold"
    //     initial={{ x: "100%" }}
    //     animate={{ x: "-100%" }}
    //     transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
    //   >
    //    {headline}
    //   </motion.h6>
    // </div>
    <div className="marquee-container">
      <div className="marquee-content">{headline}</div>
    </div>
  );
};

export default Headline;
