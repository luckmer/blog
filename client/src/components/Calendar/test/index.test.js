import Calendar from "../index";
import { render } from "@testing-library/react";

describe("Calendar", () => {
  test("should render Calendar with no errors", () => {
    render(<Calendar />);
  });
});
