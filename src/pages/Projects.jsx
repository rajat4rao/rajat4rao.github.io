import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { Globe } from "lucide-react";
import PreviewProject1 from "@assets/PreviewProject1.png";
import  PreviewProject2 from "@assets/PreviewProject2.png";
import  PreviewProject3 from "@assets/PreviewProject3.png";
import  DataScienceP from "@assets/DataScience.jpg";

// Define Project Data
const projects = [
  {
    title: "Kaun Banega Techpati",
    description:
      "A full-stack web application designed for tech enthusiasts to test and improve their knowledge in areas like Linux, Bash, Docker, Kubernetes, various programming languages, and general coding concepts",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Multer", "Tailwind CSS"],
    image: PreviewProject1,
    liveDemo: "https://kaun-banega-techpati.netlify.app/",
    sourceCode: "https://github.com/rajat4rao/kaun-banega-techpati",
  },
  {
    title: "ChalChitra",
    description:
      "ChalChitra is a full-stack application designed for discovering movies and TV shows. Users can explore trending content, search for specific titles, manage their personalized lists, and get AI-powered recommendations.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Multer", "Tailwind CSS","Groq AI API"],
    image:
    PreviewProject2,
      liveDemo: "https://chalchitra1.netlify.app/",
    sourceCode: "https://github.com/rajat4rao/chalchitra",
  },
  {
    title: "RentnRide",
    description:
      "A comprehensive car rental platform designed for both users and hosts. RentnRide offers a seamless and user-friendly experience for booking rental cars, managing listings, and connecting car owners with renters",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Multer", "Tailwind CSS","Stripe"],
    image:
    PreviewProject3,
    sourceCode: "https://github.com/rajat4rao/vehiclerental",
  },

  {
    title: "Sales Forecasting to Optimize Retail Supply Chain",
    description:
      "Developed a machine learning model (Random Forest) using Python (Pandas, Scikit-learn) to predict weekly retail sales. Focused on optimizing supply chain operations by improving inventory management and identifying key sales drivers from historical data.", // Updated Description
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Random Forest", "Plotly", "Seaborn", "Git"], 
    image: DataScienceP,
    sourceCode: "https://github.com/rajat4rao/sales-forecast-optimize-supply",
  },
  {
    title: "Food Demand Analysis for Inventory Optimization", 
    description:
      "Analyzed historical food demand for a meal delivery service using Tableau. Created interactive dashboards and a data story to visualize demand patterns, identify key trends, and provide insights for optimizing perishable inventory management and fulfillment center staffing.", // Updated Description
    techStack: ["Tableau", "Data Analysis", "Data Visualization", "Demand Forecasting", "CSV", "Git"], 
    image: DataScienceP, 
    sourceCode: "https://github.com/rajat4rao/food-demand-inventory-opt",
  },

];

const Projects = () => {
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
          Projects
        </span>
      </motion.h2>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
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
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md bg-[#161b33] hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-purple-500"
            whileHover={{ scale: 1.02 }}
          >
            {/* Project Image */}
            <div className="relative w-full h-52">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-purple-700 to-purple-500 text-white rounded-full text-xs shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons - Only show if liveDemo or sourceCode exists */}
              <div className="flex gap-4 mt-6">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-500 transition"
                  >
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-500 transition"
                  >
                    <FaGithub className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;