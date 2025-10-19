"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen w-full bg-[#050505] text-white px-6 md:px-20 overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-800/20 blur-[120px] pointer-events-none z-0" />

      {/* Floating Dots (Stars) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Left: Profile Image */}
      <motion.div
        className="flex justify-center md:w-1/2 mb-10 md:mb-0 relative z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/mani.jpeg"
          alt="Mani Pratap"
          className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/10 shadow-lg"
        />
      </motion.div>

      {/* Right: Text + Buttons */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-5 z-10 md:ml-20"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-300"
          whileHover={{ scale: 1.03, color: "#c8c8c8" }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Mani Pratap
        </motion.h1>

        {/* Role */}
        <motion.h2
          className="text-lg md:text-2xl text-gray-400 font-light max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Full Stack Developer & Creative Technologist
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white/10 text-gray-300 font-semibold flex items-center gap-2 
                       hover:scale-105 hover:text-gray-400 hover:shadow-[0_0_15px_rgba(200,200,200,0.5)] 
                       transition-all duration-300"
          >
            <Code size={18} /> View My Code
          </a>

          {/* Social Icons */}
          {[
            { icon: Github, href: "https://github.com/manipratap2" },
            { icon: Linkedin, href: "https://linkedin.com/in/manipratap" },
            { icon: Mail, href: "mailto:mannipratap@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 rounded-full text-gray-300 
                         hover:text-gray-400 hover:scale-110 hover:shadow-[0_0_10px_rgba(200,200,200,0.5)] 
                         transition-all duration-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
