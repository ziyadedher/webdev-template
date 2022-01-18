import { getNodeEnv } from "../../src/utils/env";

describe("test env values", () => {
  test("getNodeEnv", () => {
    expect(getNodeEnv()).toBe("test");
  });
});
