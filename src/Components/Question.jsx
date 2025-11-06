import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Question = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-700/30 last:border-none py-2">
      {/* Question Row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-sm sm:text-base text-gray-400 dark:text-gray-600 flex-shrink-0">
            {index + 1}.
          </span>
          <span className="text-sm sm:text-base text-gray-100 dark:text-gray-700 break-words">
            {question}
          </span>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-2"
        >
          <ChevronDown className="h-5 w-5 text-gray-400 dark:text-gray-600" />
        </motion.div>
      </button>

      {/* Answer (Animated) */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="ml-7 mt-2 text-xs sm:text-sm text-gray-300 dark:text-gray-700 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Question;
