import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Code2, Cpu, Sparkles } from "lucide-react";
import avatar from "@/assets/avatar.png";
import { ParticleField } from "./ParticleField";

const TITLES = [
  "AI Enthusiast",
  "Future Software Engineer",
  "Creative Problem Solver",
];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = deleting ? 40 : 80;
    const pause = deleting ? 400 : 1500;
    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), pause);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setI((v) => v + 1);
        return;
      }
      setText(word.substring(0, deleting ? text.length - 1 : text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(TITLES);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="blob h-[420px] w-[420px] -left-20 top-10" style={{ background: "#6366f1" }} aria-hidden />
      <div className="blob h-[380px] w-[380px] right-0 top-40" style={{ background: "#ec4899" }} aria-hidden />
      <div className="blob h-[360px] w-[360px] left-1/3 bottom-0" style={{ background: "#06b6d4" }} aria-hidden />
      <ParticleField count={45} />

      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities · 2026 Graduate
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">Subasri R</span>
          </h1>

          <p className="mt-6 h-8 font-mono text-lg text-cyan-300 sm:text-xl">
            <span className="typing-cursor">{typed}</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Computer Science Engineering student crafting intelligent, human-first
            software. I blend AI, clean code, and creative design to build
            experiences that solve real problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="magnetic-btn group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white glow-violet"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold"
            >
              <Mail className="h-4 w-4" /> Hire Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><Code2 className="h-4 w-4 text-violet-300" /> Java · SQL · Web</div>
            <div className="flex items-center gap-2"><Cpu className="h-4 w-4 text-cyan-300" /> AI Tools · IoT</div>
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-pink-300" /> Problem Solver</div>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          {/* Orbits */}
          <div className="absolute inset-0 animate-spin-slow" aria-hidden>
            <div className="absolute inset-0 rounded-full border border-dashed border-violet-400/30" />
            <div className="absolute inset-6 rounded-full border border-dashed border-cyan-400/20" />
          </div>
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-primary opacity-30 blur-3xl" aria-hidden />

          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-10 flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> AI
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-2 top-24 flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-pink-400" /> &lt;/code&gt;
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-6 flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-violet-400" /> CSE 2026
          </motion.div>

          <motion.img
            src={avatar}
            alt="Subasri R cartoon avatar"
            width={1024}
            height={1024}
            className="relative z-10 h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(139,92,246,0.4)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-8 w-[2px] animate-pulse bg-gradient-to-b from-violet-400 to-transparent" />
        </div>
      </a>
    </section>
  );
}
