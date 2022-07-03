/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { TitleCard } from "./TitleCard";

it("TitleCard", () => {
  const { getByText } = render(
    <TitleCard title="My Balance" balance={450} />
  );

  expect(getByText(/My Balance/i)).toBeTruthy();
  expect(getByText(/450/i)).toBeTruthy();
});
