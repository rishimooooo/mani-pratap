import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Monitor, Headphones } from "lucide-react";

const PersonalTouch = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const workspaceImages = [
    {
      id: 1,
      title: "Main Setup",
      description:
        "Raised Laptop setup with mechanical keyboard and Wireless Mouse",
      image: "/images/Room.jpeg",
    },
    {
      id: 2,
      title: "Evening Vibes In Workspace",
      description: "Only GO-TO place when I need peace and focus",
      image: "/images/Room2.jpeg",
    },
  ];

  const techStack = [
    { name: "Apple Macbook M2 Pro", icon: Monitor },
    { name: "Sony Headphone", icon: Headphones },
  ];

  return (
    <section
      ref={ref}
      className="section-padding bg-black text-white min-h-screen"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6">
            Personal <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get to know me beyond the code – my workspace, tech, and little
            inspirations that drive me.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Workspace Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20 grid lg:grid-cols-2 gap-8"
        >
          {/* Workspace Images */}
          <div className="space-y-6">
            {workspaceImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                className="relative overflow-hidden rounded-xl h-64"
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                    const placeholder = (e.target as HTMLElement)
                      .nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = "flex";
                  }}
                />
                {/* Placeholder */}
                <div
                  className="absolute inset-0 bg-gray-800/70 flex flex-col items-center justify-center text-center p-4 rounded-xl"
                  style={{ display: "none" }}
                >
                  <Camera className="w-12 h-12 mb-2 text-orange-400" />
                  <p className="font-medium text-white">{image.title}</p>
                  <p className="text-sm text-gray-300">{image.description}</p>
                  <p className="text-xs text-red-500 mt-2">Image not found</p>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h4 className="font-bold text-lg text-orange-400">
                      {image.title}
                    </h4>
                    <p className="text-sm text-gray-300">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg"
          >
            <h4 className="text-2xl font-bold text-orange-400 mb-6">
              My Tech Stack
            </h4>
            <div className="space-y-4">
              {techStack.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6 text-orange-400" />
                    <span className="text-white font-medium">{item.name}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-orange-400 mb-2">
                Work Philosophy
              </h5>
              <p className="text-sm text-gray-300">
                Discipline beats motivation when motivation fades.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalTouch;
