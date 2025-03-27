import React from "react";
import { GitFork } from "lucide-react";
import { IoStar } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="relative border-t border-[#353951] bg-[#0d1224] text-white">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

      {/* Footer Content */}
      <div className="mx-auto max-w-[92rem] px-3 py-3 sm:px-12 lg:py-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright Text */}
          <p className="text-sm text-gray-400">
            © Portfolio by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rajat-p-rao-b09365140/"
              className="text-[#16f2b3] hover:underline"
            >
              Rajat P Rao
            </a>
          </p>


        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Link Component
const FooterLink = ({ href, icon, text }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="flex items-center gap-2 text-sm uppercase text-gray-400 transition-colors hover:text-[#16f2b3]"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default Footer;