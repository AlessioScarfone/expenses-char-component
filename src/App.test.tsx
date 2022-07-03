/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import App from "./App";

it("TitleCard", () => {
  const { getByText } = render(
    <App/>
  );

  expect(getByText(/My Balance/i)).toBeTruthy();
  expect(getByText(/Total this month/i)).toBeTruthy();
  expect(getByText(/from last month/i)).toBeTruthy();
});
