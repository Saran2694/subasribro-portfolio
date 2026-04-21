import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, Brain } from "lucide-react";
import { Section } from "./Section";

const facts = [
  { icon: MapPin, label: "Based in", value: "Tamil Nadu, India" },
  { icon: GraduationCap, label: "Degree", value: "B.E. CSE · 2022–2026" },
  { icon: Award, label: "CGPA", value: "7.39 / 10" },
  { icon: Brain, label: "Focus", value: "AI · Software · IoT" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={<>Building software with <span className="gradient-text">curiosity & care</span>.</>}
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a motivated <span className="text-violet-300 font-semibold">Computer Science Engineering</span> student
            passionate about <span className="text-cyan-300 font-semibold">AI, software development</span>, and solving
            real-world problems through smart, human-centered technology.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I love turning ideas into working products — from IoT-driven traffic
            systems to AI-powered complaint platforms. I bring curiosity,
            discipline, and a designer's eye to every line of code.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Innovation", "Collaboration", "Continuous Learning", "Detail-Oriented"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 gap-3 lg:col-span-2"
        >
          {facts.map((f) => (
            <div key={f.label} className="gradient-border p-5">
              <f.icon className="h-5 w-5 text-violet-300" />
              <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{f.label}</div>
              <div className="mt-1 font-display text-base font-semibold">{f.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
