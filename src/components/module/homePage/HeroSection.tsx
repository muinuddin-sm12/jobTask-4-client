"use client";
import React from "react";
import { motion } from "framer-motion";
import { IHeroSection } from "@/types/hero";

const HeroSection = ({ data }: { data: IHeroSection[] }) => {
  // console.log(data);
  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover w-full bg-center blur-sm"
        style={{ backgroundImage: `url(${data[0]?.backgroundImage})` }}
      ></div>

      {/* Content Layer */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[600px] mx-auto text-center p-8 rounded-xl "
      >
        <h1 className="text-[45px] md:text-6xl font-bold mb-4 leading-10 md:leading-14 tracking-wide">
          {data[0]?.title}
        </h1>
        <p className="text-gray-700 mb-4">{data[0]?.subTitle}</p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
