import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "JS Enthusiast",
  "React Specialist",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-secondary/3 rounded-full blur-3xl animate-glow-pulse" />

      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 py-20 lg:py-0">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 sm:mb-6 animate-glow-pulse"
          >
            ⚡ Welcome to my universe
          </motion.p>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4">
            Hi, I'm{" "}
            <span className="text-gradient-rgb inline-block">
              Avishek
            </span>
            <br />
            <span className="text-gradient-primary">
              Chaudhary
            </span>
          </h1>

          <div className="h-8 sm:h-10 mb-4 sm:mb-8 flex items-center justify-center lg:justify-start">
            <span className="font-display text-lg sm:text-xl md:text-2xl text-secondary font-medium">
              {displayed}
            </span>
            <span className="typing-cursor ml-0.5 inline-block h-5 sm:h-6">&nbsp;</span>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 mb-6 sm:mb-10 text-sm sm:text-base">
            Crafting pixel-perfect, performant web experiences with modern
            technologies. Passionate about clean code and beautiful interfaces.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="btn-primary-glow inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl font-medium text-sm group"
            >
              <Mail size={16} />
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <button className="btn-outline-glow inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl font-medium text-sm animate-pulse-glow">
              <Download size={16} />
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Profile photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
          className="flex justify-center"
        >
          <div className="profile-rgb-container">
            {/* RGB outer glow */}
            <div className="profile-rgb-glow" />
            {/* RGB rotating ring */}
            <div className="profile-rgb-ring" />
            {/* Second ring offset */}
            <div className="profile-rgb-ring" style={{ animationDirection: 'reverse', inset: '-10px', opacity: 0.4, filter: 'blur(4px)' }} />

            {/* Decorative orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] sm:inset-[-30px] z-20"
            >
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary shadow-[0_0_15px_hsl(185_80%_55%/0.8)]" />
            </motion.div>

            {/* Second orbiting dot */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-15px] sm:inset-[-20px] z-20 flex justify-end items-end"
            >
              <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_12px_hsl(35_90%_60%/0.8)]" />
            </motion.div>

            {/* Accent orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-25px] sm:inset-[-35px] z-20 flex items-center"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent shadow-[0_0_10px_hsl(270_60%_65%/0.8)]" />
            </motion.div>

            {/* Profile image */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 z-10">
              <img
                src={profilePhoto}
                alt="Avishek Chaudhary"
                className="w-full h-full object-cover object-[center_20%]"
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 animate-shimmer rounded-full pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors z-10"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
