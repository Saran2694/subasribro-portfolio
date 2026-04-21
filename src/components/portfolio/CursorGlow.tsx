import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[55] h-[420px] w-[420px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, oklch(0.63 0.23 303 / 0.18) 0%, transparent 60%)",
        mixBlendMode: "screen",
      }}
      animate={{ x: pos.x - 210, y: pos.y - 210 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.4 }}
    />
  );
}
