import { motion } from "framer-motion";
import { Droplets, Radio, Wifi, Medal } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Droplets,
    title: "TNWISE Hackathon",
    meta: "Water & Agriculture · 2025",
    desc: "Collaborated on tech-led solutions for sustainable water and agriculture management.",
  },
  {
    icon: Radio,
    title: "5G Wireless Technology",
    meta: "Paper Presentation · Bannari Amman IoT · 2023",
    desc: "Presented research on next-gen wireless infrastructure and use-cases.",
  },
  {
    icon: Wifi,
    title: "LI-FI Technology",
    meta: "Paper Presentation · Muthayammal Engg. College · 2024",
    desc: "Explored light-based data transmission and its real-world applications.",
  },
  {
    icon: Medal,
    title: "Annual Sports – Marchpast",
    meta: "MKCE · March 2025",
    desc: "Represented the team in the institute's annual marchpast event.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & activities"
      title={<>Beyond the <span className="gradient-text">classroom</span>.</>}
      description="Hackathons, paper presentations, and team experiences that shape how I build."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl glass p-6"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
              <it.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
            <div className="text-xs text-cyan-300">{it.meta}</div>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
