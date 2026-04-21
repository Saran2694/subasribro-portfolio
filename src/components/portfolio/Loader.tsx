import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="relative">
            <div className="absolute inset-0 -m-10 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="relative h-16 w-16">
                <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-violet-400 border-r-cyan-400" />
                <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-b-pink-400" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
              </div>
              <div className="font-display text-sm uppercase tracking-[0.4em] gradient-text">Subasri.R</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
