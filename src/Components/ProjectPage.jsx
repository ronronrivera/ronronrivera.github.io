
import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projectList = [
  {
    title: "My Portfolio",
    paragraph: "My portfolio is a modern, responsive website built with ReactJS,TailwindCSS, Express and NodeJS to share my skills, projects, and background as a computer science student. It has smooth animations, a clean and simple design, a dark/light mode toggle, and even a built-in AI chatbot so visitors can interact with me in a more fun and personal way",
    imgSrc: "/project-images/portfolio.png",
    link: "https://ronronrivera.github.io/",
    source: "https://github.com/ronronrivera/My-Portfolio"
  },
  {
    title: "Chat App",
    paragraph: "A real-time chat app I built using the MERN stack (MongoDB, Express, React, and Node.js). It lets users create accounts, log in securely with JWT authentication, and chat instantly through Socket.io. The app also supports image sharing and plays a sound when a new message arrives — making conversations feel more alive. I designed it to be fast, responsive, and scalable, showing how I can bring together both backend and frontend technologies into one seamless, production-ready web app.",
    imgSrc:"/project-images/chat-app.png",
    link: "https://chat-app-iwxv3.sevalla.app/",
    source: "https://github.com/ronronrivera/chat-app/"
  }
]

const ProjectPage = () => {
  return (
    <motion.div
      className="flex justify-center items-center py-10"
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
