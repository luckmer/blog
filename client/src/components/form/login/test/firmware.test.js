import { createForm, Utility } from "../firmware";

describe("firmware", () => {
  test("expect data after correct validation", () => {
    const data = [
      { type: undefined, value: "woszczo04@gmail.com" },
      { type: undefined, value: "Tandeta23!" },
    ];

    const [email, password] = data;

    const createResult = createForm(data);

    const Json = { email: email.value, password: password.value };

    expect(createResult).toEqual({ status: true, result: Json });
  });

  test("expect data after incorrect validation", () => {
    const data = [
      { type: undefined, value: "woszczo04@gmail.com" },
      { type: undefined, value: "" },
    ];

    const createResult = createForm(data);

    expect(createResult).toEqual({
      status: false,
      result: "please check your password or email",
    });
  });
});

describe("Utility", () => {
  test("expect correct utils", () => {
    const { utils } = Utility();
    const utilsTest = {
      registerTypes: ["Email", "Password"],
      footerDesc: "You don't have an account?",
      footerName: "register",
      buttonName: "Login",
      descriptions: ["password", "email"],
    };

    expect(utils).toEqual(utilsTest);
  });
});
