export const PROJECTS = [
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
    id: 2,
    title: "Zombie Horde",
    summary:
      "First-person zombie survival game written from scratch in modern C++ and OpenGL without a game engine.",
    whatBuilt:
      "Implemented custom rendering, wave spawning, collision detection, dynamic spotlight lighting, and asset loading.",
    techStack: ["C++17", "OpenGL 3.3", "GLFW", "GLM", "Assimp", "CMake"],
    result:
      "Delivered a stable playable prototype with smooth performance on modest hardware.",
    image: "/project-images/zombie-horde.mp4",
    liveUrl: "",
    sourceUrl: "https://github.com/ronronrivera/Zombie-Horde",
    inDevelopment: true,
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
    id: 5,
    title: "E-Commerce Store",
    summary:
      "End-to-end e-commerce application with secure checkout and admin analytics.",
    whatBuilt:
      "Implemented Stripe payments, webhook reliability handling, caching, inventory-aware product flows, and coupons.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redis"],
    result:
      "Improved checkout reliability and reduced repeated API fetches with caching.",
    image: "/project-images/commerce.jpg",
    liveUrl: "https://simple-commerce-t58k.onrender.com/login",
    sourceUrl: "https://github.com/ronronrivera/e-commerce-app",
    inDevelopment: false,
  },
  {
    id: 6,
    title: "Chat App",
    summary:
      "Real-time messaging app with authentication, image sharing, and instant updates.",
    whatBuilt:
      "Developed socket-based messaging, JWT auth, media message support, and notification flows.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Cloud Storage"],
    result:
      "Delivered responsive real-time conversations and stable session handling.",
    image: "/project-images/chat-app.png",
    liveUrl: "https://chat-app-iwxv3.sevalla.app/",
    sourceUrl: "https://github.com/ronronrivera/chat-app/",
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
