import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const contacts = [
  { icon: Mail, label: "Email", value: "rsubasriraju@gmail.com", href: "mailto:rsubasriraju@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 6379378385", href: "tel:+916379378385" },
  { icon: MapPin, label: "Location", value: "Perambalur, Tamil Nadu, India", href: "#" },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Let's connect"
      title={<>Have a role, project, or idea? <span className="gradient-text">Let's talk.</span></>}
      description="I'm actively looking for software & AI roles. The fastest way to reach me is email."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-8 lg:col-span-3"
        >
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <h3 className="font-display text-2xl font-bold">Reach me directly</h3>
          <p className="mt-2 text-sm text-muted-foreground">Pick whichever works best for you.</p>

          <div className="mt-6 space-y-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-violet-400/40 hover:bg-white/10"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.linkedin.com/in/subasri-r-602b8628b/"
              target="_blank"
              rel="noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/SUBASRIR1305"
              target="_blank"
              rel="noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 text-white lg:col-span-2"
        >
          <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ background: "var(--gradient-aurora)" }} />
          <div className="relative">
            <div className="text-xs uppercase tracking-widest opacity-80">Available for</div>
            <h3 className="mt-2 font-display text-3xl font-bold leading-tight">
              Internships, full-time SDE & AI roles.
            </h3>
            <p className="mt-3 text-sm opacity-90">
              Graduating 2026 · Open to relocation · Remote friendly.
            </p>
            <a
              href="mailto:rsubasriraju@gmail.com"
              className="magnetic-btn mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900"
            >
              Say hello <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
