import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Train } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    icon: Cpu,
    title: "Traffic Management System",
    year: "2023",
    description:
      "IoT-powered real-time traffic monitoring that optimizes signals, detects accidents & violations, and dramatically reduces congestion.",
    tags: ["IoT", "Embedded C", "Computer Vision", "Smart Cities"],
    accent: "from-indigo-500 via-violet-500 to-cyan-500",
  },
  {
    icon: Train,
    title: "AI-Powered RailMadad",
    year: "2024",
    description:
      "An AI complaint management platform for Indian Railways. Passengers upload images; AI auto-categorizes and routes issues to the right department for faster resolution.",
    tags: ["AI", "Image Analysis", "NLP", "Automation"],
    accent: "from-pink-500 via-violet-500 to-cyan-500",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={<>Projects that <span className="gradient-text">solve real problems</span>.</>}
      description="A glimpse of what happens when curiosity meets code."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl glass-strong p-7"
          >
            {/* Animated gradient border on hover */}
            <div
              className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${p.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
            />
            <div
              className={`pointer-events-none absolute inset-px rounded-[calc(theme(borderRadius.3xl)-1px)] bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
            />

            <div className="relative">
              <div className="mb-6 flex items-start justify-between">
                <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} glow-violet`}>
                  <p.icon className="h-7 w-7 text-white" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                  {p.year}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-white"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
                <a
                  href="https://github.com/SUBASRIR1305"
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
