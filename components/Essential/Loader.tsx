import React from "react";
import { TailSpin } from "react-loader-spinner";
import { motion } from "framer-motion";
function Loader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className={`left-1/2 top-1/2 absolute z-50 flex justify-center items-center overflow-hidden`}
    >
      <TailSpin height="50" width="50" ariaLabel="loading" />
    </motion.div>
  );
}

export default Loader;
