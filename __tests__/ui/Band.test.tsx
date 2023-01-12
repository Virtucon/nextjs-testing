import { render, screen } from "@testing-library/react";

import BandComponent from "@/pages/bands/[bandId]";

import { readFakeData } from "../__mocks__/fakeData";

it("displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });

  expect(heading).toBeInTheDocument();
});

it("displays error message", () => {
  render(<BandComponent band={null} error="There is an error." />);

  const error = screen.getByRole("heading", {
    name: /there is an error./i,
  });

  expect(error).toBeInTheDocument();
});
