import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("Snapshot test", () => {
  test("should first", () => {
    expect(render(<App />)).toMatchSnapshot();
  });
});
