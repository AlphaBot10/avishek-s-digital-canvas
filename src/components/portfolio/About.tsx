import { motion } from "framer-motion";
import { Code2, Palette, Zap, Sparkles } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable applications", color: "primary" },
  { icon: Palette, label: "UI/UX Focus", desc: "Crafting beautiful, intuitive interfaces", color: "secondary" },
  { icon: Zap, label: "Performance", desc: "Optimizing for speed and efficiency", color: "accent" },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Technologies" },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 z-10">
      <div className="section-glow-line max-w-4xl mx-auto mb-16 sm:mb-20" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary mb-4">
            <Sparkles size={14} /> About Me
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Know <span className="text-gradient-primary neon-underline">Who I Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 rgb-border-card glass-panel p-6 sm:p-8"
          >
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
              I'm a passionate Full Stack Developer with a strong focus on frontend technologies.
              With expertise in React, TypeScript, and modern web frameworks, I build
              applications that are not only functional but also delightful to use.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
              My journey in software development has been driven by curiosity and a love for
              problem-solving. I thrive on turning complex requirements into elegant, user-friendly
              solutions. When I'm not coding, you'll find me exploring new technologies and
              contributing to open-source projects.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <div className="font-display text-xl sm:text-2xl font-bold text-gradient-primary">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 6, scale: 1.02 }}
                className="hover-glow-card p-4 sm:p-5 flex items-start gap-4 cursor-default"
              >
                <div className={`p-2.5 rounded-xl bg-${item.color}/10 text-${item.color} shrink-0 shadow-[0_0_15px_hsl(185_80%_55%/0.2)]`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
