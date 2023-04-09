import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import WithDetailsContainer from "./DetailsContainer";
import DetailsComponent from "./DetailsComponent";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  Navigate: jest.fn().mockReturnValue(null)
}));

const company = "Company ABC";
const description = "This is a test description";
const how_to_apply = "How to apply";

describe("Details Component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Router>
        <DetailsComponent
          company={company}
          description={description}
          how_to_apply={how_to_apply}
          method={{ navigate: jest.fn() }}
        />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it("should navigate to jobs page on click of back button", () => {
    const mockNavigate = jest.fn();
    const { getByAltText } = render(
      <Router>
        <DetailsComponent
          company={company}
          description={description}
          how_to_apply={how_to_apply}
          method={{ navigate: mockNavigate }}
        />
      </Router>
    );
    const backButton = getByAltText("Back");
    fireEvent.mouseDown(backButton);
    expect(mockNavigate).toHaveBeenCalled();
  });

  it("should not navigate to jobs page on click of hero", () => {
    const mockNavigate = jest.fn();
    const { getByTestId } = render(
      <Router>
        <DetailsComponent
          company={company}
          description={description}
          how_to_apply={how_to_apply}
          method={{ navigate: mockNavigate }}
        />
      </Router>
    );
    const hero = getByTestId("hero");
    fireEvent.mouseDown(hero);
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});