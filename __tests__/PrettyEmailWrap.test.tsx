import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { PrettyEmailWrap } from "../lib/main";

describe("PrettyEmailWrap", () => {
  it('insert a Word Break Opportunity tag before the "@" character', () => {
    render(<PrettyEmailWrap>@domain</PrettyEmailWrap>);
    expect(screen.getByText("@domain")).toContainHTML("<wbr />@domain");
  });

  it('insert a Word Break Opportunity tag after the ".", "+", "-", "_" characters', () => {
    render(<PrettyEmailWrap>.+-_</PrettyEmailWrap>);
    expect(screen.getByText(".+-_")).toContainHTML(
      ".<wbr />+<wbr />-<wbr />_<wbr />"
    );
  });
});
