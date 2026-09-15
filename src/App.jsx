import { Toaster } from "react-hot-toast";
import HomePage from "./Components/HomePage.jsx";
import Particles from "./Components/Background.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Layered monochrome depth */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* dotted grid */}
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        {/* top glow */}
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[120px]" />
        {/* bottom-left glow */}
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[120px]" />
      </div>

      {/* WebGL particle field */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50">
        <Particles
          particleCount={140}
          particleSpread={12}
          speed={0.06}
          particleBaseSize={70}
          sizeRandomness={1}
          alphaParticles
          disableRotation={false}
        />
      </div>

      {/* Film grain */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grain opacity-[0.035] mix-blend-screen" />

      {/* Content */}
      <div className="relative z-10">
        <HomePage />
      </div>

      <Toaster
        toastOptions={{
          style: {
            background: "#0a0a0a",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.12)",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
}
