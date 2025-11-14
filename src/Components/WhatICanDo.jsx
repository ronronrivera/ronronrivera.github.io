import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const WhatICanDo = () => {
  const services = [
    {
      num: "01",
      title: "Full-Stack Web Development (MERN)",
      desc: "I build fast, scalable, and maintainable web applications using MongoDB, Express, React, and Node.js — ensuring both strong backend logic and smooth user experience."
    },
    {
      num: "02",
      title: "Real-Time Functionality",
      desc: "From live chat to instant notifications, I integrate real-time features using Socket.io for truly interactive user experiences."
    },
    {
      num: "03",
      title: "Secure Authentication Systems",
      desc: "I implement robust user login flows with JWT, access/refresh tokens, and role-based access control to keep user data protected."
    },
    {
      num: "04",
      title: "E-Commerce Solutions",
      desc: "I create complete store systems with carts, checkout, discount logic, and secure Stripe payments — optimized for both customers and admins."
    },
    {
      num: "05",
      title: "Responsive UI/UX Design",
      desc: "Every project I build is mobile-friendly, intuitive, and modern — powered by React, Vite, and Tailwind CSS."
    },
    {
      num: "06",
      title: "Cloud & API Integrations",
      desc: "I connect applications with Cloudinary for image management, Resend for email systems, and other third-party APIs to expand functionality."
    },
    {
      num: "07",
      title: "Performance & Security Optimization",
      desc: "I focus on speed, stability, and security — using Redis caching, optimized queries, and encryption best practices for dependable performance."
    },
    {
      num: "08",
      title: "n8n Workflow Automation & API Orchestration",
      desc: "I design scalable automations using n8n — integrating multiple APIs, building background tasks, webhooks, data pipelines, and fully automated business workflows without relying on expensive SaaS tools."
    }
  ];

  return (
    <motion.div
      className="w-full max-w-2xl sm:w-[600px] p-6 rounded-2xl shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl font-bold mb-4">💼 What I Can Do for You</h2>

      <p className="text-sm leading-relaxed mb-4">
        I design and develop <span className="text-blue-400 font-semibold">modern, high-performance web applications</span> that bring real value to clients — combining strong backend logic, responsive design, and seamless user experience.
      </p>

      <p className="text-sm leading-relaxed mb-6">
        Whether you’re looking for a <span className="text-blue-400 font-semibold">real-time communication platform</span> or a <span className="text-blue-400 font-semibold">secure, data-driven e-commerce system</span>, I can help you build it from concept to deployment — clean, fast, and reliable.
      </p>

      <div className="space-y-6 mt-6">
        {services.map(({ num, title, desc }, index) => (
          <div key={index} className="flex gap-4">
            <span className="text-blue-500 text-lg font-bold w-8">{num}</span>
            <div>
              <h3 className="text-sm font-semibold mb-1">{title}</h3>
              <p className="text-xs leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6">
        <h3 className="text-sm font-semibold mb-2">📞 Contact Me</h3>
        <div className="flex flex-col gap-2 text-sm ">
          <div className="flex items-center gap-2">
            <Mail size={15} className="text-blue-400" />
            <a
              href="mailto:ronaspe42@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              ronaspe42@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={15} className="text-blue-400" />
            <span>+63 993 580 9668</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs ">
          <span className="text-blue-400 font-semibold">Let’s build something that stands out.</span> I’m dedicated to writing clean code, solving complex problems, and delivering results that align with your business goals.
        </p>
      </div>
    </motion.div>
  );
};

export default WhatICanDo;
