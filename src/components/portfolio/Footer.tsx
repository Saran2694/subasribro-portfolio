import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="container mx-auto flex max-w-6xl items-center justify-center px-6">
        <div className="flex items-center gap-3">
          <a href="mailto:rsubasriraju@gmail.com" className="grid h-9 w-9 place-items-center rounded-full glass transition-transform hover:-translate-y-0.5">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/subasri-r-602b8628b/" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full glass transition-transform hover:-translate-y-0.5">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/SUBASRIR1305" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full glass transition-transform hover:-translate-y-0.5">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
