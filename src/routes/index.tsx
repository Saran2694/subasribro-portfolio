import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Chatbot } from "@/components/portfolio/Chatbot";
import { Loader } from "@/components/portfolio/Loader";
import { FloatingSocials } from "@/components/portfolio/FloatingSocials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Subasri R — AI Enthusiast & Future Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Subasri R — Computer Science Engineering student passionate about AI, software development, and building human-first technology. Available for internships & SDE/AI roles.",
      },
      { property: "og:title", content: "Subasri R — AI Enthusiast & Future Software Engineer" },
      {
        property: "og:description",
        content:
          "Premium portfolio showcasing AI projects, IoT systems, certifications and achievements by Subasri R, B.E. CSE 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <FloatingSocials />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
