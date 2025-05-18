import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "light",
  availableThemes: [
    "light",
    "dark",
    "coffee",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "winter",
    "dim",
    "nord",
    "sunset",
  ],
  setTheme: (theme) => {
    document.documentElement.classList.add(theme);
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));
