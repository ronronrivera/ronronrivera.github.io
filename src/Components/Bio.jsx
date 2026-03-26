import React from "react";
import { motion as Motion } from "framer-motion";

const Bio = () => {
  return (
    <Motion.div
      className="w-full max-w-2xl sm:w-[600px] mt-10 p-6 rounded-2xl shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl font-bold mb-4 ">
        <span className="wave-hover">👋</span> About Me
      </h2>

      <div className="text-sm leading-relaxed space-y-4">
        <p>
          I’m <span className="text-blue-400 font-semibold">Ron-ron Aspe Rivera</span>,
          a <span className="text-blue-400 font-semibold">Software Engineer</span>,
          <span className="text-blue-400 font-semibold"> Backend Specialist</span>, and
          <span className="text-blue-400 font-semibold"> Graphics Engineer</span> focused on building reliable
          software across web platforms and real-time rendering systems.
        </p>

        <p>
          My core interest is building systems that combine
          <span className="text-blue-400 font-semibold"> backend architecture, real-time interaction,</span>
          and <span className="text-blue-400 font-semibold">graphics programming</span>.
          From projects like <span className="text-blue-400 font-semibold">Zombie Horde</span> in C++/OpenGL to
          full-stack platforms such as <span className="text-blue-400 font-semibold">Recruify</span> and
          <span className="text-blue-400 font-semibold"> Case Forge</span>, I enjoy turning complex ideas into
          practical, production-ready results.
        </p>

        <p>
          I’m comfortable working with
          <span className="text-blue-400 font-semibold"> C++</span> (for performance-critical or embedded projects),
          <span className="text-blue-400 font-semibold"> Python</span> (for automation and AI integration),
          <span className="text-blue-400 font-semibold"> JavaScript</span> (for modern web development), and
          <span className="text-blue-400 font-semibold"> n8n</span> (for workflow automation and API orchestration).
          By combining these tools, I aim to build applications and automations that are both intelligent and efficient.
        </p>

        <p>
          I find peace in quiet environments where I can focus deeply on my ideas.
          I value precision, clarity, and purpose in everything I do — whether it’s
          writing code, building automation pipelines, studying algorithms, or refining a user interface.
          My long-term goal is to become a <span className="text-blue-400 font-semibold">quantitative software developer</span>
          specializing in simulation, AI systems, and high-level automation.
        </p>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-5"></div>

      <div className="mt-6">
        <p className="text-xs text-gray-500">
          <span className="text-blue-400 font-semibold">“Code with purpose, design with logic, and build with precision.”</span>
          <span>{" "}</span>This mindset drives every project I take on.
        </p>
      </div>
    </Motion.div>
  );
};

export default Bio;
