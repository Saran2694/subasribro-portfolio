import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
