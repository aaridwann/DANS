import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckboxComponent from "./CheckboxComponent";

describe("CheckboxComponent", () => {
  const props = {
    title: "Checkbox title",
    value: false,
    onChange: jest.fn(),
  };

  it("Snapshot testing", () => {
    expect(render(<CheckboxComponent />)).toMatchSnapshot();
  });

  it("renders correctly with props", () => {
    const { getByLabelText } = render(<CheckboxComponent {...props} />);
    const checkboxInput = getByLabelText(props.title);
    expect(checkboxInput.checked).toBe(props.value);
  });

  it("calls onChange when clicked", () => {
    const { getByLabelText } = render(<CheckboxComponent {...props} />);
    const checkboxInput = getByLabelText(props.title);
    fireEvent.click(checkboxInput);
    expect(props.onChange).toHaveBeenCalled();
  });
});
