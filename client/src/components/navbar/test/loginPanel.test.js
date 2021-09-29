import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { LoginPanel } from "../LoginPanel";

describe("LoginPanel", () => {
  test("should load login panel with no errors", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <LoginPanel />
      </MemoryRouter>
    );
  });

  test("expect login button", () => {
    const utils = render(
      <MemoryRouter initialEntries={["/login"]}>
        <LoginPanel />
      </MemoryRouter>
    );

    const login = utils.getByText("Login");

    expect(login).toBeInTheDocument();
  });

  test("expect register button", () => {
    const utils = render(
      <MemoryRouter initialEntries={["/login"]}>
        <LoginPanel />
      </MemoryRouter>
    );

    const register = utils.getByText("Register");

    expect(register).toBeInTheDocument();
  });
});
