import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sliders } from "react-feather";

function TextSlider() {
  const [ActiveTextIndex, setActiveTextIndex] = useState(0);

  const TextSlides = [
    // IMPORT CITY FROM CITY DATA OBJ
    {
      city: "Berlin",
      lang: "Python",
    },
    {
      city: "New York City",
      lang: "Java",
    },
    {
      city: "Los Angeles",
      lang: "Python",
    },
    {
      city: "Amsterdam",
      lang: "C#",
    },
    {
      city: "London",
      lang: "C++",
    },
    {
      city: "Paris",
      lang: "Javascript",
    },
    {
      city: "Rom",
      lang: "Typescript",
    },
    {
      city: "Delhi",
      lang: "C",
    },
    {
      city: "Vienna",
      lang: "Rust",
    },
  ];

  useEffect(() => {
    handleActiveTextIndex();
    return () => {
      handleActiveTextIndex();
    };
  }, []);

  function handleActiveTextIndex() {
    let i = 0;
    setInterval(() => {
      i = i + 1;
      if (i >= TextSlides.length) {
        i = 0;
        setActiveTextIndex(i);
      }
      setActiveTextIndex(i);
    }, 3000);
  }

  return (
    <div className="max-h-10 overflow-hidden flex items-center">
      <ul className="flex flex-col justify-start">
        {TextSlides.map((slideItem, index) =>
          ActiveTextIndex === index ? (
            <motion.li
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="text-gray-400 py-4 mr-2"
              key={`${Sliders}${index}`}
            >
              {slideItem.city}
            </motion.li>
          ) : null
        )}
      </ul>
      <ul className="flex flex-col justify-start">
        {TextSlides.map((slideItem, index) =>
          ActiveTextIndex === index ? (
            <motion.li
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="text-brand-green-100 py-4"
              key={index}
            >
              {slideItem.lang}
            </motion.li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default TextSlider;
