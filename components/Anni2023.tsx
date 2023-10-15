"use client";
import React from "react";
import { motion } from "framer-motion";
import AnniCard1 from "./AnniCard/AnniCard1";
import AnniCard2 from "./AnniCard/AnniCard2";
import AnniCard3 from "./AnniCard/AnniCard3";
import AnniCard4 from "./AnniCard/AnniCard4 ";
import AnniCard5 from "./AnniCard/AnniCard5";
import AnniCard6 from "./AnniCard/AnniCard6";

type Props = {};

const Anni2023 = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute mb-8 top-16 uppercase tracking-[10px] text-2xl md:text-6xl text-red-500 font-semibold ">
        🥰💋😍Anni 2023👄👩‍❤️‍💋‍👨💦
      </h3>
      <div className="w-[400px] h-[700px] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <AnniCard1 />
        <AnniCard2 />
        <AnniCard3 />
        <AnniCard4 />
        <AnniCard5 />
        <AnniCard6 />
      </div>
    </motion.div>
  );
};

export default Anni2023;
