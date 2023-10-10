"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundHeart = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 3, 2, 1],
        opacity: [0.1, 0.2, 0.8, 1.0],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-red-500 rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-red-500 rounded-full h-[400px] w-[400px] mt-52 animate-ping " />
      <div className="absolute border border-pink-700 rounded-full opacity-20 h-[850px] w-[850px] mt-52 animate-pulse " />
    </motion.div>
  );
};

export default BackgroundHeart;
