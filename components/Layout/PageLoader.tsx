import React from "react";
import { motion } from "framer-motion";
function PageLoader() {
  return (
    <motion.div
      key={"loader"}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      className={"w-screen h-screen overflow-hidden"}
    >
      <motion.div
        initial={{
          x: "0%",
        }}
        animate={{
          x: "100%",
        }}
        transition={{
          type: "tween",
        }}
        className="w-full bg-black h-full"
      />
    </motion.div>
  );
}

export default PageLoader;
