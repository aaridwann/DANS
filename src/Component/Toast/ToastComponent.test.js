import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastComponent from "./ToastComponent";
import { CLEAR_WARNING } from "../../Redux/features/Error/ErrorSlice";

jest.mock("react-redux");

jest.mock("react-toastify", () => ({
    ToastContainer: ({ children }) => <div>{children}</div>,
  toast: {
    error: jest.fn(),
  },
}));

describe("ToastComponent", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.resetAllMocks();
  });

  it("should show a warning toast", () => {
    const errorState = {
      warning: true,
      message: "",
    };

    const mockDispatch = jest.fn();

    useSelector.mockImplementation((selectorFn) => selectorFn({ error: errorState }));
    useDispatch.mockReturnValue(mockDispatch);

    errorState.message = "There was a warning";
    render(<ToastComponent />);

    expect(toast.error).toHaveBeenCalledWith("There was a warning");
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({ type: CLEAR_WARNING });

    jest.advanceTimersByTime(2000);
    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenCalledWith({ type: CLEAR_WARNING });
  });
});