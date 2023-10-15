"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundHeart from "./BackgroundHeart";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "I Love you so much 🥰💋😍💖",
      "💞365 days💞",
      "💓10/11/2022 👩‍❤️‍💋‍👨10/11/2023💓",
    ],
    loop: true,
    delaySpeed: 1500,
    deleteSpeed: 40,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundHeart />
      <Image
        className="relative rounded-full h-52 w-52 mx-auto object-cover"
        src="/Misa6.PNG"
        width={200}
        height={200}
        alt="Misa and Jason"
      />
      <div className="z-20">
        <h2 className="text-sm text-cyan-500 uppercase pb-2  tracking-[15px] font-bold">
          Misa 💙 Jason
        </h2>
        <h1 className="font-mono font-bold text-5xl lg:text-6xl px-10">
          <span>{text}</span>
        </h1>
        <div className="pt-5 space-x-4">
          <Link href="#about">
            <button className="heroButton">Love</button>
          </Link>
          <Link href="#photos">
            <button className="heroButton">Photos</button>
          </Link>
          <Link href="#anni2023">
            <button className="heroButton">Anni2023</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
