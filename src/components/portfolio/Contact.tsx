import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
    alert("Message sent! (This is a demo)");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b-2 py-3 px-1 text-sm text-foreground outline-none transition-all duration-300 placeholder-transparent peer ${
      focused === field ? "border-primary" : "border-border"
    }`;

  const labelClass =
    "absolute left-1 top-3 text-xs text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary";

  const hasValue = (field: string) => form[field as keyof typeof form].length > 0;

  return (
    <section id="contact" className="relative py-24 px-6 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            Get in <span className="text-gradient-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 glass-panel p-8 space-y-8"
          >
            {(["name", "email", "message"] as const).map((field) => (
              <div key={field} className="relative">
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    placeholder={field}
                    required
                    className={inputClass(field)}
                  />
                ) : (
                  <textarea
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    placeholder={field}
                    required
                    rows={4}
                    className={`${inputClass(field)} resize-none`}
                  />
                )}
                <label
                  className={`${labelClass} ${hasValue(field) ? "-top-4 !text-xs !text-primary" : ""}`}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}

            <button
              type="submit"
              className="btn-primary-glow inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 flex flex-col justify-center gap-6"
          >
            <div className="glass-panel p-6">
              <h3 className="font-display font-semibold text-sm mb-4">Connect with me</h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <social.icon size={16} />
                    </div>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
