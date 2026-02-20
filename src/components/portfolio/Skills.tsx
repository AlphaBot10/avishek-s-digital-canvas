import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "JavaScript", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "CSS/Tailwind", level: 90 },
  { name: "Next.js", level: 78 },
  { name: "Python", level: 70 },
  { name: "MongoDB", level: 75 },
];

const SkillRing = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -8 }}
      className="flex flex-col items-center gap-3 glass-panel-hover p-6 cursor-default"
    >
      <div className="relative w-24 h-24 skill-ring">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="hsl(222, 30%, 18%)"
            strokeWidth="6"
          />
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="url(#skillGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(185, 80%, 55%)" />
              <stop offset="100%" stopColor="hsl(200, 85%, 50%)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-sm font-bold text-primary">{level}%</span>
        </div>
      </div>
      <span className="font-display text-xs font-medium text-foreground">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            My <span className="text-gradient-primary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <SkillRing key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
