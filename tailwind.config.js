/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "Desaturated-Dark-Cyan": "hsl(180, 29%, 50%)",
      "Light-Grayish-Cyan-Background": "hsl(180, 52%, 96%)",
      "Light-Grayish-Cyan-Filter-Tablets": "hsl(180, 31%, 95%)",
      "Dark-Grayish-Cyan": "hsl(180, 8%, 52%)",
      "Very-Dark-Grayish-Cyan": "hsl(180, 14%, 20%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
