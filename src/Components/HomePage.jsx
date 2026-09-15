import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Download, Mail, ArrowUpRight } from "lucide-react";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSupabase,
  SiGit,
  SiGithub,
  SiLinux,
  SiGmail,
  SiLeetcode,
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiMediapipe,
} from "react-icons/si";
import { FaLinkedin, FaFacebookSquare, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import toast from "react-hot-toast";
import Projects from "./Projects.jsx";
import ContactPage from "./ContactPage.jsx";
import ChatBot from "./ChatBot.jsx";

const SKILL_CATEGORIES = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "C/C++", icon: SiCplusplus },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: BsLightningChargeFill },
      { name: "Socket.io", icon: SiSocketdotio },
    ],
  },
  {
    label: "Machine Learning",
    items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "OpenCV", icon: SiOpencv },
      { name: "MediaPipe", icon: SiMediapipe },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: SiLinux },
    ],
  },
];

const TABS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

const CONTACT_LINKS = [
  { label: "Email", value: "ronaspe42@gmail.com", icon: SiGmail, action: "copy" },
  { label: "LinkedIn", value: "in/ronronrivera", icon: FaLinkedin, href: "https://www.linkedin.com/in/ronronrivera/" },
  { label: "GitHub", value: "@ronronrivera", icon: FaGithub, href: "https://github.com/ronronrivera" },
  { label: "LeetCode", value: "ronron_rivera", icon: SiLeetcode, href: "https://leetcode.com/u/ronron_rivera/" },
  { label: "Facebook", value: "ronron.rivera42", icon: FaFacebookSquare, href: "https://www.facebook.com/ronron.rivera42" },
  { label: "Phone", value: "+63 993 580 9668", icon: FaPhoneAlt, href: "tel:+639935809668" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("about");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ronaspe42@gmail.com");
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Could not copy email");
    }
  };

  return (
    <main className="relative text-white">
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid items-center gap-10 lg:grid-cols-[1fr_auto]"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="eyebrow">Available for work · 2026</span>
            </div>

            <h1 className="mt-6 font-display text-[15vw] font-bold leading-[0.92] tracking-tightest text-balance sm:text-7xl lg:text-8xl">
              Ron-ron
              <br />
              <span className="text-neutral-500">Rivera</span>
            </h1>

            <p className="mt-6 max-w-xl font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 sm:text-sm">
              Software Engineer / Backend / Aspiring Computer Vision and Robotics Engineer
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              I build project-driven systems that connect perception to action,
              from computer vision models and robotics to full-stack products
              and real-time platforms with production-ready backend
              architecture.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveTab("contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                <Mail className="h-4 w-4" />
                Hire me
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="https://drive.google.com/file/d/1vk-TC-U9UFJuACJ9QBIKYEKE-RzlZNrh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/[0.06]"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </div>

          {/* Framed portrait */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-white/10" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/15">
              <img
                src="/me.jpg"
                alt="Ron-ron Rivera"
                className="h-56 w-56 object-cover grayscale transition duration-700 hover:grayscale-0 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-300">
                  PH · GMT+8
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-300">
                  Open to remote
                </span>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      </section>

      {/* ── Segmented tabs ─────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="hairline mb-6" />
        <div className="flex justify-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors sm:px-8 sm:py-2.5 sm:text-sm ${
                  activeTab === tab.id ? "text-black" : "text-neutral-400 hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <Motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Panels ─────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {activeTab === "about" ? (
          <Motion.section
            key="about"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8"
          >
            <p className="eyebrow mb-8">01 · About</p>
            <div className="grid gap-6 lg:grid-cols-12">
              <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur lg:col-span-7">
                <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                  What I do
                </h2>
                <p className="mt-4 text-base leading-8 text-neutral-300 sm:text-lg">
                  I work as a computer vision and robotics engineer with a
                  strong backend foundation. I train landmark and image models
                  and ship them into real-time apps. My projects span secure API
                  platforms, real-time systems, and hands-on machine learning.
                </p>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {["Performance", "System design", "Clean architecture", "Real-world deployment"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3"
                      >
                        <span className="font-mono text-xs text-neutral-500">
                          0{i + 1}
                        </span>
                        <span className="text-sm text-neutral-200">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur lg:col-span-5">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  Core stack
                </h3>
                <div className="mt-5 space-y-5">
                  {SKILL_CATEGORIES.map((category) => (
                    <div key={category.label}>
                      <p className="eyebrow mb-2 !tracking-[0.2em]">{category.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <span
                              key={item.name}
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-sm text-neutral-200 transition hover:border-white/30 hover:text-white"
                            >
                              <Icon className="h-3.5 w-3.5" />
                              {item.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </Motion.section>
        ) : null}

        {activeTab === "projects" ? (
          <Motion.div
            key="projects"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Projects />
          </Motion.div>
        ) : null}

        {activeTab === "contact" ? (
          <Motion.section
            key="contact"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8"
          >
            <p className="eyebrow mb-8">03 · Contact</p>
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl font-bold leading-[1.05] sm:text-4xl lg:text-5xl text-balance">
                  Let&apos;s build something that converts.
                </h2>
                <p className="mt-5 max-w-md text-base leading-7 text-neutral-300 sm:text-lg">
                  Need a developer for your next project? Send a message and
                  I&apos;ll reply with a clear plan, scope, and timeline.
                </p>

                <div className="mt-8 space-y-px overflow-hidden rounded-2xl border border-white/10">
                  {CONTACT_LINKS.map((link) => {
                    const Icon = link.icon;
                    const inner = (
                      <>
                        <span className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-neutral-400 transition group-hover:text-white" />
                          <span className="text-sm font-medium text-neutral-200">
                            {link.label}
                          </span>
                        </span>
                        <span className="flex items-center gap-2 font-mono text-xs text-neutral-500">
                          {link.value}
                          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                        </span>
                      </>
                    );
                    const classes =
                      "group flex items-center justify-between bg-white/[0.02] px-4 py-3.5 transition hover:bg-white/[0.06]";
                    return link.action === "copy" ? (
                      <button
                        key={link.label}
                        type="button"
                        onClick={handleCopyEmail}
                        className={`${classes} w-full text-left`}
                      >
                        {inner}
                      </button>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href?.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={classes}
                      >
                        {inner}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-7">
                <ContactPage />
              </div>
            </div>
          </Motion.section>
        ) : null}
      </AnimatePresence>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-6 lg:px-8">
        <div className="hairline mb-6" />
        <div className="flex flex-col items-center justify-between gap-2 pb-4 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-600">
            © 2026 Ron-ron Aspe Rivera
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-600">
            Built with React · Vite · Tailwind
          </p>
        </div>
      </footer>

      <ChatBot />
    </main>
  );
}
