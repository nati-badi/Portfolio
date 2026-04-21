/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ThreeScene from "./components/ThreeScene";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-ui-bg">
      {/* Background Layer */}
      <ThreeScene />

      {/* Nav */}
      <Navbar />
      
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Main Content Area */}
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      {/* Subtle Film Grain */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03]">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>
    </div>
  );
}
