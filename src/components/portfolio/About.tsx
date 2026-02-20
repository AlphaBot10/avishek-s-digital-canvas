import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable applications" },
  { icon: Palette, label: "UI/UX Focus", desc: "Crafting beautiful, intuitive interfaces" },
  { icon: Zap, label: "Performance", desc: "Optimizing for speed and efficiency" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 glass-panel p-8"
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with a strong focus on frontend technologies.
              With expertise in React, TypeScript, and modern web frameworks, I build
              applications that are not only functional but also delightful to use.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in software development has been driven by curiosity and a love for
              problem-solving. I thrive on turning complex requirements into elegant, user-friendly
              solutions. When I'm not coding, you'll find me exploring new technologies and
              contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass-panel-hover p-5 flex items-start gap-4"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
