import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { mySkillsData } from "@/utils/data/skills";

const Skills = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 ">
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold text-white relative mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-[#1b1e36] px-6 py-2 rounded-lg shadow-lg border border-purple-500">
          Skills & Technologies
        </span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="w-full">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          <div className="flex flex-row gap-4">
            {mySkillsData.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#161b33] p-4 w-[150px]  rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-500 cursor-pointer"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <p className="text-white mt-3 text-sm font-semibold">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;