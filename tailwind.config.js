/* eslint-disable import/no-commonjs -- exception for configuration files. */
/* eslint-disable import/unambiguous -- exception for configuration files. */

module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",
    "./tests/**/*.{ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
