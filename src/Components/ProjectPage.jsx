
import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projectList = [
    {
        title: "Zombie Horde",
        paragraph: "ZombieHorde is an open source first-person zombie survival shooter written entirely in C++17 with OpenGL 3.3 Core — no game engine, no black boxes, just raw code and mathematics. Set in a pitch-black warehouse lit only by your flashlight, you face endless waves of zombies that grow larger and more relentless with every round. The project is built from the ground up with a fully custom renderer, Phong lighting with a dynamic spotlight, skeletal hand animations loaded via Assimp, a tile-based map system, AABB collision, and a wave spawner — all running smoothly on modest hardware. Whether you're here to play or to learn, every system in the codebase is written to be readable, layered, and open. ",
        link: "#",
        imgSrc: "/project-images/zombie-horde.mp4",
        source: "https://github.com/ronronrivera/Zombie-Horde" ,
        hasUrl: false,
        isSuspended: false,
        inDevelopment: true, 
    },

    {
        title: "Case Forge",
        paragraph: "Most freelancers lose clients not because their work is bad, but because they can't present it well. Writing a case study from scratch takes hours — structuring the problem, polishing the solution, making it look professional. Most skip it entirely and lose the deal. Caseforge solves that. A freelancer fills in a short form describing their project in plain language — rough notes, bullet points, anything — and the platform uses the Gemini AI API to rewrite it into polished, professional case study copy. The result is rendered into a beautifully designed PDF template, ready to send to a client or add to a portfolio.The product runs on a credit system. Every new user gets 2 free credits — enough for one complete generation. Watching your rough notes transform into something that actually looks like a real agency deliverable is the moment that converts free users into paying ones.",
        link: "https://case-forge.vercel.app/",
        imgSrc: "/project-images/case-forge.png",
        source: "https://github.com/ronronrivera/",
        hasUrl: true,
        isSuspended: false,
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
    },

    {
        title: "Recruify",
        paragraph: "A SaaS hiring platform I built using the MERN stack (MongoDB, Express, React, and Node.js). It allows companies to post jobs, manage applications, and track candidates efficiently. The platform supports secure authentication, role-based access for applicants and employers, and real-time updates for application status. I designed it to be fast, scalable, and user-friendly, demonstrating my ability to integrate complex backend logic with a polished frontend experience for a production-ready SaaS application.",
        imgSrc: "project-images/hiring-platform.png",
        link: "https://recruify.vercel.app/",
        source: "https://github.com/ronronrivera/hiring-platform/",
        hasUrl: true,
        isSuspended: false,
        inDevelopment: false,
    },
    {
        title: "Interview Platform",
        paragraph: "Interview Platform is a full-stack web application designed for conducting remote technical interviews and practice sessions in one integrated environment. It combines live video calls and real-time chat (via Stream), collaborative code editing with safe code execution (using the Piston API), and session creation, scheduling, and management backed by MongoDB. The platform uses Clerk for authentication, Inngest for background event orchestration, and provides basic analytics for sessions. Built with a React + Vite + Tailwind frontend and a Node.js/Express backend, it focuses on reducing tooling friction so interviewers and candidates can concentrate on solving problems rather than managing multiple tools.",
        imgSrc: "/project-images/interview-platform.jpeg",
        link: "https://gethioredio.vercel.app/",
        source: "https://github.com/ronronrivera/Interview-Platform",
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
        isSuspended: false,
        inDevelopment: false,
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
