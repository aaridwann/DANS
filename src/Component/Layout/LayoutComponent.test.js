import React from "react";
import { render } from "@testing-library/react";
import LayoutComponent from "./LayoutComponent";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../LoadingComponent/LoadingComponent", () => {
  return function MockLoadingComponent() {
    return <div>LoadingComponent</div>;
  };
});
jest.mock("../Toast/ToastComponent", () => () => <div>ToastComponent</div>);
jest.mock("../Navbar/NavbarComponent", () => () => <div>NavbarComponent</div>);
jest.mock("../SlideShow/SlideShow", () => () => <div>SlideShow</div>);

describe("LayoutComponent", () => {
  it("renders correctly", () => {
    const children = <div>Children Component</div>;
    const { container } = render(
      <LayoutComponent loading={false}>{children}</LayoutComponent>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  
  it("should render LoadingComponent and children", () => {
    const children = <div>Children Component</div>;
    const { getByText } = render(<LayoutComponent>{children}</LayoutComponent>);
    expect(getByText("LoadingComponent")).toBeInTheDocument();
    expect(getByText("Children Component")).toBeInTheDocument();
  });

  test("should not render LoadingComponent when loading is false", () => {
    const children = <div>Children Component</div>;
    const { queryByText } = render(
      <LayoutComponent loading={false}>{children}</LayoutComponent>
    );
    expect(queryByText("LoadingComponent")).toBeInTheDocument();
  });

  it("should render ToastComponent, NavbarComponent and SlideShow", () => {
    const children = <div>Children Component</div>;
    const { getByText } = render(<LayoutComponent>{children}</LayoutComponent>);
    expect(getByText("ToastComponent")).toBeInTheDocument();
    expect(getByText("NavbarComponent")).toBeInTheDocument();
    expect(getByText("SlideShow")).toBeInTheDocument();
  });
});
