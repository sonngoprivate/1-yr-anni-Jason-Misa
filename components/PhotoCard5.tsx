"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const PhotoCard5 = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-center p-10">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        width={300}
        height={533}
        src="/Misa5.gif"
        alt="Misa5"
      />
      <div className="px-0 md:px-10">
        <h4>🚀🎉💖</h4>
      </div>
    </article>
  );
};

export default PhotoCard5;
