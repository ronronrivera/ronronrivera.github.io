
import React, { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router'
import ProjectCard from './ProjectCard'

const projectList = [
    {
        title: "Zombie Horde",
        paragraph: "ZombieHorde is an open source first-person zombie survival shooter written entirely in C++17 with OpenGL 3.3 Core, no game engine, no black boxes, just raw code and mathematics. Set in a pitch-black warehouse lit only by your flashlight, you face endless waves of zombies that grow larger and more relentless with every round. The project is built from the ground up with a fully custom renderer, Phong lighting with a dynamic spotlight, skeletal hand animations loaded via Assimp, a tile-based map system, AABB collision, and a wave spawner, all running smoothly on modest hardware. Whether you're here to play or to learn, every system in the codebase is written to be readable, layered, and open. ",
        link: "#",
        imgSrc: "/project-images/zombie-horde.mp4",
        source: "https://github.com/ronronrivera/Zombie-Horde" ,
        hasUrl: false,
        isSuspended: false,
        inDevelopment: true, 
    },

    {
        title: "Case Forge",
        paragraph: "Most freelancers lose clients not because their work is bad, but because they can't present it well. Writing a case study from scratch takes hours, structuring the problem, polishing the solution, making it look professional. Most skip it entirely and lose the deal. Caseforge solves that. A freelancer fills in a short form describing their project in plain language, rough notes, bullet points, anything, and the platform uses the Gemini AI API to rewrite it into polished, professional case study copy. The result is rendered into a beautifully designed PDF template, ready to send to a client or add to a portfolio.The product runs on a credit system. Every new user gets 2 free credits, enough for one complete generation. Watching your rough notes transform into something that actually looks like a real agency deliverable is the moment that converts free users into paying ones.",
        link: "https://case-forge.vercel.app/",
        imgSrc: "/project-images/case-forge.png",
        source: "https://github.com/ronronrivera/",
        hasUrl: true,
        isSuspended: false,
        inDevelopment: false, 
    },

    {
        title: "Personal Neovim Setup",
        paragraph: "Not a project, but a way of working. I write code in Neovim on Linux, no mouse, no IDE hand-holding. Treesitter, Telescope, LSP via Mason, lazy.nvim for plugin management. This is just how I work and I think it says something about how I approach the craft.",
        imgSrc: "/project-images/nvim.png",
        link: "#",
        source: "https://github.com/ronronrivera/neovim-setup",
        hasUrl: false,
        isSuspended: false,
        inDevelopment: false
    },

    {
        title: "Recruify",
        paragraph: "I built Recruify to get a real grip on authentication and role-based access control — two things that break most beginner apps. It's a hiring platform where employers can post jobs and track candidates, while applicants have their own separate view and application flow. JWT auth, role separation, real-time status updates. It's not finished, but the core system works and it taught me more about access control than any tutorial did.",
        imgSrc: "project-images/hiring-platform.png",
        link: "https://recruify.vercel.app/",
        source: "https://github.com/ronronrivera/hiring-platform/",
        hasUrl: true,
        isSuspended: false,
        inDevelopment: false,
    },
    {
        title: "Interview Platform",
        paragraph: "I built this to explore third-party API integration at scale, Stream for live video and chat, Piston API for running code safely in the browser, Clerk for auth, Inngest for background jobs. The goal wasn't to invent something new, it was to learn how to wire together complex services without the whole thing falling apart. It mostly doesn't fall apart.",
        imgSrc: "/project-images/interview-platform.jpeg",
        link: "https://gethioredio.vercel.app/",
        source: "https://github.com/ronronrivera/Interview-Platform",
        hasUrl: true,
        isSuspended: false,
        inDevelopment: false,

    },
 
    {
        title: "E-Commerce Store",
        paragraph: "Built this to learn how real payment flows work, not fake ones. Stripe checkout, webhook handling, Redis caching, an admin dashboard with analytics and coupon logic. It's a standard learning project on the surface, but I used it to understand the parts most tutorials skip: cache invalidation, webhook reliability, and admin-side data management.",
        imgSrc: "project-images/commerce.jpg",
        link: "https://simple-commerce-t58k.onrender.com/login",
        source: "https://github.com/ronronrivera/e-commerce-app",
        hasUrl: true,
        isSuspended: false,
        inDevelopment: false,
    },
   {
        title: "Chat App",
        paragraph: "My first real dive into WebSockets. I built this to understand how Socket.io actually works under the hood — not just copy-paste it. Users can sign up, log in with JWT, and chat in real time with image sharing and message sound notifications. It's a learning project and I'm not pretending otherwise, but everything in it I understand line by line.",
        imgSrc: "project-images/chat-app.png",
        link: "https://chat-app-iwxv3.sevalla.app/",
        source: "https://github.com/ronronrivera/chat-app/",
        hasUrl: true,
        isSuspended: false,
        inDevelopment: false,
    },


]

const slugifyProjectTitle = (title = '') =>
    title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

const ProjectPage = () => {
    const location = useLocation();

    const selectedProjectSlug = useMemo(() => {
        const params = new URLSearchParams(location.search);
        const selectedProject = params.get('project');

        if (!selectedProject) return null;

        return slugifyProjectTitle(selectedProject);
    }, [location.search]);

    useEffect(() => {
        if (!selectedProjectSlug) return;

        const targetElement = document.getElementById(`project-${selectedProjectSlug}`);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [selectedProjectSlug]);

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
                    <ProjectCard
                        key={index}
                        project={project}
                        cardId={`project-${slugifyProjectTitle(project.title)}`}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default ProjectPage
