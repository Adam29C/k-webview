import React from "react";
import { motion } from "motion/react";
const Headline = () => {
  return (
    <div className="w-100 overflow-hidden bg-gray-900 text-danger border border-bottom position-fixed">
      <motion.h6
        className="font-bold "
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        This is a Moving Headline
      </motion.h6>
    </div>
  );
};

export default Headline;
