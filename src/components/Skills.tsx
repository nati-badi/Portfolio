import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    color: "from-brand-blue to-white/20",
  },
  {
    title: "3D & Creative",
    skills: ["Three.js", "WebGL", "React Three Fiber", "Shader Math", "Blender Basics", "Spline"],
    color: "from-brand-purple to-brand-blue",
  },
  {
    title: "Tools & Backend",
    skills: ["Node.js", "Firebase", "PostgreSQL", "Git / GitHub", "Vite", "Figma"],
    color: "from-white/20 to-white/10",
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4">
          <span className="text-[11px] text-ui-muted uppercase tracking-[4px] block mb-4 font-medium">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            TECHNICAL <br /><span className="text-ui-muted">TOOLKIT</span>
          </h2>
          <p className="text-ui-muted font-light leading-relaxed mb-10 max-w-sm">
            I leverage a modern stack dedicated to performance, aesthetics, and user interaction.
            Focusing on the bridge between creative design and production-ready code.
          </p>
        </div>

        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05] rounded-2xl overflow-hidden">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-ui-bg p-10 group hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-medium tracking-tight">{category.title}</h3>
                <span className="text-[10px] text-ui-muted font-mono">/ 0{idx + 1}</span>
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-[13px] font-light text-ui-muted hover:text-brand-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Subtle learning box */}
          <div className="bg-ui-bg p-10 flex flex-col justify-center border-t border-white/[0.05] sm:border-t-0">
             <h4 className="text-[11px] font-bold text-brand-accent uppercase tracking-[2px] mb-4">Continuous Evolution</h4>
             <p className="text-[14px] text-ui-muted/60 font-light italic">
                Currently exploring WebGPU, advanced GLSL shaders, and large-scale React architecture.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
