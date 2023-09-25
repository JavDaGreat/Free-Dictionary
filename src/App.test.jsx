import { render,screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'; 
import { describe, it, expect } from "vitest";
import axios from "axios";
import App from "./App";
import MainContent from "./components/MainContent";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
  });
});
describe("Main content",  () => {
  it("renders the main content", async () => {
    render(<MainContent />);
    const inputElement = screen.getByPlaceholderText('Write here ...')
    await userEvent.type(inputElement, 'Hej');

   screen.debug()
    expect(inputElement).toHaveValue("Hej")

  });
});

describe("getDefinition function", async () => {
  const getDefinition = async () => {
    const resp = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/food`
    );
    const data = resp.json();
    return data;
  };

  it("fetches and processes API data", async () => {
    const result = await getDefinition();

    expect(result[0].word).toBe("food");
  });
});
