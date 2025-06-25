"use client";
import React from "react";
import { motion } from "framer-motion";
import { IServiceSection } from "@/types/service";

const ServiceSection = ({data} : {data: IServiceSection[]}) => {
  return (
    <div className="mt-20 px-6 md:px-12 lg:px-20">
      <div className="pb-10">
        <h1 className="text-3xl text-center font-[700]">
          Our Services?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((d, index) => (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              type: "keyframes",
            }}
            className="p-6  rounded-xl shadow-sm"
            key={index}
          >
            <div className="flex items-center mb-3">
              <h1 className="text-2xl font-[700]">{d.title}</h1>
            </div>
            <p className="text-gray-600">{d.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
