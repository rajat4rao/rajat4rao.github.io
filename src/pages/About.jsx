import React from "react";
import { motion } from "framer-motion";
import profilePic from "@assets/ProfilePic.jpg";
import { FaReact, FaCode, FaLaptopCode, FaDesktop, FaDatabase, FaNode } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-16">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-extrabold text-white mb-12 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-[#1b1e36] px-8 py-3 rounded-lg shadow-lg border border-purple-500">
          About Me
        </span>
      </motion.h2>

      {/* Profile Image */}
      <motion.div
        className="relative w-52 h-52 rounded-full overflow-hidden shadow-lg border-4 border-purple-500 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={profilePic} alt="Rajat P Rao" className="w-full h-full object-cover" />
      </motion.div>

      {/* Introduction */}
      <motion.p
        className="text-lg text-gray-300 max-w-3xl text-center mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-purple-400 font-semibold">Rajat P Rao</span>, a passionate{" "}
        <span className="text-purple-400 font-semibold">Full-Stack Developer</span> specializing in{" "}
        <span className="text-purple-400">Node.JS, Express.JS, MongoDB, React and SQL</span>. I love designing and building
        scalable applications with clean, maintainable code. My focus is on creating high-performance
        software that seamlessly integrates both front-end and back-end technologies.
      </motion.p>

      {/* What I Do Section */}
      <motion.h2
        className="text-3xl font-bold text-white mb-8 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        What I Do
      </motion.h2>

      {/* Skills & Highlights */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {[
          {
            icon: <FaReact className="text-blue-500 text-6xl mb-4" />,
            title: "React & Frontend Development",
            description:
              "Building modern, high-performance web applications using React, and Tailwind CSS.",
          },
          {
            icon: <FaNode className="text-purple-500 text-6xl mb-4" />,
            title: "Node.js & Express.js Backend",
            description:
              "Proficient in building robust and scalable server-side applications using Node.js with Express.js framework",
          },
          {
            icon: <FaCode className="text-green-500 text-6xl mb-4" />,
            title: "Backend & API Development",
            description:
              "Building efficient and scalable RESTful APIs using Node.js, Express.js, and MongoDB for MERN applications.",
          },
          {
            icon: <FaDatabase className="text-yellow-500 text-6xl mb-4" />,
            title: "Database & System Architecture",
            description:
              "Optimizing MongoDB, designing scalable NoSQL databases, and implementing efficient data management strategies for MERN stack applications.",
          },
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 bg-[#161b33] rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 border border-transparent hover:border-purple-500"
            whileHover={{ scale: 1.05 }}
          >
            {skill.icon}
            <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
            <p className="text-gray-300 mt-2 text-center">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;