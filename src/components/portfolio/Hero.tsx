import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 md:order-1"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4 animate-glow-pulse">
            Welcome to my portfolio
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="text-gradient-primary glow-text">
              Avishek Chaudhary
            </span>
          </h1>
          <div className="h-10 mb-6">
            <span className="font-display text-xl sm:text-2xl text-secondary">
              {displayed}
            </span>
            <span className="typing-cursor ml-0.5">&nbsp;</span>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
            Crafting pixel-perfect, performant web experiences with modern
            technologies. Passionate about clean code and beautiful interfaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn-primary-glow inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <button className="btn-outline-glow inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm">
              <Download size={16} />
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Profile photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-primary/10 animate-glow-pulse blur-xl" />
            {/* Decorative ring */}
            <div className="absolute -inset-2 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden profile-glow border-2 border-primary/30">
              <img
                src={profilePhoto}
                alt="Avishek Chaudhary"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent dots */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-4 h-4 rounded-full bg-secondary"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-3 h-3 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
