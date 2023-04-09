import React from "react";
import { fireEvent, render } from "@testing-library/react";
import InputComponent from "./InputComponent";

describe("Input unit test", () => {
  test("Snapshot testing", () => {
    expect(render(<InputComponent />)).toMatchSnapshot();
  });

  test("render props", () => {
    const Props = {
      name: "username",
      value: "hello world",
      onChange: jest.fn(),
      label: "username",
      type: "text",
      placeholder: "Username",
      disabled: false
    };
    const {
      getByText,
      getByTestId,
      getByLabelText,
      getByPlaceholderText
    } = render(<InputComponent {...Props} />);
    const input = getByTestId("input");
    const placeholder = getByPlaceholderText(Props.placeholder);
    const label = getByLabelText(Props.label);
    fireEvent.change(input, { target: { value: "hello test" } });

    expect(Props.onChange).toBeCalled()
    expect(label).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    expect(input.value).toEqual(Props.value);
    expect(input.type).toEqual(Props.type);
    expect(input.name).toEqual(Props.name);
    expect(input.disabled).toEqual(false);
  });
});
