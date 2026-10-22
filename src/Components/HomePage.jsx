import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Download, ArrowUpRight, Copy, GraduationCap, Compass } from "lucide-react";
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
import ChatBot from "./ChatBot.jsx";
import { techStyle } from "../lib/langColors.js";

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

// Email assembled from parts so the raw address never appears as a literal in
// the source, and is shown obfuscated to discourage scraping bots.
const EMAIL_PARTS = ["ronaspe42", "gmail", "com"];
const EMAIL_DISPLAY = `${EMAIL_PARTS[0]} [at] ${EMAIL_PARTS[1]} (dot) ${EMAIL_PARTS[2]}`;
const EMAIL_ADDRESS = `${EMAIL_PARTS[0]}@${EMAIL_PARTS[1]}.${EMAIL_PARTS[2]}`;
const PHONE_NUMBER = "+63 993 580 9668";

const CONTACT_LINKS = [
  { label: "Email", value: EMAIL_DISPLAY, icon: SiGmail, copy: EMAIL_ADDRESS },
  { label: "Phone", value: PHONE_NUMBER, icon: FaPhoneAlt, copy: PHONE_NUMBER },
  { label: "LinkedIn", value: "in/ronronrivera", icon: FaLinkedin, href: "https://www.linkedin.com/in/ronronrivera/" },
  { label: "GitHub", value: "@ronronrivera", icon: FaGithub, href: "https://github.com/ronronrivera" },
  { label: "Facebook", value: "ronron.rivera42", icon: FaFacebookSquare, href: "https://www.facebook.com/ronron.rivera42" },
];

const FOCUS_ITEMS = [
  "Intelligent systems: LLMs and computer vision",
  "Studying electronics and mechanical engineering to move into robotics",
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("about");

  const handleCopy = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(`${label} copied to clipboard`);
    } catch {
      toast.error(`Could not copy ${label.toLowerCase()}`);
    }
  };

  return (
    <main className="relative text-white">
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-24 text-center sm:px-6 sm:pt-32 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="mx-auto font-display text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Software Engineer
            <br />
            <span className="text-neutral-400">
              Aspiring Computer Vision and Robotics Engineer
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            I&apos;m still an aspiring computer vision and robotics engineer, not
            working in those fields yet, but I do have hands-on experience in
            full-stack development.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://drive.google.com/file/d/1SK2RZXkqIbvLN4ye6r7enkRyI9fj9Opx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/[0.06]"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
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

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Education */}
              <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur">
                <div className="flex items-center gap-2 text-neutral-400">
                  <GraduationCap className="h-4 w-4" />
                  <p className="eyebrow !tracking-[0.25em]">Education</p>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                  Caraga State University
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-neutral-400">
                  BS Computer Science · Undergraduate
                </p>
                <p className="mt-4 text-base leading-7 text-neutral-300">
                  Currently pursuing my Computer Science degree, with a focus on
                  intelligent systems.
                </p>
              </article>

              {/* Currently */}
              <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur">
                <div className="flex items-center gap-2 text-neutral-400">
                  <Compass className="h-4 w-4" />
                  <p className="eyebrow !tracking-[0.25em]">Currently</p>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                  What I&apos;m focused on
                </h3>
                <div className="mt-5 space-y-3">
                  {FOCUS_ITEMS.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3"
                    >
                      <span className="font-mono text-xs text-neutral-500">
                        0{i + 1}
                      </span>
                      <span className="text-sm leading-6 text-neutral-200">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* Core stack */}
            <article className="mt-6 rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur sm:p-9">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Core stack
              </h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {SKILL_CATEGORIES.map((category) => (
                  <div key={category.label}>
                    <p className="eyebrow mb-2 !tracking-[0.2em]">{category.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => {
                        const Icon = item.icon;
                        const style = techStyle(item.name);
                        return (
                          <span
                            key={item.name}
                            style={style}
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
                  Need a developer for your next project? Reach me on any of
                  these and I&apos;ll reply with a clear plan, scope, and
                  timeline.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-px overflow-hidden rounded-2xl border border-white/10">
                  {CONTACT_LINKS.map((link) => {
                    const Icon = link.icon;
                    const isCopy = Boolean(link.copy);
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
                          {isCopy ? (
                            <Copy className="h-3.5 w-3.5 transition group-hover:text-white" />
                          ) : (
                            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                          )}
                        </span>
                      </>
                    );
                    const classes =
                      "group flex items-center justify-between bg-white/[0.02] px-5 py-4 transition hover:bg-white/[0.06]";
                    return isCopy ? (
                      <button
                        key={link.label}
                        type="button"
                        onClick={() => handleCopy(link.copy, link.label)}
                        className={`${classes} w-full text-left`}
                      >
                        {inner}
                      </button>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes}
                      >
                        {inner}
                      </a>
                    );
                  })}
                </div>
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
