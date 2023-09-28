import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "./App";
import MainContent from "./components/MainContent";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
  });
});

describe("getDefinition function", async () => {
  it("search", async () => {
    render(<MainContent />);
    const input = screen.getByPlaceholderText("Write here ...");
    const btn = screen.getByRole("button");
    await userEvent.type(input, "food");
    await userEvent.click(btn);
    expect(await screen.findByText("food")).toBeInTheDocument();
    expect(await screen.getByTestId("audio-btn")).toBeInTheDocument();
    expect(await screen.findByText("Meanings:")).toBeInTheDocument();
    expect(await screen.findByText("Synonyms:")).toBeInTheDocument();
  });

  it("If words dose not exist", async () => {
    render(<MainContent />);
    const btn = screen.getByRole("button");
    await userEvent.click(btn);
    expect(
      screen.getByText(
        "Sorry pal, we couldn't see any word been typed inside input section to search."
      )
    ).toBeInTheDocument();
    screen.debug();
  });

  it("If words dose not exist", async () => {
    render(<MainContent />);
    const input = screen.getByPlaceholderText("Write here ...");
    const btn = screen.getByRole("button");
    await userEvent.type(input, "halw");
    await userEvent.click(btn);
    expect(
      await screen.findByText(
        "Sorry pal, we couldn't find definitions for the word you were looking for."
      )
    ).toBeInTheDocument();
    screen.debug();
  });
});

describe("Main content", () => {
  it("renders the main content", async () => {
    render(<MainContent />);
    const inputElement = screen.getByPlaceholderText("Write here ...");
    await userEvent.type(inputElement, "Hej");

    expect(inputElement).toHaveValue("Hej");
  });
});
