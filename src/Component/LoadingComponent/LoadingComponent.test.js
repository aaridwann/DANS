import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("LoadingComponent", () => {
  beforeEach(() => {
    useSelector.mockReturnValue({
      loading: {
        LoadingState: true,
      },
    });
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test("renders correctly when loading state is true", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        loading: {
          LoadingState: true,
        },
      })
    );
    const { container } = render(<LoadingComponent />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("does not render when loading state is false", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        loading: {
          LoadingState: false,
        },
      })
    );
    const { container } = render(<LoadingComponent />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render LoadingComponent when LoadingState is true", () => {
    const { queryByText } = render(<LoadingComponent />);
    expect(queryByText("LOADING....")).toBeInTheDocument();
  });

  it("should not render LoadingComponent when LoadingState is false", () => {
    useSelector.mockReturnValue({
      loading: {
        LoadingState: false,
      },
    });
    const { queryByText } = render(<LoadingComponent />);
    expect(queryByText("LOADING....")).not.toBeInTheDocument();
  });
});