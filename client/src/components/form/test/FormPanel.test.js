import { render, fireEvent, screen } from "@testing-library/react";
import { createRef } from "react";
import { MemoryRouter } from "react-router";
import { FormPanel } from "../FormPanel";

const firmware = {
  registerTypes: ["Email", "Password"],
  footerDesc: "You don't have an account?",
  footerName: "register",
  buttonName: "Login",
  descriptions: ["password", "email"],
  refs: { 0: createRef(), 1: createRef(), 2: createRef() },
};

const Data = () => {
  const fillForm = { status: true, result: "display" };
  const arrLength = firmware.registerTypes.length;

  const elRefs = Array(arrLength)
    .fill(null)
    .map(() => createRef());

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleSubmit, elRefs, fillForm };
};

describe("FormPanel", () => {
  test("should render formPanel with no errors", () => {
    const { handleSubmit, elRefs, fillForm } = Data();

    render(
      <MemoryRouter initialEntries={["/login"]}>
        {FormPanel(
          firmware.descriptions,
          firmware.registerTypes,
          handleSubmit,
          elRefs,
          firmware.buttonName,
          firmware.footerDesc,
          firmware.footerName,
          fillForm,
          1
        )}
      </MemoryRouter>
    );
  });

  test("expect elements in form panel", () => {
    const { handleSubmit, elRefs, fillForm } = Data();
    const utils = render(
      <MemoryRouter initialEntries={["/login"]}>
        {FormPanel(
          firmware.descriptions,
          firmware.registerTypes,
          handleSubmit,
          elRefs,
          firmware.buttonName,
          firmware.footerDesc,
          firmware.footerName,
          fillForm,
          1
        )}
      </MemoryRouter>
    );
    const AccountTester = utils.getByText("You don't have an account?");
    const register = utils.getByText("register");
    const Login = utils.getByText("Login");

    expect(AccountTester).toBeInTheDocument();
    expect(register).toBeInTheDocument();
    expect(Login).toBeInTheDocument();
  });
});
