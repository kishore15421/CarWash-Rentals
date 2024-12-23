module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Deep Blue
        secondary: '#9333EA', // Vibrant Purple
        accent: '#F59E0B', // Amber Yellow
        background: '#F3F4F6', // Light Gray
        surface: '#FFFFFF', // White
        textPrimary: '#1F2937', // Dark Gray
        textSecondary: '#4B5563', // Medium Gray
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
