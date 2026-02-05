import { useEffect, useState } from "react";
import DarkModeToggler from "./DarkModeToggler.jsx";
import {Link} from "react-router";

function Header() {

    const minWidht = 450;
     
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() =>{

        function handleResize(){
            setIsSmall(window.innerWidth <= minWidht);
        }

        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize)

    }, [minWidht])

    return (
        <>
            <div className="flex justify-center">
                <div className="flex items-center justify-between w-full max-w-2xl my-5">
                    <Link to="/" className="text-xl font-bold mr-14">RON</Link> 
                    <div className="flex items-center text-sm gap-3">
                        <Link to="/projects">projects</Link>
                        <Link to="/about-me">{isSmall? 
                            (<span>me</span>)
                            :
                            (<span>about me</span>)}</Link>
                        <a href="https://drive.google.com/file/d/1vBtcjwQZymrgTSV3VkUkn5CjZFEeeQxZ/view?usp=sharing" target="_blank">resume</a>
                        <DarkModeToggler/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
