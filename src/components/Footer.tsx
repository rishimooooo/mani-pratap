import React from "react";
import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/manipratap2", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/manipratap/",
      label: "LinkedIn",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Animated Star Background */}
      <motion.div className="absolute inset-0 z-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing Nebula */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -360, 0] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 relative z-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Code2 className="h-9 w-9 text-gray-400 animate-pulse" />
            <h2 className="text-2xl font-bold text-gray-400">Mani Pratap</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Full Stack Web-Developer passionate about crafting beautiful,
            scalable, and performant apps using modern tools and best practices.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {navLinks.map(({ name, href }) => (
              <motion.li
                key={name}
                whileHover={{
                  x: 6,
                  scale: 1.05,
                  textShadow: "0 0 6px #FFA500",
                }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={href}
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  {name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-400">
            Connect With Me
          </h3>
          <div className="flex space-x-4 mb-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{
                  scale: 1.2,
                  y: -2,
                  boxShadow: "0 0 10px #FFA500",
                }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-900 rounded-xl hover:bg-orange-500 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} className="text-gray-400" />
              </motion.a>
            ))}
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            Feel free to reach out — let’s create something extraordinary
            together!
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Mani Pratap. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <Heart className="text-red-500 w-4 h-4" />
            </motion.div>
            <span>
              and{" "}
              <motion.span
                className="font-bold text-gray-400"
                animate={{
                  textShadow: [
                    "0 0 0px #fff",
                    "0 0 6px #FF69B4",
                    "0 0 0px #fff",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                JavaScript
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
