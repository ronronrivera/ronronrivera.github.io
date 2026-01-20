
import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projectList = [
    {
        title: "My Portfolio",
        paragraph: "My portfolio is a modern, responsive website built with ReactJS,TailwindCSS, Express and NodeJS to share my skills, projects, and background as a computer science student. It has smooth animations, a clean and simple design, a dark/light mode toggle, and even a built-in AI chatbot so visitors can interact with me in a more fun and personal way",
        imgSrc: "/project-images/portfolio.png",
        link: "https://ronronrivera.github.io/",
        source: "https://github.com/ronronrivera/My-Portfolio",
        hasUrl: true,
        isSuspended: false,
        inDevelopment: false,
    },

    {
        title: "Recruify",
        paragraph: "A SaaS hiring platform I built using the MERN stack (MongoDB, Express, React, and Node.js). It allows companies to post jobs, manage applications, and track candidates efficiently. The platform supports secure authentication, role-based access for applicants and employers, and real-time updates for application status. I designed it to be fast, scalable, and user-friendly, demonstrating my ability to integrate complex backend logic with a polished frontend experience for a production-ready SaaS application.",
        imgSrc: "project-images/hiring-platform.png",
        link: "https://recruify.vercel.app/",
        source: "https://github.com/ronronrivera/hiring-platform/",
        hasUrl: true,
        isSuspended: false,
        inDevelopment: true,
    },
    {
        title: "Chat App",
        paragraph: "A real-time chat app I built using the MERN stack (MongoDB, Express, React, and Node.js). It lets users create accounts, log in securely with JWT authentication, and chat instantly through Socket.io. The app also supports image sharing and plays a sound when a new message arrives — making conversations feel more alive. I designed it to be fast, responsive, and scalable, showing how I can bring together both backend and frontend technologies into one seamless, production-ready web app.",
        imgSrc: "project-images/chat-app.png",
        link: "https://chat-app-iwxv3.sevalla.app/",
        source: "https://github.com/ronronrivera/chat-app/",
        hasUrl: true,
        isSuspended: false,
        inDevelopment: false,
    },
    {
        title: "E-Commerce Store",
        paragraph: "A full-featured e-commerce web app I developed using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to browse products, add items to their cart, and securely pay through Stripe. The platform includes an admin dashboard for managing products, tracking analytics, and generating coupon discounts for loyal customers. With JWT authentication, Redis caching, and a responsive UI built with Tailwind CSS, it delivers a smooth, secure, and professional shopping experience — showcasing my ability to build complex, scalable, and business-ready web applications from scratch.",
        imgSrc: "project-images/commerce.jpg",
        link: "https://simple-commerce-t58k.onrender.com/login",
        source: "https://github.com/ronronrivera/e-commerce-app",
        hasUrl: true,
        isSuspended: true,
        inDevelopment: false,
    },
    {
        title: "Interview Platform",
        paragraph: "Interview Platform is a full-stack web application designed for conducting remote technical interviews and practice sessions in one integrated environment. It combines live video calls and real-time chat (via Stream), collaborative code editing with safe code execution (using the Piston API), and session creation, scheduling, and management backed by MongoDB. The platform uses Clerk for authentication, Inngest for background event orchestration, and provides basic analytics for sessions. Built with a React + Vite + Tailwind frontend and a Node.js/Express backend, it focuses on reducing tooling friction so interviewers and candidates can concentrate on solving problems rather than managing multiple tools.",
        imgSrc: "/project-images/interview-platform.jpeg",
        link: "https://gethired-io.onrender.com/",
        source: "https://github.com/ronronrivera/Interview-Platform",
        hasUrl: true,
        isSuspended: true,
        inDevelopment: false,

    },
    {
        title: "Personal Neovim Setup",
        paragraph: "I developed a personal Neovim setup designed for speed, efficiency, and a smooth coding experience. It includes tools for code completion, syntax highlighting, project navigation, file exploration, emoji picking, and auto-closing brackets and quotes. The setup integrates popular plugins like Treesitter for advanced syntax parsing, Telescope for fuzzy file searching, Neo-tree for file management, and Mason for LSP server management, along with smaller dependencies that enhance functionality, such as icons, snippets, and color previews. By using a lightweight, modular structure with lazy.nvim for plugin management, the configuration loads only what’s necessary, reducing RAM usage while keeping Neovim responsive. This setup is fully customizable, allowing me to add or update plugins easily while maintaining a fast, organized, and feature-rich coding environment.",
        imgSrc: "/project-images/nvim.png",
        link: "#",
        source: "https://github.com/ronronrivera/neovim-setup",
        hasUrl: false,
        isSuspended: false,
        inDevelopment: false
    }
]

const ProjectPage = () => {
    return (

        <motion.div
            className="flex justify-center items-center py-10 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div>
                <h3 className='text-2xl font-extrabold flex justify-center items-center text-gray-50 dark:text-gray-900 '>What I've Built</h3>
                {projectList.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </motion.div>
    )
}

export default ProjectPage
