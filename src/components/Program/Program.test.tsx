import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, useParams, useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Program } from "./Program";
import { ProgramProvider } from "../../context/ProgramContext";
import { theme } from "../../styles/theme";

// Mock react-router-dom hooks
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
  useNavigate: () => mockNavigate,
}));

const mockProgram = {
  id: 1,
  title: "Test Movie",
  description: "Test Description",
  image: "test.jpg",
  type: "movie",
  rating: "PG",
  genre: "Action",
  year: 2021,
  language: "English",
};

const renderProgram = () => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ProgramProvider>
          <Program />
        </ProgramProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe("Program", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockReset();
    (useParams as jest.Mock).mockReturnValue({ id: "1" });
  });

  it("should render loading state initially", () => {
    (global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise(() => {})
    );

    renderProgram();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render error message when fetch fails", async () => {
    const errorMessage = "Failed to fetch";
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    renderProgram();
    const error = await screen.findByText(errorMessage);
    expect(error).toBeInTheDocument();
  });

  it("should navigate back to home when backspace is pressed", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([mockProgram]),
    });

    renderProgram();
    await screen.findByText(mockProgram.title);
    fireEvent.keyDown(window, { key: "Backspace" });
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("should render program details when data is loaded successfully", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([mockProgram]),
    });

    renderProgram();
    expect(await screen.findByText(mockProgram.title)).toBeInTheDocument();
    expect(screen.getByText(mockProgram.description)).toBeInTheDocument();
    expect(screen.getByText(mockProgram.rating)).toBeInTheDocument();
    expect(screen.getByText(mockProgram.genre)).toBeInTheDocument();
    expect(screen.getByText(mockProgram.language)).toBeInTheDocument();
    expect(screen.getByText(mockProgram.year.toString())).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockProgram.image);
    expect(image).toHaveAttribute("alt", mockProgram.title);
  });

  it("should render 'Program not found' when program id does not exist", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([{ ...mockProgram, id: 999 }]),
    });

    renderProgram();
    const error = await screen.findByText("Program not found");
    expect(error).toBeInTheDocument();
  });
});
