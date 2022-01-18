import { loadEnvConfig } from "@next/env";

const fakeLogger = {
  info: jest.fn(),
  error: jest.fn(),
};

// eslint-disable-next-line jest/require-hook -- loading environment variables.
loadEnvConfig(process.cwd(), true, fakeLogger);
