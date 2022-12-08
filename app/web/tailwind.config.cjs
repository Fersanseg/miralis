const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      scale: {
        '102': '1.02'
      }
    }
  },

  plugins: [require("daisyui")]
};

module.exports = config;