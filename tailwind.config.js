module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in the src directory for Tailwind classes
    "./public/index.html", // Include index.html in the public directory
  ],
  theme: {
    extend: {}, // Add customizations if needed
  },
  plugins: [
    require("daisyui"), // Include DaisyUI if you're using it
  ],
};