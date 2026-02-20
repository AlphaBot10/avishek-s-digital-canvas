import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
    <section id="projects" className="relative py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel-hover p-6 group"
            >
              <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
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
