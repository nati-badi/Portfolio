import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import InteractiveName3D from "./InteractiveName3D";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 max-w-4xl"
          >
            <div className="h-32 md:h-48 w-full mb-4">
              <Canvas camera={{ position: [0, 0, 5], fov: 35 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
                <InteractiveName3D />
                <Environment preset="city" />
              </Canvas>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-[1px] bg-white/10 w-8 hidden md:block" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-[10px] md:text-[11px] text-ui-muted uppercase tracking-[3px] md:tracking-[6px] font-medium"
              >
                Creative 3D Developer & UI Engineer
              </motion.div>
              <div className="h-[1px] bg-white/10 w-8 hidden md:block" />
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[1.1] mb-10 font-display text-white">
              Designing <span className="text-ui-muted italic font-light">digital</span> <br /> 
              experiences that <span className="text-brand-accent">matter</span>.
            </h1>

            <p className="text-lg md:text-xl font-light text-ui-muted mb-12 max-w-xl mx-auto leading-relaxed">
              Based in Addis Ababa. I build high-performance, visually immersive web experiences with 
              a focus on 3D interaction and minimalist design.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black font-medium text-[13px] tracking-[1px] rounded-full transition-all flex items-center gap-2"
              >
                View selected works <ArrowRight size={16} />
              </motion.a>
              <a
                href="#contact"
                className="text-[13px] font-medium tracking-[1px] text-ui-muted hover:text-white transition-colors"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
          
          {/* Micro-Interactive: Floating Glass Orb */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="relative w-full max-w-lg mt-12 lg:mt-0"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-accent/10 blur-[120px] rounded-full" />
             <motion.div
               animate={{ 
                 y: [0, -20, 0],
                 rotate: [0, 4, 0]
               }}
               transition={{ 
                 duration: 8, 
                 repeat: Infinity,
                 ease: "easeInOut" 
               }}
               className="relative mx-auto w-32 h-32 glass-surface rounded-full flex items-center justify-center p-4 border-white/5 active:scale-95 transition-transform cursor-pointer"
             >
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-accent/20 to-ui-bg blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[2px] font-bold text-white/40">EXPLORE</div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
