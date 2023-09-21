import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import axios from "axios";
import App from "./App";
import MainContent from "./components/MainContent";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
  });
});
describe("Main content", () => {
  it("renders the main content", () => {
    render(<MainContent />);
  });
});

describe("getDefinition function", async () => {
  const getDefinition = async () => {
    const resp = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/food`
    );
    const data = resp.data;
    return data;
  };

  it("fetches and processes API data", async () => {
    const result = await getDefinition();

    expect(result[0].word).toBe("food");
  });
});
