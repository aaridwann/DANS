import React from "react";
import { render } from "@testing-library/react";
import SlideShow from "./SlideShow";
import "@testing-library/jest-dom/extend-expect";

describe("SlideShow component", () => {
  test("renders SlideShow component", () => {
    const { getByAltText } = render(<SlideShow />);
    const slide1 = getByAltText("Slide 1");
    expect(slide1).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<SlideShow />);
    expect(container.firstChild).toMatchSnapshot();
  });
});