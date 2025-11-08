import MyInfo from "./myInfo.jsx";
import Carousel from "./Projects.jsx"; 
import LogoLoop from "./Socials.jsx";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContacPage from "./ContactPage.jsx"
import ChatBot from "./ChatBot.jsx";
import { useDarkMode } from "../Context/ThemeContext.jsx";



const techLogos = [
  { node: <FaDiscord />, title: "Discord", href: "discord.com/users/524403586193686528" },
  { node: <FaFacebookSquare />, title: "Facebook", href: "https://www.facebook.com/ronron.rivera42" },
  { node: <FaXTwitter />, title: "X", href: "https://x.com/RonRivera361892" },
  { node: <FaGithub />, title: "Github", href: "https://github.com/ronronrivera/" },
];

function HomePage() {
  
  const {darkMode} = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="text-white transition duration-300 ease-in-out relative z-10 dark:bg-transparent dark:text-black"
    >
      <div className="px-10 py-0">
        {/* My Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <MyInfo />

          <ChatBot/>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20"
        >
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <h2 className="text-xl font-semibold">Projects</h2>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center relative my-8">
            <Carousel
              baseWidth={650}
              autoplay
              autoplayDelay={3000}
              pauseOnHover
              loop
              round={false}
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity:1, y: 0}}
          transition={{duration: 0.8, delay:0.6}}
        >

          {/*Contact Page*/}
          <div className="flex justify-center mt-20">
            <div className="w-full max-w-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <h2 className='text-xl font-semibold mb-6 dark:text-gray-900 text-gray-50'>Let's work together!</h2>
              </div>
            </div>
          </div>
          <ContacPage/>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-24 mb-16"
        >
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <h2 className="text-lg font-semibold ">Let's Connect</h2>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className="w-full max-w-2xl"
              style={{ height: "120px", position: "relative", overflow: "hidden" }}
            >
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor={!darkMode ? '#111827' : '#ffffff'}
                ariaLabel="Social links"
                className="my-0"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HomePage;
