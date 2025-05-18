/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Base colors that will be overridden by themes
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-content': 'hsl(var(--primary-content) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        'secondary-content': 'hsl(var(--secondary-content) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        'accent-content': 'hsl(var(--accent-content) / <alpha-value>)',
        neutral: 'hsl(var(--neutral) / <alpha-value>)',
        'neutral-content': 'hsl(var(--neutral-content) / <alpha-value>)',
        'base-100': 'hsl(var(--base-100) / <alpha-value>)',
        'base-200': 'hsl(var(--base-200) / <alpha-value>)',
        'base-300': 'hsl(var(--base-300) / <alpha-value>)',
        'base-content': 'hsl(var(--base-content) / <alpha-value>)',
      }
    },
  },
  plugins: [
    // Add any other plugins you need
  ],
}