import type { Config } from "@jest/types";

const CONFIG: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",

  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["/node_modules/", "src/pages/_app.tsx"],
  coverageProvider: "v8",
  // CoverageThreshold: undefined,

  setupFiles: ["<rootDir>/.jest/setup_environment.ts"],

  // NOTE: we need this to get around some weirdness with TSX + Jest
  globals: {
    "ts-jest": {
      tsconfig: ".jest/tsconfig.json",
      isolatedModules: true,
    },
  },
};

export default CONFIG;
