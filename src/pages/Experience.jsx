import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/utils/data/workExperience";

const Experience = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-16">
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold text-white relative mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-[#1b1e36] px-6 py-2 rounded-lg shadow-lg border border-purple-500">
          Experience
        </span>
      </motion.h2>

      {/* Experience Timeline */}
      <motion.div
        className="flex flex-col w-full max-w-3xl space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
      >
        {experiencesData.map((exp, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col bg-[#161b33] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border hover:animate-pulseBorder border-transparent  hover:border-purple-500"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
            <p className="text-purple-400 text-sm">{exp.company}</p>
            <p className="text-gray-400 text-xs mb-2">{exp.year}</p>
            <p className="text-gray-300 text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;