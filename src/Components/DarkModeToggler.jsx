import React from "react"
import { useDarkMode } from "../Context/ThemeContext.jsx";
import DarkIcon from "../assets/dark.png";
import LightIcon from "../assets/light.png";
import Switch from "../assets/switch.mp3";

const DarkModeToggler = () =>{

  const {darkMode, setDarkMode} = useDarkMode();

  const handleToggler = () =>{
    const sound = new Audio(Switch);
    sound.volume = 0.05;
    sound.play();

    setDarkMode(!darkMode);
  }

  return (<>
    <button onClick={handleToggler} className="w-6 h-8 cursor-pointer">{ darkMode? <img src={LightIcon} alt="darkmode"/> : <img src={DarkIcon}/>} </button>
    </>);
}

export default DarkModeToggler;
