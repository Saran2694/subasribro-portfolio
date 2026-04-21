import { motion } from "framer-motion";
import { Section } from "./Section";

const skills = [
  { name: "HTML", level: 90, color: "#ec4899" },
  { name: "CSS", level: 88, color: "#8b5cf6" },
  { name: "Java", level: 80, color: "#06b6d4" },
  { name: "SQL", level: 78, color: "#6366f1" },
  { name: "AI Tools", level: 82, color: "#8b5cf6" },
  { name: "GitHub", level: 75, color: "#ec4899" },
  { name: "Problem Solving", level: 88, color: "#06b6d4" },
  { name: "Communication", level: 85, color: "#6366f1" },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The <span className="gradient-text">tech & traits</span> I bring to every project.</>}
      description="A balanced mix of engineering fundamentals, modern AI tooling, and human skills."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl glass p-5"
          >
            <div
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
              style={{ background: s.color }}
            />
            <div className="flex items-center justify-between">
              <span className="font-display font-semibold">{s.name}</span>
              <span className="text-xs text-muted-foreground">{s.level}%</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.05 }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${s.color}, #ffffff66)` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
