import { render } from "@testing-library/react";
import { createRef } from "react";
import { smallInformation } from "../smallInformation";

describe("smallInformation", () => {
  test("should display information", () => {
    const ref = createRef();
    const fillForm = { status: true, result: "dispaly" };

    render(smallInformation(fillForm, ref));
  });

  test("display text based on ref", () => {
    const ref = createRef();
    const fillForm = { status: false, result: "something went wrong" };

    render(smallInformation(fillForm, ref));
  });
});
