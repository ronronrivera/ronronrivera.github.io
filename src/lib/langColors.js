// Accent colors for tech / tool chips.
// Programming languages get fixed, deliberately non-brand colors; every other
// technology gets a stable color from a curated palette (hashed by name so the
// same tech is always the same color).

const EXPLICIT = [
  { test: (n) => n.includes("javascript"), color: "#a78bfa" }, // violet (not JS yellow)
  { test: (n) => n.includes("typescript"), color: "#38bdf8" }, // sky
  { test: (n) => n.includes("python"), color: "#34d399" }, // emerald (not Python blue/yellow)
  { test: (n) => n.includes("c++") || n === "c/c++" || n === "c", color: "#fb7185" }, // rose (not C++ blue)
  { test: (n) => n.includes("lua"), color: "#fbbf24" }, // amber (not Lua navy)
];

const PALETTE = [
  "#f472b6", // pink
  "#2dd4bf", // teal
  "#818cf8", // indigo
  "#a3e635", // lime
  "#fb923c", // orange
  "#e879f9", // fuchsia
  "#4ade80", // green
  "#60a5fa", // blue
  "#facc15", // yellow
  "#c084fc", // purple
  "#f87171", // red
  "#22d3ee", // cyan
];

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function techColor(name = "") {
  const n = name.toLowerCase().trim();
  const explicit = EXPLICIT.find((e) => e.test(n));
  if (explicit) return explicit.color;
  return PALETTE[hash(n) % PALETTE.length];
}

// Inline style for any tech chip.
export function techStyle(name) {
  const color = techColor(name);
  if (!color) return undefined;
  return {
    color,
    borderColor: `${color}66`,
    backgroundColor: `${color}14`,
  };
}
