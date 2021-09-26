/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import Index from "../../pages";

describe("Index", () => {
  test("renders", () => {
    const result = render(<Index />);
    expect(result).toMatchSnapshot();
  });
});
