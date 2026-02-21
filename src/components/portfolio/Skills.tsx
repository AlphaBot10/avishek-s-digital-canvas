import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const skills = [
  { name: "React", level: 92, color: "185 80% 55%" },
  { name: "TypeScript", level: 88, color: "200 85% 50%" },
  { name: "JavaScript", level: 95, color: "45 100% 55%" },
  { name: "Node.js", level: 80, color: "120 60% 50%" },
  { name: "CSS/Tailwind", level: 90, color: "270 60% 65%" },
  { name: "Next.js", level: 78, color: "210 20% 70%" },
  { name: "Python", level: 70, color: "35 90% 60%" },
  { name: "MongoDB", level: 75, color: "145 60% 45%" },
];

const SkillRing = ({ name, level, color, index }: { name: string; level: number; color: string; index: number }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;
  const gradientId = `skillGrad-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.1, y: -10 }}
      className="flex flex-col items-center gap-3 hover-glow-card p-4 sm:p-6 cursor-default group"
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24" style={{ filter: `drop-shadow(0 0 8px hsl(${color} / 0.4))` }}>
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="hsl(222, 30%, 16%)"
            strokeWidth="5"
          />
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.08, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={`hsl(${color})`} />
              <stop offset="100%" stopColor={`hsl(${color} / 0.6)`} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-xs sm:text-sm font-bold" style={{ color: `hsl(${color})` }}>{level}%</span>
        </div>
      </div>
      <span className="font-display text-[11px] sm:text-xs font-medium text-foreground group-hover:text-primary transition-colors">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 z-10">
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
            <Sparkles size={14} /> Skills & Expertise
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            What I <span className="text-gradient-primary neon-underline">Master</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, i) => (
            <SkillRing key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
