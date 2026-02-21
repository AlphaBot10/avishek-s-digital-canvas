import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, payments, and admin dashboard built for scalability.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task board with drag-and-drop, filters, and team workspaces.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation tool with templates, tone adjustments, and export options.",
    tech: ["React", "Python", "OpenAI", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Dashboard",
    description: "Interactive analytics dashboard with real-time charts, filters, and data visualization.",
    tech: ["React", "D3.js", "Firebase", "Framer Motion"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 z-10">
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
            <Sparkles size={14} /> Portfolio
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient-primary neon-underline">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rgb-border-card glass-panel p-5 sm:p-7 group cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-base sm:text-lg font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:border-primary/40 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={project.live}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-secondary transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
