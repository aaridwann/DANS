import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { SET_ERROR } from "../../Redux/features/Error/ErrorSlice";
import { store } from "../../Redux/store";
import LoginComponent from "./LoginComponent";

jest.mock("react-redux");
jest.mock("@react-oauth/google", () => ({
  useGoogleLogin: jest.fn(),
}));

describe("LoginComponent", () => {
  it("should dispatch SET_ERROR on login error", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    const onErrorMock = jest.fn();
    useGoogleLogin.mockReturnValue({
      login: jest.fn(),
      onError: onErrorMock,
    });

    const { getByRole } = render(<LoginComponent />);

    fireEvent.click(getByRole("button"));

    expect(onErrorMock).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(
      SET_ERROR({ message: "Login Error" })
    );
  });
});