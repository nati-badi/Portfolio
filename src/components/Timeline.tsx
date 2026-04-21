import { motion } from "motion/react";

const events = [
  {
    year: "2021",
    title: "Foundations",
    description: "Started my self-taught journey with HTML, CSS, and vanilla JS. Built countless simple landing pages to master layouts.",
    icon: "🌱",
  },
  {
    year: "2022",
    title: "React Evolution",
    description: "Deep-dived into the React ecosystem. Mastered component architecture, state management, and API integrations.",
    icon: "⚛️",
  },
  {
    year: "2023",
    title: "3D Frontier",
    description: "Discovered Three.js and the power of creative coding. Started building interactive 3D assets and immersive web scenes.",
    icon: "🎨",
  },
  {
    year: "2024 - 2025",
    title: "The Builder Era",
    description: "Focusing on full-scale systems like Senbet Management System. Bridging the gap between corporate utility and creative art.",
    icon: "🚀",
  },
  {
    year: "2026 - Present",
    title: "Minimalist Innovation",
    description: "Refining high-end digital experiences with a focus on minimalism and premium interactive architecture.",
    icon: "✨",
  }
];

export default function Timeline() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24">
          <span className="text-[11px] text-ui-muted uppercase tracking-[4px] block mb-4 font-medium text-center md:text-left">History</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-center md:text-left">THE <span className="text-ui-muted italic">evolution</span> OF <span className="text-brand-accent">skill</span>.</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.05]" />
          
          <div className="space-y-24">
            {events.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center justify-between gap-12 relative ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Year tag */}
                <div className="md:w-[42%] flex justify-center md:justify-end">
                   <span className="text-[14px] font-mono text-brand-accent tracking-tighter bg-brand-accent/10 px-4 py-1 rounded-full">
                      {event.year}
                   </span>
                </div>

                {/* Dot */}
                <div className="absolute left-[-4px] md:left-1/2 md:-ml-1 w-2 h-2 rounded-full border border-white bg-ui-bg z-10" />

                {/* Content */}
                <div className="md:w-[42%] text-center md:text-left">
                  <h3 className="text-2xl font-medium mb-4 tracking-tight">{event.title}</h3>
                  <p className="text-[15px] text-ui-muted font-light leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
