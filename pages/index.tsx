import type { NextPage } from "next";
import React, {useEffect, useState} from "react";
import TextSlider from "../components/Essential/TextSlider";
import SearchForm from "../components/Essential/SearchForm";
import { motion } from "framer-motion";
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>devdata.app</title>
    </Head>
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
        className="h-[80vh] flex justify-center items-center"
      >
        <div className="container flex flex-col justify-center">
          <h2 className="text-4xl w-4/5 font-display">
            Discover the most used Programming Languages in your City.
          </h2>
          <TextSlider />
          <SearchForm />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
