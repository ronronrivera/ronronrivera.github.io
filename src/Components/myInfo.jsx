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
    N8N,
    JavaScriptIcon
} from "./Skills";

import { useState, useEffect } from "react";
import SkillCard from "./SkillCard";

function MyInfo() {
    const [columns, setColumns] = useState(6);

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width < 450) setColumns(2);
            else if(width < 600) setColumns(3)
            else if (width < 750) setColumns(4);
            else setColumns(6);
        }

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const allSkills = [
        { Icon: HTML, label: "HTML 5", color: "#E34F26" },
        { Icon: ReactSkill, label: "ReactJS", color: "#61dafb" },
        { Icon: TailWind, label: "Tailwind", subLabel: "CSS", color: "#38bdf8" },
        { Icon: NodeJS, label: "NodeJS", color: "#339933" },
        { Icon: Express, label: "ExpressJS", color: "#000000" },
        { Icon: MongoDB, label: "MongoDB", color: "#47A248" },
        { Icon: Git, label: "Git", color: "#F05033" },
        { Icon: N8N, label: "n8n", color: "#EA4B2B" },
        { Icon: ArchLinux, label: "Arch Linux", color: "#1793D1" },
        { Icon: CPP, label: "C++", color: "#00599C" },
        { Icon: OpenGL, label: "OpenGL", color: "#5586A4" },
        { Icon: JavaScriptIcon, label: "Javascript", color:"#F7DF1E" }
    ];

    return (
        <div className="flex justify-center mt-10">
            <div className="w-full max-w-2xl">
                <div className="md:flex md:items-center md:text-left text-center gap-5">
                    <div className="flex justify-center items-center">
                        <img className="object-cover w-24 h-24 border-2 border-white rounded-full dark:border-gray-900" src={ProfilePic} alt="me"/>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Hi, I'm Ron <span className="inline-block wave-hover">👋</span></h2>
                        <p className="sm:text-sm text-xs">
                            <span className="inline-block w-1 h-1 mb-[2px] mr-1 bg-green-500 rounded-full"></span>
                            Software Engineer · Backend Specialist · Graphics Engineer
                        </p>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-center sm:text-left">
                        As a software engineer, I build full-stack applications with strong backend foundations and also
                        engineer graphics projects in C++/OpenGL. From platforms like Recruify and Case Forge to systems
                        inspired by Zombie Horde, I focus on clean architecture, performance, and dependable real-world
                        execution.
                    </p>
                </div>
                <div className="flex items-center space-x-2 my-10">
                    <h2 className="text-lg font-semibold uppercase">Skills</h2>
                </div>
               <div className="flex justify-center items-center my-10">
                    <div
                        className="grid gap-4 justify-items-center"
                        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
                    >
                        {allSkills.map((skill, i) => (
                            <SkillCard key={i} {...skill} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MyInfo;
