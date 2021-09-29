import { RegistrationForm } from "../../../../hooks";
import { Utility } from "../firmware";

const utils = () => {
  const data = [
    { type: undefined, value: "piotr goik" },
    { type: undefined, value: "woszczo04@gmail.com" },
    { type: undefined, value: "Tandeta23!" },
    { type: undefined, value: "Tandeta23!" },
  ];
  const [name, email, password, confirm] = data;

  const Json = {
    name: name.value,
    email: email.value,
    password: password.value,
    confirm: confirm.value,
  };

  return {
    data,
    Json,
  };
};

describe("firmware", () => {
  test("expect data after correct validation", () => {
    const { data, Json } = utils();

    const createResult = RegistrationForm(data);

    expect(createResult).toEqual({ status: true, result: Json });
  });

  test("expect data after incorrect password", () => {
    const data = [
      { type: undefined, value: "piotr goik" },
      { type: undefined, value: "woszczo04@gmail.com" },
      { type: undefined, value: "Tandeta23!" },
      { type: undefined, value: "" },
    ];

    const createResult = RegistrationForm(data);

    expect(createResult).toEqual({
      status: false,
      result: "check password or confirm password",
    });
  });

  test("expect data after incorrect email", () => {
    const data = [
      { type: undefined, value: "piotr goik" },
      { type: undefined, value: "" },
      { type: undefined, value: "Tandeta23!" },
      { type: undefined, value: "Tandeta23!" },
    ];

    const createResult = RegistrationForm(data);

    expect(createResult).toEqual({
      status: false,
      result:
        "Password must have minimum 8 characters and contain at least 1 UPPERCASE, 1 lower case, 1 number, 1 special character.",
    });
  });
});

describe("Utility", () => {
  test("expect correct utils", () => {
    const { utils } = Utility();
    const utilsTest = {
      footerDesc: "already have an account ?",
      buttonName: "register",
      footerName: "login",
      registerTypes: ["Name", "Email", "Password", "Confirm Password"],
      descriptions: ["password", "data"],
    };

    expect(utils).toEqual(utilsTest);
  });
});
