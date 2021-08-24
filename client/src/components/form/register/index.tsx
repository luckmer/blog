import React, { createRef, useState, useEffect } from "react";
import * as register from "../../../css/Register.css";
import { FormPanel } from "../FormPanel";
import { FillInterface, registrationInterface } from "../types/FillInterface";
import { Move, validateEmail, validatePassword } from "../../../constants";

const Index = () => {
  const [elRefs, setElRefs] = useState<HTMLFormElement[]>([]);
  const [fillForm, setFillForm] = useState<FillInterface | undefined>(
    undefined
  );

  const registerTypes: string[] = [
    "Name",
    "Email",
    "Password",
    "Confirm Password",
  ];
  const buttonName: string = "register";
  const footerName: string = "login";
  const footerDesc: string = "already have an account ?";

  const arrLength = registerTypes.length;
  useEffect(() => {
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill(null)
        .map((_, i) => elRefs[i] || createRef<HTMLDivElement>())
    );
  }, [arrLength]);

  const createRegistration = (data: registrationInterface[]) => {
    const [name, email, password, confirm] = data;
    const emailReq = validateEmail(email.value);
    const passwordReq = validatePassword(password.value);
    const confirmReq = validatePassword(confirm.value);

    if (
      Move(name.value) &&
      Move(email.value) &&
      Move(password.value) &&
      Move(confirm.value) &&
      emailReq &&
      passwordReq &&
      confirmReq
    ) {
      const Json = {
        name: name.value,
        email: email.value,
        password: password.value,
        confirm: confirm.value,
      };

      return { status: true, result: Json };
    } else if (!emailReq && !passwordReq) {
      return { status: false, result: "please check your password or email" };
    } else {
      return {
        status: false,
        result:
          "Password must have minimum 8 characters and contain at least 1 UPPERCASE, 1 lower case, 1 number, 1 special character.",
      };
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = elRefs.map((el, i) => {
      const value: string = el.current.value;
      return { type: registerTypes[i], value: value };
    });

    const registerResult = createRegistration(value);

    if (!registerResult.status) {
      const statusForm: FillInterface = {
        status: registerResult.status,
        result: registerResult.result,
      };
      setFillForm(statusForm);
    } else setFillForm(undefined);

    if (registerResult.status) {
      setTimeout(() => {
        elRefs.forEach((el) => {
          el.current.value = "";
        });
      });
    }
  };

  return (
    <register.MainRegister>
      <register.MainPanel>
        <register.MainHeader>
          <register.HeaderPanel>{buttonName}</register.HeaderPanel>
        </register.MainHeader>
        {FormPanel(
          registerTypes,
          handleSubmit,
          elRefs,
          buttonName,
          footerDesc,
          footerName,
          fillForm
        )}
      </register.MainPanel>
    </register.MainRegister>
  );
};

export default Index;
