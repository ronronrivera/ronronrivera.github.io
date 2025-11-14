import { Routes, Route } from "react-router";
import HomePage from "./Components/HomePage.jsx";
import ProjectPage from "./Components/ProjectPage.jsx";
import Header from "./Components/Header.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import Particles from "./Components/Background.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import { Toaster } from "react-hot-toast";
import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";

function App() {
  return (
    <ThemeProvider>
      {/* Global Background */}
      <div className="fixed inset-0 -z-10 bg-gray-900 dark:bg-white transition duration-300 ease-in-out">
        <Particles
          particleCount={1500}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>
      <div className="px-10 py-0 fixed top-0 left-0 w-full z-50 bg-gray-900/90 dark:bg-white/80 backdrop-blur-sm">
        <Header />
      </div>
        <div className="pt-20 px-10"> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/about-me" element={<AboutMe/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          </Routes>
        </div>
      <Toaster/>
    </ThemeProvider>
  );
}

export default App;
