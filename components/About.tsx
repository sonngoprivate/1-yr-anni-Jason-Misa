"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-xl sm:text-2xl md:text-4xl text-red-500 font-semibold ">
        💞💙Love💙💞
      </h3>

      <motion.img
        src="/Misa8.png"
        initial={{ x: +200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="-mb-20 w-[235px] h-[138.5px] md:mb-0 flex-shrink-0 rounded-full md:w-[470px] md:h-[277px] lg:w-[570px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-2xl font-semibold">
          Happy Anniversary Babi
        </h4>
        <p className="text-sm text-pink-900 md:text-lg mx-auto max-w-md px-4">
          Here&#39;s to a year of us - of the smiles, the laughter, and the
          moments that define our story. From that very first smile, you&#39;ve
          filled my days with warmth and my heart with love. Here&#39;s to the
          countless more memories awaiting us. Happy Anniversary, my dearest.
          This site is a testament to our journey, a place where our moments
          together will forever be cherished. I love you. 🚀🎉💖
        </p>
      </div>
    </div>
  );
}

export default About;
