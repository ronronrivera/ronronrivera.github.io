
import React from "react";
import Question from "./Question";
import {motion} from "framer-motion"


const questions = [
  {
    question: "How do you usually start a new project?",
    answer:
      "I begin by understanding your goals, target users, and technical requirements. Then I propose a clear development plan, timeline, and milestones before writing any code.",
  },
  {
    question: "What information do you need from me to get started?",
    answer:
      "I’ll need project details such as goals, preferred technology (if any), design references, and required features. If it’s a redesign or existing app, access to current files or APIs helps a lot.",
  },
  {
    question: "How do you handle communication and progress updates?",
    answer:
      "I usually provide updates through email or chat (e.g., Discord, Slack, or Telegram). For larger projects, I can share progress weekly with brief summaries, demos, or GitHub commits.",
  },
  {
    question: "What’s your typical project timeline?",
    answer:
      "It depends on complexity. A small website or tool may take a week or two, while a complex app or graphics project might take several weeks. I always provide a realistic estimate before starting.",
  },
  {
question: "Do you require upfront payment?",
    answer:
      "For freelance projects, yes — I usually ask for a 30–50% upfront payment to secure the project, with the rest due upon delivery or milestone completion. This keeps things fair and professional for both sides.",
  },
  {
    question: "Can you work with an existing codebase?",
    answer:
      "Yes. I can review, refactor, and build on existing code if it’s well-structured or documented. If not, I may suggest partial rewrites to ensure maintainability and performance.",
  },
  {
    question: "Do you provide post-project support or maintenance?",
    answer:
      "Yes. I can provide bug fixes, performance improvements, or feature updates after launch — either hourly or as a maintenance plan depending on the scope.",
  },
  {
    question: "What happens if I want changes after completion?",
    answer:
      "Small revisions are included, but major feature changes outside the original scope will require a new agreement. I make sure everything is clearly discussed to avoid surprises.",
  },
  {
    question: "Do you work with a team or solo?",
    answer:
      "I mainly work solo for most freelance projects, but I can collaborate with designers or other developers if the project requires it. I’m comfortable integrating into existing workflows or teams.",
  },
  {
    question: "Can you sign an NDA (Non-Disclosure Agreement)?",
    answer:
      "Yes, absolutely. I respect client confidentiality and can sign an NDA before we begin discussing sensitive project details.",
  },
  {
    question: "What’s your preferred tech stack?",
    answer:
      "For full-stack work: React, Node.js, Express, and MongoDB. For C++ work: modern C++ (17/20), OpenGL, and STL. I adapt depending on the project’s requirements.",
  },
  {
    question: "How do you ensure code quality and performance?",
    answer:
      "I follow best practices like modular design, consistent naming, and version control. I test thoroughly, profile code where needed, and prioritize efficiency — especially for C++ or real-time systems.",
  },
  {
  question: "Do you offer refunds?",
  answer: "Refunds are only available if I haven’t started the project or if there’s a valid issue that prevents me from completing the work. Once work has begun, partial refunds depend on progress.",
  },
  
];

const TechnicalQuestions = () => {
  return (
    <motion.div
      initial={{opacity: 0, y:20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
      className="w-full max-w-2xl sm:w-[600px] p-4 sm:p-6 mx-auto shadow-xl">
      {questions.map((q, i) => (
        <Question key={i} question={q.question} answer={q.answer} index={i} />
      ))}
    </motion.div>
  );
};

export default TechnicalQuestions;
