import React from "react";
import { motion } from "framer-motion";
import profilePic from "@assets/ProfilePic.jpg"; // Make sure this path is correct relative to your file structure
import {
  FaReact,
  FaCode,
  FaNodeJs, // Updated icon for Node.js
  FaDatabase,
  FaChartLine, // Icon for Data Analysis/Visualization
  FaPython, // Icon for Python/ML
} from "react-icons/fa"; // Main Font Awesome icons
import { SiTableau, SiScikitlearn } from "react-icons/si"; // Simple Icons for specific tech

const About = () => {
  // Define skill cards data including new data science skills
  const skillsData = [
    {
      icon: <FaReact className="text-blue-400 text-5xl sm:text-6xl mb-4" />,
      title: "Frontend Development",
      description:
        "Building modern, responsive, and high-performance web UIs using React, JavaScript, and Tailwind CSS.",
    },
    {
      icon: <FaNodeJs className="text-green-500 text-5xl sm:text-6xl mb-4" />,
      title: "Backend Development",
      description:
        "Crafting robust and scalable server-side applications and RESTful APIs using Node.js, Express.js, and MongoDB.",
    },
    {
      icon: <FaPython className="text-yellow-500 text-5xl sm:text-6xl mb-4" />,
      title: "Python for Data Science",
      description:
        "Utilizing Python with libraries like Pandas and NumPy for data manipulation, cleaning, and preparation.",
    },
    {
      icon: <FaChartLine className="text-orange-500 text-5xl sm:text-6xl mb-4" />,
      title: "Data Analysis & Visualization",
      description:
        "Analyzing data to uncover trends and insights. Creating interactive dashboards and reports using Tableau and Python (Seaborn, Plotly).",
    },
    {
      icon: <SiScikitlearn className="text-blue-500 text-5xl sm:text-6xl mb-4" />, // Specific icon for Scikit-learn
      title: "Machine Learning & Forecasting",
      description:
        "Applying ML models (e.g., RandomForest with Scikit-learn) for predictive tasks like demand and sales forecasting.",
    },
    {
      icon: <FaDatabase className="text-purple-400 text-5xl sm:text-6xl mb-4" />,
      title: "Database Management",
      description:
        "Working with NoSQL databases like MongoDB for efficient data storage and retrieval in web applications.",
    },
  ];

  return (
    <section id="about" className="relative flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0d37] to-[#0d1224] text-white">
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold mb-12 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-[#1b1e36] px-6 sm:px-8 py-3 rounded-lg shadow-lg border border-purple-500">
          About Me
        </span>
      </motion.h2>

      {/* Profile Image */}
      <motion.div
        className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg border-4 border-purple-500 mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={profilePic} alt="Rajat P Rao" className="w-full h-full object-cover" />
      </motion.div>

      {/* Introduction */}
      <motion.p
        className="text-base sm:text-lg text-gray-300 max-w-3xl text-center mb-12 sm:mb-16 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
       Hi, I'm <span className="text-purple-400 font-semibold">Rajat P Rao</span>, a developer skilled in both <span className="text-purple-400 font-semibold">Full-Stack Web Development</span> and <span className="text-purple-400 font-semibold">Data Science</span>. I build scalable web applications using technologies like <span className="text-purple-400">React, Node.js, and MongoDB</span>, and leverage tools like <span className="text-purple-400">Python, Pandas, Scikit-learn, and Tableau</span> to analyze data, build predictive models, and create insightful visualizations. I enjoy crafting clean, maintainable code for impactful, data-driven solutions.
      </motion.p>

      {/* What I Do Section Title */}
      <motion.h3 // Changed to h3 for better semantic structure
        className="text-2xl sm:text-3xl font-bold mb-10 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        What I Do
      </motion.h3>

      {/* Skills & Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-[#161b33] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border border-transparent hover:border-purple-600 h-full" // Added h-full for consistent height
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
          >
            <div className="mb-4">{skill.icon}</div> {/* Ensure icon is wrapped if needed */}
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{skill.title}</h4>
            <p className="text-sm sm:text-base text-gray-300 flex-grow">{skill.description}</p> {/* flex-grow to push description */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;