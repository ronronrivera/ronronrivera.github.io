
import React, {useState} from 'react'
import {motion} from "framer-motion"
import { User, Brain, CircleHelp } from 'lucide-react'
import Bio from './Bio'
import TechnicalQuestions from './TechnicalQuestions'
import WhatICanDo from './WhatICanDo'

const tabs = [
  {id: "about",  label: "About", icon: User},
  {id: "skills", label: "Skills", icon: Brain},
  {id: "faq", label: "FAQ", icon: CircleHelp}
]

const AboutMe = () => {

  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex flex-col items-center mt-6">
  {/* Name + Info */}
  <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
    >
        <div className="relative w-full max-w-2xl">
          <img
          src="/cover_photo.png"
          alt="Cover"
          className="w-full h-72 object-cover rounded-lg"
          />
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <img
          src="/me.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white dark:border-gray-700 shadow-md object-cover"
          />
        </div>
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-bold">Ron-ron Aspe Rivera</h1>
        <p className="dark:text-gray-600 text-gray-300">Computer Science Student · C++ & Full Stack Developer · OpenGL Enthusiast</p>
      </div>
    </motion.div>
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
    >
      <div className='flex justify-center gap-4 mt-10 max-w-2xl'>
        {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`min-w-28 sm:min-w-44  flex justify-center items-center text-sm p-2 md:p-3 rounded-md transition-all duration-400 transform ease-in-out ${
            activeTab === tab.id
              ? "bg-blue-900 text-gray-50"
              : "dark:bg-gray-600 dark:hover:bg-gray-400 hover:bg-gray-500 bg-gray-700 text-gray-50"
            } flex-shrink-0`}
          >
            <tab.icon className='mr-2 h-5 w-5'/>
            {tab.label}
          </button>
          ))}
      </div>
      {activeTab === "about" && <Bio/>}
      {activeTab === "skills" && <WhatICanDo/>}
      {activeTab === "faq" && <TechnicalQuestions/>}
    </motion.div>
 </div>

  )
}

export default AboutMe
