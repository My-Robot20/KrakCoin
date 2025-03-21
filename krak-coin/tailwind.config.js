// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Make sure Tailwind scans all files inside the app folder
    './src/app/**/*.{js,ts,jsx,tsx}', // Also scan files in the src/app folder if needed
    './components/**/*.{js,ts,jsx,tsx}', // If you have components in a separate folder
  ],
  theme: {
    extend: {
      colors: {
        'custom-button': '#614FFF', // Your custom color
      },
    },
  },
  plugins: [],
}
