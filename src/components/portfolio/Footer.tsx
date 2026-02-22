import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border py-8 sm:py-10 px-4 sm:px-6">
      <div className="section-glow-line max-w-4xl mx-auto mb-8" />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient-primary font-medium">Avishek Chaudhary</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Twitter, href: "https://twitter.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(185_80%_55%/0.3)] transition-all duration-300"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
           <span className="text-primary"></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
