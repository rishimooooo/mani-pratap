"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const About = ({ glow }: { glow: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const { scrollY } = useScroll();
  const yPattern = useTransform(scrollY, [0, 400], [0, 40]);

  const stats = [
    { label: "Projects Completed", value: "20+" },
    { label: "Years Experience", value: "6+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "GitHub Repositories", value: "50+" },
  ];

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden section-padding transition-all duration-700 bg-[#050505]`}
    >
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

      {glow && (
        <>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-gray-500/20 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-gray-500/10 blur-[120px] rounded-full"
          />
        </>
      )}

      <motion.div
        style={{ y: yPattern }}
        className="absolute inset-0 bg-[radial-gradient(rgba(128,128,128,0.1)_1px,transparent_1px)] 
                   bg-[length:22px_22px] opacity-10 pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-5 text-gray-300 tracking-tight"
        >
          About <span className="italic text-gray-400">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-20 h-[3px] bg-gray-500 mx-auto rounded-full mb-10"
        />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
          className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          {[
            "🚀 Passionate Full Stack Developer",
            "Currently a Senior Software Engineer at PerigonAI with 6+ years of experience designing scalable, modular web solutions using the MERN stack, Next.js, and TypeScript.",
            "Expert in cloud infra (AWS, GCP), CI/CD pipelines, and building AI-integrated apps leveraging LLMs, RAG pipelines, and transformer models.",
            "I believe in building impactful products — sustainable, fast, and reliable — with clarity and creativity.",
          ].map((text, idx) => (
            <motion.p
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className={
                idx === 0
                  ? "text-2xl md:text-3xl font-semibold text-gray-200"
                  : ""
              }
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{
                scale: 1.08,
                y: -4,
                boxShadow: "0 0 25px 5px rgba(128,128,128,0.4)",
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white/5 backdrop-blur-md border border-gray-500/50 rounded-2xl py-6 px-4 text-center hover:border-gray-400/60 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-gray-300 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-400 tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
