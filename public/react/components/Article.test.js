import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Article from "./Article";
import { describe, test, expect } from "@jest/globals";

describe("Article", () => {
  let article = {
    title: "title",
    author: {
      name: "author",
    },
    content: "content",
    tags: ["tag1", "tag2"],
  };

  afterEach(() => {
    cleanup();
  });

  test("Article title", () => {
    render(<Article article={article} />);
    const titleElem = screen.getByText("title");
    expect(titleElem).toBeInTheDocument();
  });
});
