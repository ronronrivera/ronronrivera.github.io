import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Bio = () => {
  return (
    <motion.div
      className="w-full max-w-2xl sm:w-[600px] mt-10 p-6 rounded-2xl  shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl font-bold  mb-4 ">
        <span className="wave-hover">👋</span> About Me
      </h2>

      <div className="text-sm  leading-relaxed space-y-4">
        <p>
          I’m <span className="text-blue-400 font-semibold">Ron-ron Aspe Rivera</span>, 
          a <span className="text-blue-400 font-semibold">Computer Science student</span>, 
          <span className="text-blue-400 font-semibold"> C++ developer</span>, and 
          <span className="text-blue-400 font-semibold"> Full-Stack web developer</span> passionate about building 
          high-performance software and clean, user-focused websites.
        </p>

        <p>
          My core interest lies in creating systems that combine 
          <span className="text-blue-400 font-semibold"> precise mathematical logic, physics simulation,</span> 
          and <span className="text-blue-400 font-semibold">artificial intelligence</span>.  
          I enjoy turning complex problems into elegant, efficient solutions — 
          whether that’s rendering realistic lighting in OpenGL or designing robust back-end architectures.
        </p>

        <p>
          I’m comfortable working with 
          <span className="text-blue-400 font-semibold"> C++</span> (for performance-critical or embedded projects), 
          <span className="text-blue-400 font-semibold"> Python</span> (for automation and AI integration), and 
          <span className="text-blue-400 font-semibold"> JavaScript</span> (for modern web development).  
          By combining these three, I aim to build applications that are both intelligent and efficient.
        </p>

        <p>
          I find peace in quiet environments where I can focus deeply on my ideas.  
          I value precision, clarity, and purpose in everything I do — whether it’s 
          writing code, studying algorithms, or refining a user interface.  
          My long-term goal is to become a <span className="text-blue-400 font-semibold">quantitative software developer</span> 
          <span>{" "}</span> specializing in simulation and AI systems.

        </p>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-5">
      </div>

      <div className="mt-6">
        <p className="text-xs text-gray-500">
          <span className="text-blue-400 font-semibold">“Code with purpose, design with logic, and build with precision.”</span>  
          <span>{" "}</span>This mindset drives every project I take on.
        </p>
      </div>
    </motion.div>
  );
};

export default Bio;
