import React from "react";
import ProfilePic from "../assets/me.jpg";
import { HTML,
          CSS, 
          TailWind, 
          ReactSkill, 
          NodeJS, CPP,
          MongoDB,
          ArchLinux,
          Express,
          OpenGL,
          Git,
          Vim} from "./Skills";

function MyInfo(){
  

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-2xl">
        <div className="flex items-center gap-5">
          <img className="object-cover w-24 h-24 border-2 border-white rounded-full dark:border-gray-900" src={ProfilePic} alt="me"/>
          <div>
            <h2 className="text-xl font-bold">Hi, I'm Ron <span className="inline-block wave-hover">👋</span></h2>
            <p className="text-xs"><span className="inline-block w-1 h-1 mb-[2px] mr-1 bg-green-500 rounded-full"></span>C++ & Full Stack Developer | I build efficient, modern web and simulate cool stuffs.</p>
            <p className="text-xs"><span className="inline-block w-1 h-1 mb-[2px] mr-1 bg-green-500 rounded-full"></span>Freelance Developer · Remote (Philippines, GMT+8)</p>
                      </div>
        </div>
        <div className="mt-5">
          <p>I’m a freelance developer who builds responsive websites and efficient apps using modern frameworks like React and Node.js. I focus on clean code, scalability, and user-centered design so clients get products that are reliable and easy to maintain.</p>
        </div>
      <h3 className="mt-10 text-lg font-semibold tracking-wider text-white dark:text-black mb-8">
  Front End
      </h3>
      <div className="flex justify-center items-center">
        <div className="flex w-96 mb-20 gap-4">
            
          <div className=" flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
              <HTML className="w-full h-auto hover:text-[#E34F26] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">HTML 5</span>
            </div>
          <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
              <CSS className="w-full h-auto hover:text-[#2965f1] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">CSS</span>
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
        <div className="ml-0 sm:ml-14 flex justify-center items-center">
        <div className="flex w-96 mb-20 gap-4">
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
        <div className="ml-0 sm:ml-14 flex justify-center items-center">
        <div className="flex w-96 mb-20 gap-4">
          <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
          <Git className="w-full h-auto hover:text-[#F05033] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">Git</span>
            </div>
              <div className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110">
              <Vim className="w-full h-auto hover:text-[#000000] transition duration-300 ease-in-out"/>
                <span className="mt-3 text-sm font-medium">Vim</span>
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
        <div className="ml-8 sm:ml-32 md:ml-44 flex justify-center items-center">
        <div className="flex w-96 mb-20 gap-4">           
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
