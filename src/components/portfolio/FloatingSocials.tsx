import { Linkedin, Github, Mail } from "lucide-react";

export function FloatingSocials() {
  const items = [
    { icon: Mail, href: "mailto:rsubasriraju@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/subasri-r-602b8628b/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/SUBASRIR1305", label: "GitHub" },
  ];
  return (
    <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target={it.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={it.label}
          className="group grid h-11 w-11 place-items-center rounded-full glass-strong transition-all hover:-translate-x-1 hover:scale-110 hover:glow-violet"
        >
          <it.icon className="h-4 w-4 text-foreground/80 transition-colors group-hover:text-white" />
        </a>
      ))}
      <div className="mx-auto h-16 w-px bg-gradient-to-b from-violet-400/60 to-transparent" />
    </div>
  );
}
