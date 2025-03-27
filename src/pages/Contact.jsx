import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

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
          Contact Me
        </span>
      </motion.h2>

      {/* Contact Form */}
      <motion.div
        className="w-full max-w-3xl bg-[#161b33] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-purple-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={sendEmail} className="flex flex-col gap-6">
          <motion.input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-[#1f233a] text-white focus:ring-2 focus:ring-purple-400 outline-none transition"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-[#1f233a] text-white focus:ring-2 focus:ring-purple-400 outline-none transition"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            whileFocus={{ scale: 1.05 }}
          />
          <motion.textarea
            placeholder="Your Message"
            className="p-3 rounded-md bg-[#1f233a] text-white h-32 focus:ring-2 focus:ring-purple-400 outline-none transition"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-md text-white font-semibold hover:bg-purple-600 transition duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center mt-6 gap-6">
          <motion.a
            href="https://github.com/rajat4rao"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub className="text-3xl text-purple-400 hover:text-purple-500 transition" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rajat-p-rao-b09365140/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin className="text-3xl text-purple-400 hover:text-purple-500 transition" />
          </motion.a>
          <motion.a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter className="text-3xl text-purple-400 hover:text-purple-500 transition" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;