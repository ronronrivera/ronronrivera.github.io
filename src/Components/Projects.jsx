import { useEffect, useMemo, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/projects.js";

const isVideoMedia = (source = "") => source.endsWith(".mp4") || source.endsWith(".webm");

function StatusBadge({ inDevelopment }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-300">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          inDevelopment ? "bg-neutral-500" : "bg-white"
        }`}
      />
      {inDevelopment ? "In Dev" : "Production"}
    </span>
  );
}

function Media({ src, alt, className }) {
  return isVideoMedia(src) ? (
    <video src={src} autoPlay muted loop playsInline className={className} />
  ) : (
    <img src={src} alt={alt} className={className} />
  );
}

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
        className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-black/80 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <Motion.div
          className="my-auto w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-3xl border border-white/12 bg-neutral-950 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.6)] sm:max-h-[calc(100vh-4rem)] sm:p-8"
          initial={{ scale: 0.96, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="eyebrow">Project detail</p>
              <h3 className="font-display text-3xl font-bold text-white">{project.title}</h3>
              <p className="text-base leading-7 text-neutral-300">{project.summary}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/15 p-2 text-neutral-300 transition hover:border-white/40 hover:text-white"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-black">
            <Media
              src={project.image}
              alt={project.title}
              className="h-60 w-full object-cover"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
                What I built
              </h4>
              <p className="text-sm leading-7 text-neutral-300">{project.whatBuilt}</p>
            </div>

            <div className="space-y-2 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
                Result
              </h4>
              <p className="text-sm leading-7 text-neutral-300">{project.result}</p>
            </div>
          </div>

          <div className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
              Tech stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/12 bg-black/50 px-3 py-1 text-xs font-medium text-neutral-200"
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
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            ) : null}

            {project.sourceUrl ? (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                <Github className="h-4 w-4" />
                Source
              </a>
            ) : null}
          </div>
        </Motion.div>
      </Motion.div>
    </AnimatePresence>
  );
}

function FeaturedProject({ project, index, onOpen }) {
  return (
    <article className="group grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur lg:grid-cols-2">
      <div className="relative overflow-hidden border-b border-white/10 bg-black lg:border-b-0 lg:border-r">
        <Media
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100 lg:h-full"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-200 backdrop-blur">
          Featured
        </span>
      </div>

      <div className="flex flex-col p-7 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-neutral-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <StatusBadge inDevelopment={project.inDevelopment} />
        </div>

        <h3 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-3 text-base leading-7 text-neutral-300">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            View case study
            <ArrowUpRight className="h-4 w-4 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
          {project.sourceUrl ? (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40"
            >
              <Github className="h-4 w-4" />
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const orderedProjects = useMemo(() => PROJECTS.slice(0, 9), []);
  const [featured, ...rest] = orderedProjects;

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
      <p className="eyebrow mb-4">02 · Selected work</p>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="max-w-2xl font-display text-3xl font-bold leading-[1.05] text-white sm:text-4xl lg:text-5xl text-balance">
          Built for real users, not just demos.
        </h2>
        <p className="max-w-sm text-sm leading-7 text-neutral-400">
          Each project lists what I built, the stack I used, and the result it
          produced.
        </p>
      </div>

      {featured ? (
        <div className="mb-6">
          <FeaturedProject project={featured} index={0} onOpen={setSelectedProject} />
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <article
            key={project.id}
            className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/25"
          >
            <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Media
                src={project.image}
                alt={project.title}
                className="h-44 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <span className="absolute left-3 top-3 font-mono text-xs text-neutral-300 mix-blend-difference">
                {String(i + 2).padStart(2, "0")}
              </span>
            </div>

            <div className="mb-4 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                <StatusBadge inDevelopment={project.inDevelopment} />
              </div>
              <p className="text-sm leading-7 text-neutral-400">{project.summary}</p>
            </div>

            <div className="mb-5 flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Details
                <ArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-white" />
              </button>
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
