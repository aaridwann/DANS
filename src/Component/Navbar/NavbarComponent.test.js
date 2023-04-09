import NavbarComponent from "./NavbarComponent";
import React from "react";
import { render } from "@testing-library/react";

describe("Navbar component testing", () => {
  test("snapshot testing", () => {
    expect(render(<NavbarComponent />)).toMatchSnapshot();
  });
});
