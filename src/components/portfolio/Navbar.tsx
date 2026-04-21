import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certs", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-3 z-50 mx-auto flex justify-center px-4 transition-all duration-500 ${
        scrolled ? "top-2" : "top-5"
      }`}
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between gap-6 rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <a href="#hero" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary glow-violet">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="gradient-text text-lg">Subasri.R</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-4 right-4 top-20 z-50 rounded-2xl glass-strong p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block rounded-xl px-4 py-3 text-sm hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
