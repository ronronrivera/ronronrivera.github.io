import React from "react";
import ProfilePic from "../assets/me.jpg";
import { HTML,
          TailWind, 
          ReactSkill, 
          NodeJS, CPP,
          MongoDB,
          ArchLinux,
          Express,
          OpenGL,
          Git,
          N8N} from "./Skills";

function MyInfo(){
  

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-2xl">
        <div className="md:flex md:items-center md:text-left text-center gap-5">
          <div className="flex justify-center items-center">
            <img className="object-cover w-24 h-24 border-2 border-white rounded-full dark:border-gray-900" src={ProfilePic} alt="me"/>
          </div>
          <div>
            <h2 className="text-xl font-bold">Hi, I'm Ron <span className="inline-block wave-hover">👋</span></h2>
            <p className="sm:text-sm text-xs"><span className="inline-block w-1 h-1 mb-[2px] mr-1 bg-green-500 rounded-full"></span>Freelance Developer · Remote (Philippines, GMT+8)</p>
             
          </div>
        </div>
        <div className="mt-5">
          <p className='text-center sm:text-left'>
            As a freelance developer, I utilize tools such as React, Node.js, and n8n to create responsive websites and applications, along with automated workflows. My focus is on delivering reliable, maintainable products enhanced by smart automations, emphasizing clean code, scalability, and user-centered design.
          </p>
        </div>
      <h3 className="mt-10 text-lg font-semibold tracking-wider text-white dark:text-black mb-8">
  Front End
      </h3>
        <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 justify-items-center mb-20">
            
          <div className=" flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
              <HTML className="w-full h-auto hover:text-[#E34F26] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">HTML 5</span>
            </div>
            <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
              <ReactSkill className="w-full h-auto hover:text-[#61dafb] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">ReactJS</span>
            </div>
            <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
          <TailWind className="w-full h-auto hover:text-[#38bdf8] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">TailWind</span>
                <span className="mt-1 text-sm font-medium">CSS</span>
            </div>
          </div>
      </div>
      <h3 className="text-lg font-semibold tracking-wider text-white dark:text-black mb-8">
  Back End
      </h3>
        <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 justify-items-center mb-20">
          <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
          <NodeJS className="w-full h-auto hover:text-[#339933] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">NodeJs</span>
            </div>
              <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
              <Express className="w-full h-auto hover:text-[#000000] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">ExpressJS</span>
            </div>
            <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
              <MongoDB className="w-full h-auto hover:text-[#47A248] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">MongoDB</span>
            </div>
          </div>
      </div>
      <h3 className="text-lg font-semibold tracking-wider text-white dark:text-black mb-8">
  Tools
      </h3>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 justify-items-center mb-20">
          <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
          <Git className="w-full h-auto hover:text-[#F05033] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">Git</span>
            </div>
              <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
              <N8N className="w-full h-auto hover:text-[#EA4B2B] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">N8N</span>
            </div>
          <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110"> 
          <ArchLinux className="w-full h-auto hover:text-[#1793D1] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">Arch Linux</span>
            </div>
          </div>
      </div>
      <h3 className="text-lg font-semibold tracking-wider text-white dark:text-black mb-8">
      System/Graphics
      </h3>
        <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 justify-items-center mb-20">           
            <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
              <CPP className="w-full h-auto hover:text-[#00599C] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">C++</span>
            </div>
            <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
              <OpenGL className="w-full h-auto hover:text-[#5586A4] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">OpenGL</span>
           </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default MyInfo;
