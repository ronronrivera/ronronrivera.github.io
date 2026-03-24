import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Download, Mail } from "lucide-react";
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
  SiDocker,
  SiGmail,
  SiOpengl,
  SiLeetcode,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
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
      { name: "Docker", icon: SiDocker },
      { name: "Azure", icon: FaMicrosoft },
      { name: "n8n", icon: BsLightningChargeFill },
      { name: "OpenGL", icon: SiOpengl },
    ],
  },
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
    <main className="relative z-10 bg-black text-white">
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid items-start gap-8 lg:grid-cols-[1fr_auto]"
        >
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">Full-Stack Developer</p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Ron-ron Aspe Rivera
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-neutral-300 sm:text-xl">
              I build modern full-stack products that feel polished on the frontend and stay reliable on the backend.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setActiveTab("contact")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-black transition hover:bg-neutral-200"
              >
                <Mail className="h-4 w-4" />
                Hire Me
              </button>

              <a
                href="https://drive.google.com/file/d/1qytfzLDfg7WnHbGxYP_Zdjy_iV-lBih0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-neutral-400"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          <div className="mx-auto lg:mx-0 lg:justify-self-end">
            <img
              src="/me.jpg"
              alt="Ron-ron Rivera profile"
              className="h-40 w-40 rounded-full border-2 border-neutral-700 object-cover shadow-xl sm:h-52 sm:w-52 lg:h-64 lg:w-64"
            />
          </div>
        </Motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setActiveTab("about")}
            className={`min-w-40 rounded-lg px-7 py-3 text-base font-bold uppercase tracking-wide transition ${
              activeTab === "about"
                ? "bg-white text-black"
                : "border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-neutral-500"
            }`}
          >
            About Me
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("projects")}
            className={`min-w-40 rounded-lg px-7 py-3 text-base font-bold uppercase tracking-wide transition ${
              activeTab === "projects"
                ? "bg-white text-black"
                : "border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-neutral-500"
            }`}
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("contact")}
            className={`min-w-40 rounded-lg px-7 py-3 text-base font-bold uppercase tracking-wide transition ${
              activeTab === "contact"
                ? "bg-white text-black"
                : "border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-neutral-500"
            }`}
          >
            Contact
          </button>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {activeTab === "about" ? (
          <Motion.section
            key="about"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
          >
            <div className="grid gap-6 lg:grid-cols-12">
              <article className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.45)] lg:col-span-7">
                <h2 className="mb-4 text-3xl font-black leading-tight sm:text-4xl">What I Do</h2>
                <p className="text-base leading-8 text-neutral-300 sm:text-lg">
                  I specialize in performance-oriented C++ development and backend systems using Node.js and modern databases.
                  My focus is building scalable systems, real-time applications, and efficient software architectures.
                </p>
                <div className="mt-4 space-y-2 text-base leading-7 text-neutral-300 sm:text-lg">
                  <p>I care about:</p>
                  <ul className="list-disc pl-6">
                    <li>Performance</li>
                    <li>System design</li>
                    <li>Clean architecture</li>
                    <li>Real-world deployment</li>
                  </ul>
                </div>
              </article>

              <article className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.45)] lg:col-span-5">
                <h3 className="mb-4 text-2xl font-black sm:text-3xl">Core Stack</h3>
                <div className="space-y-4">
                  {SKILL_CATEGORIES.map((category) => (
                    <div key={category.label} className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">{category.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => {
                          const IconComponent = item.icon;
                          return (
                            <span
                              key={item.name}
                              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black px-3 py-1 text-sm text-neutral-200"
                            >
                              <IconComponent className="h-4 w-4" />
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
            className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
          >
            <div className="mb-8 space-y-4 sm:mb-10">
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">Let&apos;s Build Something That Converts</h2>
              <p className="max-w-3xl text-base leading-7 text-neutral-300 sm:text-lg">
                Need a developer for your next project? Send a message and I&apos;ll reply with a clear plan, scope, and timeline.
              </p>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 text-left text-sm text-neutral-200 transition hover:border-neutral-600"
              >
                <SiGmail className="h-4 w-4" />Email
              </button>
              <a
                href="https://www.linkedin.com/in/ronronrivera/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 text-sm text-neutral-200 transition hover:border-neutral-600"
              >
                <FaLinkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://www.facebook.com/ronron.rivera42"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 text-sm text-neutral-200 transition hover:border-neutral-600"
              >
                <FaFacebookSquare className="h-4 w-4" /> Facebook
              </a>
              <a
                href="tel:+639935809668"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 text-sm text-neutral-200 transition hover:border-neutral-600"
              >
                <FaPhoneAlt className="h-4 w-4" /> +63 993 580 9668
              </a>
              <a
                href="https://github.com/ronronrivera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 text-sm text-neutral-200 transition hover:border-neutral-600"
              >
                <FaGithub className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://leetcode.com/u/ronron_rivera/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/70 p-4 text-sm text-neutral-200 transition hover:border-neutral-600"
              >
                <SiLeetcode className="h-4 w-4" /> LeetCode
              </a>
            </div>

            <ContactPage />
          </Motion.section>
        ) : null}
      </AnimatePresence>

      <ChatBot />
    </main>
  );
}
