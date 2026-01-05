import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import VoiceControl from "./components/VoiceControl";
import LoadingSpinner from "./components/LoadingSpinner";

import { Analytics } from "@vercel/analytics/react";

// lazy loaded class
const GitHubActivity = React.lazy(() => import("./components/GitHubActivity"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <section id="home">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about">
            <About />
          </section>

          {/* Experience Section */}
          <section id="experience">
            <Experience />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <Skills />
          </section>

          {/* Lazy loaded sections */}
          <Suspense fallback={<LoadingSpinner />}>
            <section id="github-activity">
              <GitHubActivity />
            </section>
          </Suspense>
        </motion.main>

        <Footer />
        <VoiceControl />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
