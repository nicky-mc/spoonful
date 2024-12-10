module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files for Tailwind classes
  ],
  theme: {
    extend: {}, // Add customizations if needed
  },
  plugins: [
    require("daisyui"), // Include DaisyUI if you're using it
  ],
};
