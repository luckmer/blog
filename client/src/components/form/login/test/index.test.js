import { render as rtlRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../../../redux/store";
import Index from "../index";

const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/login"]}>{component}</MemoryRouter>
    </Provider>
  );

describe("Login panel", () => {
  test("should load login with no errors", () => {
    render(<Index />);
  });
});
