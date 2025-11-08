import React from "react"
import DarkModeToggler from "./DarkModeToggler.jsx";
import {Link} from "react-router";

function Header() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-full max-w-2xl my-5">
          <Link to="/" className="text-xl font-bold mr-14">RON</Link> 
          <div className="flex items-center text-sm gap-3">
            <Link to="/projects">projects</Link>
            <Link to="/about-me">about me</Link>
            <a href="https://drive.google.com/file/d/1cxvXpHvm2byagjOCsmKvg6NoewbBT3b3/view?usp=sharing" target="_blank">resume</a>
           <DarkModeToggler/>
          </div>
        </div>
      </div>
  </>
  );
}

export default Header;
