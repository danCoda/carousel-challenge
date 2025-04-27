import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the heading", () => {
    render(<App />);
    const headingElement = screen.getByText(/react typescript app/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("renders with correct styling", () => {
    const { container } = render(<App />);
    const appContainer = container.firstChild;

    expect(appContainer).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#282c34",
      color: "white",
    });
  });
});
