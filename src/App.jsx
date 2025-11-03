import { Routes, Route } from "react-router";
import HomePage from "./Components/HomePage.jsx";
import ProjectPage from "./Components/ProjectPage.jsx";
import Header from "./Components/Header.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import Particles from "./Components/Background.jsx";
import { motion } from "framer-motion";
import AboutMe from "./Components/AboutMe.jsx";

function App() {
  return (
    <ThemeProvider>
      {/* Global Background */}
      <div className="fixed inset-0 -z-10 bg-gray-900 dark:bg-white transition duration-300 ease-in-out">
        <Particles
          particleCount={1500}
          particleSpread={20}
          speed={0.5}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <motion.div
        initial={{ opacity: 1, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-white transition duration-300 ease-in-out relative z-10 dark:bg-transparent dark:text-black"
      >
        {/* Always Visible Header */}
        <div className="px-10 py-0 fixed top-0 left-0 w-full z-20">
          <Header />
        </div>

        {/* Routes */}
        <div className="pt-20 px-10"> {/* Added top padding for header */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/about-me" element={<AboutMe/>} />
          </Routes>
        </div>
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
