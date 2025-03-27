/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom blue
        secondary: '#9333EA', // Custom purple
        accent: '#F59E0B', // Custom yellow
        background: '#F3F4F6', // Custom light gray
        text: '#1F2937', // Custom dark gray
      },
      keyframes: {
        rotateBorder: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulseBorder: {
          "0%": { borderColor: "red" },
          "50%": { borderColor: "blue" },
          "100%": { borderColor: "green" },
        },
      },
      animation: {
        rotateBorder: "rotateBorder 3s linear infinite",
        pulseBorder: "pulseBorder 2s infinite",
      },
      backgroundSize: {
        "border-animated": "200% 200%",
      },
    },
  },
  plugins: [],
}

