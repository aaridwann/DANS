import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_ACTION } from "../../Redux/features/Auth/AuthSlice";
import NavbarComponent from "./NavbarComponent";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

describe("NavbarComponent", () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render company title and logout button when logged in", () => {
    useSelector.mockReturnValueOnce({
      auth: { isLogin: true },
    });

    render(<NavbarComponent />);

    const title = screen.getByText("DANS Job Portals");
    expect(title).toBeInTheDocument();

    const logoutButton = screen.getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
  });

  test("should render company title and not render logout button when not logged in", () => {
    useSelector.mockReturnValueOnce({
      auth: { isLogin: false },
    });

    render(<NavbarComponent />);

    const title = screen.getByText("DANS Job Portals");
    expect(title).toBeInTheDocument();

    const logoutButton = screen.queryByText("Logout");
    expect(logoutButton).not.toBeInTheDocument();
  });

  test("should dispatch LOGOUT_ACTION when logout button is clicked", () => {
    useSelector.mockReturnValueOnce({
      auth: { isLogin: true },
    });

    render(<NavbarComponent />);

    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    expect(dispatch).toHaveBeenCalledWith(LOGOUT_ACTION());
  });
});

// Snapshot test
describe("NavbarComponent snapshot", () => {
  test("matches snapshot", () => {
    useSelector.mockReturnValue({
      auth: { isLogin: false },
    });

    const { asFragment } = render(<NavbarComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});