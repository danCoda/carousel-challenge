import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Carousel } from "./Carousel";
import { ProgramProvider } from "../../context/ProgramContext";
import { theme } from "../../styles/theme";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockData = [
  {
    id: 1,
    title: "Test Movie 1",
    image: "test1.jpg",
    description: "Test Description 1",
    type: "movie",
    rating: "PG",
    genre: "Action",
    year: 2021,
    language: "English",
  },
  {
    id: 2,
    title: "Test Movie 2",
    image: "test2.jpg",
    description: "Test Description 2",
    type: "movie",
    rating: "PG",
    genre: "Drama",
    year: 2021,
    language: "English",
  },
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 3,
    title: `Test Movie ${i + 3}`,
    image: `test${i + 3}.jpg`,
    description: `Test Description ${i + 3}`,
    type: "movie",
    rating: "PG",
    genre: "Action",
    year: 2021,
    language: "English",
  })),
];

const renderCarousel = () => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ProgramProvider>
          <Carousel />
        </ProgramProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe("Carousel", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockReset();
  });

  it("should render loading state initially", () => {
    (global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise(() => {})
    );

    renderCarousel();
    const skeletonItems = document.querySelectorAll(".skeleton-image");
    expect(skeletonItems).toHaveLength(6);
  });

  it("should render error message when fetch fails", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Failed to fetch")
    );

    renderCarousel();
    const error = await screen.findByText("Failed to fetch");
    expect(error).toBeInTheDocument();
  });

  it("should render no more than 6 items at a time", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    renderCarousel();
    const items = await screen.findAllByRole("img");
    expect(items).toHaveLength(6);
  });

  it("should navigate between items using arrow keys", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    renderCarousel();
    await screen.findAllByRole("img");

    // Test right arrow navigation
    fireEvent.keyDown(window, { key: "ArrowRight" });
    const secondItem = screen.getByTestId(`carousel-item-${mockData[1].id}`);
    expect(secondItem).toHaveStyleRule(
      "border",
      `2px solid ${theme.colors.primary}`,
      {
        modifier: "img",
      }
    );

    // Test left arrow navigation
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    const firstItem = screen.getByTestId(`carousel-item-${mockData[0].id}`);
    expect(firstItem).toHaveStyleRule(
      "border",
      `2px solid ${theme.colors.primary}`,
      {
        modifier: "img",
      }
    );

    // Test enter key navigation
    fireEvent.keyDown(window, { key: "Enter" });
    expect(mockNavigate).toHaveBeenCalledWith(`/program/${mockData[0].id}`);
  });

  it("should navigate to program page when clicking on an item", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    renderCarousel();
    const items = await screen.findAllByRole("img");
    fireEvent.click(items[0]);
    expect(mockNavigate).toHaveBeenCalledWith("/program/1");
  });
});
