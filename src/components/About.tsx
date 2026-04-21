import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-surface p-1 flex items-center justify-center">
             <div className="w-full h-full rounded-xl overflow-hidden bg-ui-bg relative">
                <img 
                  src="https://picsum.photos/seed/developer/800/1000" 
                  alt="Natnael Badigo" 
                  className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ui-bg via-transparent to-transparent" />
             </div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 w-40 h-40 glass-surface rounded-2xl p-6 flex flex-col justify-end hidden md:flex">
             <span className="text-[10px] text-brand-accent uppercase tracking-[2px] font-bold mb-2">Location</span>
             <span className="text-sm font-light text-ui-muted uppercase tracking-[1px]">Addis Ababa, ET</span>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] text-ui-muted uppercase tracking-[4px] block mb-6 font-medium">Philosophy</span>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
            DRIVEN BY <span className="text-ui-muted italic font-light">curiosity</span> AND <span className="text-brand-accent">code</span>.
          </h2>
          
          <div className="space-y-6 text-[17px] text-ui-muted font-light leading-relaxed max-w-xl">
            <p>
              I’m Natnael, a creative developer focused on crafting lean, aesthetic, and high-performance digital solutions. 
              I believe that the best products are born at the intersection of rigid engineering and fluid design.
            </p>
            <p>
              My process is deeply rooted in minimalism—stripping away the noise to let the core purpose of a product shine through interaction and motion.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-16 pt-16 border-t border-white/5">
            <div>
               <div className="text-3xl font-medium text-white mb-2 leading-none">12+</div>
               <div className="text-ui-muted text-[10px] uppercase tracking-[2px] font-medium">Successful Projects</div>
            </div>
            <div>
               <div className="text-3xl font-medium text-white mb-2 leading-none">04</div>
               <div className="text-ui-muted text-[10px] uppercase tracking-[2px] font-medium">Digital Awards</div>
            </div>
            <div className="hidden md:block">
               <div className="text-3xl font-medium text-white mb-2 leading-none">02</div>
               <div className="text-ui-muted text-[10px] uppercase tracking-[2px] font-medium">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
