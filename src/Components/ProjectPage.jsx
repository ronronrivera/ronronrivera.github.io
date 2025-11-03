
import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projectList = [
  {
    title: "My Portfolio",
    paragraph: "A modern, responsive portfolio built with ReactJS and TailwindCSS to showcase my skills, projects, and background as a computer science student. It features smooth animations, clean UI components, and a dark/light theme toggle for an elegant and interactive browsing experience.",
    imgSrc: "/project-images/portfolio.png",
    link: "https://ronronrivera.github.io/My-Portfolio/",
    source: "https://github.com/ronronrivera/My-Portfolio"
  },
  {
    title: "Chat App",
    paragraph: "A real-time chat application developed using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create accounts, log in securely through JWT-based authentication, and exchange messages instantly through Socket.io communication. The app supports image sharing, and sound notifications for new messages, providing a smooth and interactive chatting experience. Designed with scalability and responsiveness in mind, it demonstrates my ability to integrate backend and frontend technologies into a cohesive, production-ready web application.",
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
