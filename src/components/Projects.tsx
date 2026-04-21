import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "senbet",
    title: "Senbet Management System",
    category: "Full-Stack System",
    description: "A comprehensive management suite designed for organizational efficiency. Built with a focus on real-time data handling, resource tracking, and high-performance user interfaces.",
    image: "https://picsum.photos/seed/management/1200/800",
    tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
    problem: "Manual tracking systems were causing significant delays and data inconsistency across departments.",
    solution: "A centralized, cloud-based platform with real-time updates and an intuitive dashboard that simplified complex workflows.",
    featured: true,
  },
  {
    id: "galaxy",
    title: "Project Galaxy",
    category: "3D Interaction",
    description: "An interactive 3D universe visualizer exploring planetary systems and astronomical data through WebGL.",
    image: "https://picsum.photos/seed/galaxy/800/600",
    tech: ["Three.js", "React Three Fiber", "GSAP"],
    featured: false,
  },
  {
    id: "nexus",
    title: "Nexus UI Kit",
    category: "Design System",
    description: "A library of futuristic, high-performance UI components for enterprise applications.",
    image: "https://picsum.photos/seed/nexus/800/600",
    tech: ["TypeScript", "Tailwind", "Radix UI"],
    featured: false,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-[11px] text-ui-muted uppercase tracking-[4px] block mb-4 font-medium">Selected Works</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">CRAFTING <span className="text-ui-muted">VALUE</span></h2>
          </div>
          <div className="max-w-md">
            <p className="text-ui-muted font-light leading-relaxed">
              A collection of digital products and experiments that balance aesthetic purity 
              with technical performance.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-24">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className={`overflow-hidden rounded-2xl glass-surface aspect-[16/10] ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] text-brand-accent uppercase tracking-[2px] font-semibold">{project.category}</span>
                <div className="h-px flex-1 bg-white/5" />
                <span className="text-[10px] text-ui-muted font-mono">0{idx + 1}</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight leading-none">{project.title}</h3>
              <p className="text-ui-muted max-w-lg mb-10 font-light leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                {project.tech.map(t => (
                  <span key={t} className="text-[11px] text-ui-muted/60 uppercase tracking-[1px]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-8">
                <a 
                  href="#" 
                  className="group/link flex items-center gap-2 text-[12px] font-medium uppercase tracking-[1px] text-white"
                >
                  Explore <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
                <a 
                  href="#" 
                  className="text-[12px] font-medium uppercase tracking-[1px] text-ui-muted hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
