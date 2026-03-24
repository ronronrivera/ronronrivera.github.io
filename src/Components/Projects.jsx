import { useEffect, useMemo, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../data/projects.js";

const isVideoMedia = (source = "") => source.endsWith(".mp4") || source.endsWith(".webm");

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <Motion.div
        className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <Motion.div
          className="w-full max-w-3xl rounded-2xl border border-neutral-700 bg-neutral-950 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.55)] sm:p-8"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Project Details
              </p>
              <h3 className="text-3xl font-black text-white">{project.title}</h3>
              <p className="text-base leading-7 text-neutral-300">{project.summary}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-neutral-700 p-2 text-neutral-200 transition hover:border-neutral-500 hover:text-white"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6 overflow-hidden rounded-xl border border-neutral-800 bg-black">
            {isVideoMedia(project.image) ? (
              <video
                src={project.image}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="h-56 w-full object-cover"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
              <h4 className="text-lg font-bold text-white">What I Built</h4>
              <p className="text-sm leading-7 text-neutral-300">{project.whatBuilt}</p>
            </div>

            <div className="space-y-3 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
              <h4 className="text-lg font-bold text-white">Result</h4>
              <p className="text-sm leading-7 text-neutral-300">{project.result}</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
            <h4 className="text-lg font-bold text-white">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-700 bg-black px-3 py-1 text-xs font-semibold text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            ) : null}

            {project.sourceUrl ? (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-600 px-5 py-3 text-sm font-bold text-white transition hover:border-neutral-400"
              >
                <Github className="h-4 w-4" />
                Source Code
              </a>
            ) : null}
          </div>
        </Motion.div>
      </Motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const orderedProjects = useMemo(() => PROJECTS.slice(0, 9), []);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-8 space-y-4 sm:mb-10">
        <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
          Built for Real Users, Not Just Demos
        </h2>
        <p className="max-w-3xl text-base leading-7 text-neutral-300 sm:text-lg">
          Every project below includes what I built, the tech stack I used, and the result it produced.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {orderedProjects.map((project) => (
          <article
            key={project.id}
            className="group flex h-full flex-col rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 shadow-[0_14px_34px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:border-neutral-600"
          >
            <div className="mb-4 overflow-hidden rounded-xl border border-neutral-800 bg-black">
              {isVideoMedia(project.image) ? (
                <video
                  src={project.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-44 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              )}
            </div>

            <div className="mb-4 space-y-3">
              <h3 className="text-2xl font-black text-white">{project.title}</h3>
              <p className="text-sm leading-7 text-neutral-300">{project.summary}</p>
            </div>

            <div className="mb-5 flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-700 bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-black transition hover:bg-neutral-200"
              >
                Details
              </button>

              {project.inDevelopment ? (
                <span className="rounded-full border border-amber-700 bg-amber-950/60 px-3 py-2 text-xs font-bold uppercase tracking-wide text-amber-200">
                  In Development
                </span>
              ) : (
                <span className="rounded-full border border-emerald-700 bg-emerald-950/50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-emerald-200">
                  Production
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </section>
  );
}
