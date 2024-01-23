import React from "react";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "@/app/contact/page";


describe("Contact", () => {
  it("renders without crashing", () => {
    render(<Contact />);
  });
});