"use client";
import React from "react";
import { motion } from "framer-motion";
import PhotoCard1 from "./PhotoCard1";
import PhotoCard2 from "./PhotoCard2";
import PhotoCard3 from "./PhotoCard3";
import PhotoCard4 from "./PhotoCard4";
import PhotoCard5 from "./PhotoCard5";
import PhotoCard6 from "./PhotoCard6";

type Props = {};

const Photos = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute mb-8 top-16 uppercase tracking-[10px] text-2xl md:text-6xl text-red-500 font-semibold ">
        🥰💋😍Photos👄👩‍❤️‍💋‍👨💦
      </h3>
      <div className="w-[400px] h-[700px] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <PhotoCard1 />
        <PhotoCard2 />
        <PhotoCard3 />
        <PhotoCard4 />
        <PhotoCard5 />
        <PhotoCard6 />
      </div>
    </motion.div>
  );
};

export default Photos;
