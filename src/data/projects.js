export const PROJECTS = [
  {
    id: 8,
    title: "Real-Time ASL Detection",
    summary:
      "Live American Sign Language letter and digit recognition from a webcam feed with on-screen predictions and confidence scores.",
    whatBuilt:
      "Built a MediaPipe hand-landmark pipeline that extracts 21 keypoints into a normalized 63-value vector, feeding a small PyTorch MLP classifier with live OpenCV overlays.",
    techStack: ["Python 3", "PyTorch", "MediaPipe", "OpenCV", "NumPy", "scikit-learn"],
    result:
      "Achieved ~97% validation accuracy and reliable real-time predictions by classifying landmarks instead of raw pixels for robustness to lighting and background.",
    image: "/project-images/asl-detection.mp4",
    liveUrl: "",
    sourceUrl: "https://github.com/ronronrivera/real-time-asl-detection",
    inDevelopment: false,
  },
  {
    id: 2,
    title: "Zombie Horde",
    summary:
      "First-person zombie survival game written from scratch in modern C++ and OpenGL without a game engine.",
    whatBuilt:
      "Implemented custom rendering, wave spawning, collision detection, dynamic spotlight lighting, and asset loading.",
    techStack: ["C++17", "OpenGL 3.3", "GLFW", "GLM", "Assimp", "CMake"],
    result:
      "Delivered a stable playable prototype with smooth performance on modest hardware.",
    image: "/project-images/zombie.mp4",
    liveUrl: "",
    sourceUrl: "https://github.com/ronronrivera/Zombie-Horde",
    inDevelopment: true,
  },
  {
    id: 1,
    title: "Case Forge",
    summary:
      "AI Portfolio Builder SaaS that transforms freelancer notes into polished, multi-template case studies and exportable PDFs.",
    whatBuilt:
      "Built Gemini-powered structured JSON generation, multi-template HTML rendering, and a serverless Puppeteer PDF export pipeline with Supabase asset storage.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Supabase", "Gemini API", "Stripe", "Puppeteer"],
    result:
      "Shipped credit-based billing with atomic SQL deduction, Stripe Checkout, and webhook top-ups to prevent race conditions and double charges.",
    image: "/project-images/case-forge.png",
    liveUrl: "https://case-forge.vercel.app/",
    sourceUrl: "https://github.com/ronronrivera/",
    inDevelopment: false,
  },
  {
    id: 3,
    title: "Recruify",
    summary:
      "Hiring platform with role-based workflows for employers and candidates.",
    whatBuilt:
      "Designed auth, role separation, job posting workflows, and application status tracking using JWT-protected APIs.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
    result:
      "Validated RBAC architecture and reliable multi-role navigation in production.",
    image: "/project-images/hiring-platform.png",
    liveUrl: "https://recruify.vercel.app/",
    sourceUrl: "https://github.com/ronronrivera/hiring-platform/",
    inDevelopment: false,
  },
  {
    id: 4,
    title: "Interview Platform",
    summary:
      "Remote technical interview platform with live video, chat, and collaborative coding.",
    whatBuilt:
      "Integrated real-time video/chat, online code execution, and asynchronous background jobs for interview workflows.",
    techStack: ["React", "Node.js", "Stream", "Piston API", "Clerk", "Inngest"],
    result:
      "Enabled complete live interview sessions with low friction for interviewer and candidate onboarding.",
    image: "/project-images/interview-platform.jpeg",
    liveUrl: "https://gethioredio.vercel.app/",
    sourceUrl: "https://github.com/ronronrivera/Interview-Platform",
    inDevelopment: false,
  },
  {
    id: 7,
    title: "Neovim Setup",
    summary:
      "Personal development environment optimized for speed and low memory usage.",
    whatBuilt:
      "Configured plugin architecture, LSP diagnostics, fuzzy navigation, and keyboard-first workflows.",
    techStack: ["Lua", "Neovim", "Treesitter", "Telescope", "Mason", "lazy.nvim"],
    result:
      "Faster coding cycles with consistent workflow across projects.",
    image: "/project-images/nvim.png",
    liveUrl: "",
    sourceUrl: "https://github.com/ronronrivera/neovim-setup",
    inDevelopment: false,
  },
];
