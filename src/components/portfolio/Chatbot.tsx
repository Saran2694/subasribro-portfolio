import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string };

const KNOWLEDGE: { q: RegExp; a: string }[] = [
  { q: /skill|tech|stack|know/i, a: "Subasri works with **HTML, CSS, Java, SQL, AI tools, GitHub** and brings strong problem-solving & communication skills." },
  { q: /project|work|build/i, a: "Two flagship projects: **Traffic Management System** (IoT + smart signals) and **AI-Powered RailMadad** (image-based complaint AI). Check the Projects section!" },
  { q: /contact|reach|email|hire|phone/i, a: "📧 rsubasriraju@gmail.com · 📞 +91 6379378385 · 📍 Perambalur, Tamil Nadu. She's open to internships & full-time SDE/AI roles." },
  { q: /education|college|study|cgpa|degree/i, a: "She's pursuing **B.E. CSE (2022–2026)** at M. Kumarasamy College of Engineering with a CGPA of **7.39**." },
  { q: /achievement|award|prize|certif/i, a: "🏆 3rd Prize – Speech Presentation, Best Performer in Campus to Corporate. Certified in Cloud Computing (NPTEL) & Organizational Analysis (Coursera)." },
  { q: /resume|cv/i, a: "You can download her resume from the top-right button or the hero section. 📄" },
  { q: /hello|hi|hey/i, a: "Hi there! 👋 I'm Subasri's AI assistant. Ask me about her skills, projects, education, or how to contact her." },
];

function answer(q: string): string {
  for (const k of KNOWLEDGE) if (k.q.test(q)) return k.a;
  return "Great question! Try asking about her **skills**, **projects**, **education**, **achievements**, or **how to contact her**.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hi! 👋 I'm **SubaBot**. Ask me anything about Subasri." },
  ]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const next: Msg[] = [...msgs, { role: "user", text }];
    setMsgs(next);
    setInput("");
    setTimeout(() => setMsgs([...next, { role: "bot", text: answer(text) }]), 450);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chatbot"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-white shadow-lg animate-pulse-glow"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-5 z-50 flex h-[460px] w-[340px] flex-col overflow-hidden rounded-3xl glass-strong sm:w-[360px]"
          >
            <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-primary/30 p-4">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="font-display text-sm font-bold">SubaBot</div>
                <div className="text-[10px] uppercase tracking-widest text-emerald-300">● Online</div>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.role === "bot"
                      ? "bg-white/5 text-foreground/90"
                      : "ml-auto bg-gradient-primary text-white"
                  }`}
                  dangerouslySetInnerHTML={{ __html: m.text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
                />
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills…"
                className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm outline-none ring-1 ring-white/10 focus:ring-violet-400"
              />
              <button
                type="submit"
                aria-label="Send"
                className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-white"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
