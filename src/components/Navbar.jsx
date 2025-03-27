import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { Link } from "react-scroll";

const sections = ["home", "about", "experience", "skills", "education", "projects"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showEffect, setShowEffect] = useState(true);
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowEffect(true);

      setTimeout(() => setShowEffect(false), 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update underline position when active section changes
  useEffect(() => {
    const activeItem = document.getElementById(`nav-${activeSection}`);
    if (activeItem) {
      setUnderlineStyle({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
      });
    }
  }, [activeSection]);

  return (
    <div
      className={`sticky top-0 z-50 p-4 flex items-center justify-between transition-all duration-500 backdrop-blur-lg ${
        isScrolled && showEffect ? "shadow-lg shadow-purple-500/40" : "shadow-none"
      } ${showEffect ? "bg-gray-900/50" : "bg-transparent"}`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3 text-2xl font-bold text-purple-400 animate-pulse">

        PORTFOLIO
      </div>

      {/* Navigation Menu */}
      <div className="hidden md:flex flex-row gap-8 relative">
        {sections.map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            offset={-10} // Adjust for navbar height
            duration={500}
            onSetActive={() => setActiveSection(section)}
            className={`relative font-semibold transition-all duration-300 text-white hover:text-purple-400 hover:scale-110 cursor-pointer ${
              activeSection === section ? "text-purple-400" : ""
            }`}
            id={`nav-${section}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}

        {/* Underline Animation */}
        <div
          className="absolute bottom-[-3px] h-[3px] bg-purple-400 rounded-lg transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${underlineStyle.left}px)`,
            width: underlineStyle.width,
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;