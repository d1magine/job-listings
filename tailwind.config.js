export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "678px",
    },
    extend: {
      colors: {
        "dark-cyan": "hsl(180, 29%, 50%)",
        "light-grayish-cyan": "hsl(180, 52%, 96%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
