import { motion } from "framer-motion";
import { BadgeCheck, Trophy, Star } from "lucide-react";
import { Section } from "./Section";

const certs = [
  { year: "2024", title: "Cloud Computing", issuer: "NPTEL", icon: BadgeCheck },
  { year: "2024", title: "Organizational Analysis", issuer: "Coursera", icon: BadgeCheck },
];

const achievements = [
  { icon: Trophy, title: "3rd Prize – Speech Presentation Contest", meta: "MKCE · 2023" },
  { icon: Star, title: "Best Performer – Campus to Corporate Training", meta: "2025" },
];

export function Certifications() {
  return (
    <Section
      id="certs"
      eyebrow="Certifications & Wins"
      title={<>Always <span className="gradient-text">learning, always growing</span>.</>}
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/60 via-cyan-400/40 to-pink-400/60" />
          <div className="space-y-5">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-1.5 grid h-10 w-10 place-items-center rounded-full bg-gradient-primary glow-violet">
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <div className="rounded-2xl glass p-5">
                  <div className="text-xs uppercase tracking-widest text-cyan-300">{c.year}</div>
                  <div className="mt-1 font-display text-lg font-semibold">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.issuer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 rounded-2xl glass-strong p-5"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-500 glow-pink">
                <a.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-display font-semibold">{a.title}</div>
                <div className="text-xs text-muted-foreground">{a.meta}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
