// Or async function
module.exports = {
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
