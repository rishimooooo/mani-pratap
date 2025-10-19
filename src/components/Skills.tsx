"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Monitor,
  Server,
  Settings,
  Code2,
  Palette,
  Layers,
  Database,
  Globe,
  Cloud,
  Container,
  Gift,
  Terminal,
  Cpu,
  Zap,
  Search,
  TestTube,
  Wrench,
  Figma,
  PenTool,
} from "lucide-react";

const Skills = ({ glow }: { glow: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const { scrollY } = useScroll();
  const yPattern = useTransform(scrollY, [0, 400], [0, 30]); // subtle bg movement

  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: [
        { name: "React", level: 95, icon: Code2 },
        { name: "TypeScript", level: 90, icon: Code2 },
        { name: "Javascript", level: 85, icon: Code2 },
        { name: "Next.js", level: 88, icon: Layers },
        { name: "Tailwind CSS", level: 92, icon: Palette },
        { name: "HTML5/CSS3", level: 95, icon: Palette },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 90, icon: Server },
        { name: "Express.js", level: 88, icon: Server },
        { name: "EJS", level: 85, icon: Code2 },
        { name: "PostgreSQL", level: 87, icon: Database },
        { name: "MongoDB", level: 82, icon: Database },
        { name: "REST APIs", level: 93, icon: Globe },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      skills: [
        { name: "AWS", level: 80, icon: Cloud },
        { name: "Docker", level: 85, icon: Container },
        { name: "Git", level: 95, icon: Gift },
        { name: "CI/CD", level: 78, icon: Settings },
        { name: "Linux", level: 82, icon: Terminal },
        { name: "Nginx", level: 75, icon: Server },
        { name: "Jenkins", level: 80, icon: Settings },
        { name: "Azure", level: 80, icon: Cloud },
      ],
    },
  ];

  const additionalTechnologies = [
    { name: "GraphQL", icon: Globe },
    { name: "Redis", icon: Database },
    { name: "Elasticsearch", icon: Search },
    { name: "Kubernetes", icon: Container },
    { name: "Terraform", icon: Cloud },
    { name: "Jest", icon: TestTube },
    { name: "Cypress", icon: TestTube },
    { name: "Webpack", icon: Wrench },
    { name: "Vite", icon: Zap },
    { name: "Figma", icon: Figma },
    { name: "Adobe XD", icon: PenTool },
  ];

  return (
    <section
      ref={ref}
      className={`relative section-padding overflow-hidden bg-[#050505] text-gray-300`}
    >
      {/* subtle moving background grid */}
      <motion.div
        style={{ y: yPattern }}
        className="absolute inset-0 bg-[radial-gradient(rgba(128,128,128,0.1)_1px,transparent_1px)] bg-[length:22px_22px] opacity-10 pointer-events-none"
      />

      {/* subtle glow blobs */}
      {glow && (
        <>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-gray-500/20 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gray-500/10 blur-[150px] rounded-full"
          />
        </>
      )}

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-300">
            Technical <span className="text-gray-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gray-500 mx-auto rounded-full animate-pulse" />
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 25px 5px rgba(128,128,128,0.4)",
                }}
                className="bg-gray-900/80 border border-gray-600 rounded-2xl p-6 shadow-sm hover:shadow-[0_0_25px_5px] hover:shadow-gray-400 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-6">
                  <CategoryIcon className="w-8 h-8 text-gray-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-200">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2 text-gray-300">
                          <div className="flex items-center">
                            <SkillIcon className="w-4 h-4 text-gray-400 mr-2" />
                            <span>{skill.name}</span>
                          </div>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700/20 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={
                              isInView ? { width: `${skill.level}%` } : {}
                            }
                            transition={{
                              duration: 1.2,
                              delay: skillIdx * 0.1,
                            }}
                            className="bg-gradient-to-r from-gray-400 to-gray-500 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-300 mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTechnologies.map((tech, idx) => {
              const TechIcon = tech.icon;
              return (
                <span
                  key={tech.name}
                  className="px-3 py-1 bg-gray-800/60 text-gray-300 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-gray-700 hover:text-white transition-all duration-300"
                >
                  <TechIcon className="w-4 h-4 text-gray-400" />
                  <span>{tech.name}</span>
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
