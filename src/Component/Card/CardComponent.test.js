import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CardComponent from "./CardComponent";
import "@testing-library/jest-dom/extend-expect";

describe("Card component testing unit", () => {
  test("Snapshot test", () => {
    expect(render(<CardComponent />)).toMatchSnapshot();
  });
  const props = {
    company: "Test Company",
    title: "Test Title",
    img: "https://test.com/test-img.jpg",
    desc: "Test Description",
    type: "Test Type",
    onClick: jest.fn(),
  };

  it("renders correctly with props", () => {
    const { getByText, getByAltText } = render(<CardComponent {...props} />);
    expect(getByText(props.company)).toBeInTheDocument();
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.type)).toBeInTheDocument();
    expect(getByText(props.title)).toBeInTheDocument();
  });

  it("calls onClick when title is clicked", () => {
    const { getByText } = render(<CardComponent {...props} />);
    fireEvent.click(getByText(props.title));
    expect(props.onClick).toHaveBeenCalled();
  });
});
