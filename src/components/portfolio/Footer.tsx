const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Avishek Chaudhary. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with <span className="text-primary">♥</span> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
