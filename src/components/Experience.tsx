"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const Experience = ({ glow }: { glow: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const { scrollY } = useScroll();
  const yPattern = useTransform(scrollY, [0, 400], [0, 40]);

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "PerigonAi",
      location: "Bengaluru, Karnataka",
      period: "August 2024 - Present",
      description: [
        "Developed and maintained scalable web applications using React.js and React Native.",
        "Built optimized UI components and integrated REST APIs.",
        "Collaborated with cross-functional teams for seamless solutions.",
      ],
      technologies: [
        "AWS",
        "Node.js",
        "Docker",
        "React.js",
        "TypeScript",
        "Git",
      ],
    },
    {
      title: "Application Development Senior Analyst",
      company: "Accenture India",
      location: "Bengaluru, Karnataka",
      period: "Jan 2023 - Mar 2024",
      description: [
        "Developed web & mobile apps with React.js and React Native.",
        "Integrated APIs & third-party libraries.",
        "Worked in cross-functional teams for scalable solutions.",
      ],
      technologies: [
        "REST APIs",
        "Azure",
        "Solidjs",
        "SignalR",
        "Javascript",
        "React.js",
      ],
    },
    {
      title: "Consultant",
      company: "HCL Technologies",
      location: "Bengaluru, Karnataka",
      period: "Jul 2021 - Jan 2023",
      description: [
        "Built web & mobile apps with React.js, React Native, TypeScript.",
        "Optimized UI components for top German bank.",
        "Integrated APIs & managed state efficiently.",
      ],
      technologies: ["Node.js", "GraphQL", "MobX", "Redux", "React Native"],
    },
    {
      title: "Associate Software Engineer",
      company: "Hewlett Packard Enterprise",
      location: "Full-Time",
      period: "Apr 2019 - Jul 2021",
      description: [
        "Reviewed AI-generated websites produced by LLMs, improving UI/UX.",
        "Rebuilt frontend components using React.js & Next.js.",
        "Conducted peer code reviews and usability audits.",
      ],
      technologies: [
        "React.js",
        "TailwindCSS",
        "Next.js",
        "Javascript",
        "Typescript",
        "HTML",
        "CSS",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden section-padding bg-[#050505] text-gray-300`}
    >
      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-gray-400 rounded-full"
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

      {/* Glow Effects */}
      {glow && (
        <>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-gray-500/20 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gray-500/10 blur-[150px] rounded-full"
          />
        </>
      )}

      {/* Grid overlay movement */}
      <motion.div
        style={{ y: yPattern }}
        className="absolute inset-0 bg-[radial-gradient(rgba(128,128,128,0.1)_1px,transparent_1px)] 
                   bg-[length:22px_22px] opacity-10 pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-300">
            Work <span className="italic text-gray-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gray-500 mx-auto rounded-full animate-pulse"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600/50 rounded-full"></div>

          {/* Timeline cards */}
          <div className="flex flex-col space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-400 border-4 border-black rounded-full shadow-md z-20"></div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:pr-10 md:mr-auto"
                      : "md:pl-10 md:ml-auto"
                  }`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      y: -5,
                      boxShadow: "0 0 25px 5px rgba(128,128,128,0.4)",
                    }}
                    className="bg-gray-900/80 text-gray-300 backdrop-blur-lg p-6 rounded-2xl border border-gray-600/40 shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-1 text-gray-200">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-medium mb-3 text-gray-400">
                      {exp.company}
                    </h4>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} /> {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4 text-gray-400 text-sm leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gray-400 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700/20 text-gray-300 border border-gray-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
