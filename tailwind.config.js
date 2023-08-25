/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
        
      dark: "#030712" ,

      white: "#f3f4f6",
      light: "#e5e7eb",

      muted: "#6b7280",

      primary: "#a3e635",
      secondary:"#4f46e5",

      danger: "#b81414"
    
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
    }
  },
  plugins: [],
}
