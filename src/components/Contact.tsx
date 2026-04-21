import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] text-ui-muted uppercase tracking-[4px] block mb-6 font-medium">Get in touch</span>
            <h2 className="text-5xl md:text-8xl font-medium tracking-tight mb-10 leading-[1.1]">
              LET'S <span className="text-brand-accent">connect</span>.
            </h2>
            
            <p className="text-ui-muted text-lg font-light mb-12 max-w-sm leading-relaxed">
              Open to selected freelance opportunities and permanent roles in creative development.
            </p>

            <div className="space-y-10">
               <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-ui-muted uppercase tracking-[2px] font-medium">Direct contact</span>
                  <a href="mailto:mentalet@gmail.com" className="text-2xl font-light hover:text-brand-accent transition-colors">
                    mentalet@gmail.com
                  </a>
               </div>

               <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-ui-muted uppercase tracking-[2px] font-medium">Digital presence</span>
                  <div className="flex gap-8">
                     <a href="#" className="text-sm font-medium uppercase tracking-[1px] text-white hover:text-brand-accent transition-colors">LinkedIn</a>
                     <a href="#" className="text-sm font-medium uppercase tracking-[1px] text-white hover:text-brand-accent transition-colors">GitHub</a>
                     <a href="#" className="text-sm font-medium uppercase tracking-[1px] text-white hover:text-brand-accent transition-colors">X / Twitter</a>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-1 glass-surface rounded-2xl"
          >
             <form className="p-10 space-y-8 bg-ui-bg rounded-2xl">
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-[2px] text-ui-muted font-medium ml-1">Name</label>
                   <input 
                     type="text" 
                     className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors font-light"
                     placeholder="How should I call you?"
                   />
                </div>
                
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-[2px] text-ui-muted font-medium ml-1">Email</label>
                   <input 
                     type="email" 
                     className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors font-light"
                     placeholder="Where can I reach you?"
                   />
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-[2px] text-ui-muted font-medium ml-1">Message</label>
                   <textarea 
                     rows={4}
                     className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none font-light"
                     placeholder="Tell me about your project..."
                   ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-white text-black font-medium uppercase text-[12px] tracking-[2px] rounded-full transition-all flex items-center justify-center gap-3"
                >
                  Send Message <Send size={14} />
                </motion.button>
             </form>
          </motion.div>
        </div>
      </div>

      <footer className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-ui-muted uppercase tracking-[2px] font-medium">
             © {new Date().getFullYear()} Natnael Badigo
          </div>
          <div className="text-[10px] text-ui-muted uppercase tracking-[2px] font-medium">
             Built at the intersection of <span className="text-white">Design & Code</span>
          </div>
      </footer>
    </section>
  );
}
