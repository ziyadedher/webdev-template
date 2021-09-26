/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  clearMocks: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  // coverageThreshold: undefined,
};
