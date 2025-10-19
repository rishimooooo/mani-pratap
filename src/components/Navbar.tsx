"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Code2,
  Home,
  User,
  Briefcase,
  Wrench,
  FolderOpen,
  Mail,
} from "lucide-react";

const Navbar = ({ glow }: { glow: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Wrench },
    { name: "GitHub Activity", href: "#github-activity", icon: Code2 },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? `bg-black/95 ${
              glow ? "shadow-[0_0_30px_6px_rgba(251,146,60,0.6)]" : "shadow-lg"
            }`
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Code2
              className={
                scrolled
                  ? "h-8 w-8 text-gray-300 drop-shadow-[0_0_6px_#fff]"
                  : "h-8 w-8 text-white drop-shadow-[0_0_6px_#fff]"
              }
            />
            <span
              className={`font-bold text-xl text-gray-300 ${
                scrolled ? "opacity-90" : "opacity-100"
              }`}
            >
              Mani Pratap
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 font-medium relative text-gray-300 transition-all duration-300"
                >
                  <IconComponent size={18} />
                  <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full">
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? "text-gray-300" : "text-white"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden mt-2 rounded-lg transition-colors duration-300 ${
            scrolled ? "bg-black/95 shadow-lg" : "bg-black/80"
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 w-full text-left px-4 py-2 text-gray-300 hover:underline hover:underline-offset-4 transition-all duration-200"
                >
                  <IconComponent size={18} />
                  <span>{item.name}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
