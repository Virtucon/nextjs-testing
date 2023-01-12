import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";

it("has correct heading", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", {
    name: "Welcome to Popular Concert Venue",
  });

  expect(heading).toBeInTheDocument();
});

it("has correct image", () => {
  render(<Home />);
  const image = screen.getByRole("img", {
    name: "Concert goer with hands in the shape of a heart",
  });

  expect(image).toBeInTheDocument();
});
