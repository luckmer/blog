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

  const registerTypes: string[] = ["Email", "Password"];
  const buttonName: string = "Login";
  const footerName: string = "register";
  const footerDesc: string = "You don't have an account?";
  const arrLength = registerTypes.length;

  useEffect(() => {
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill(null)
        .map((_, i) => elRefs[i] || createRef<HTMLDivElement>())
    );
  }, [arrLength]);

  const createRegistration = (data: registrationInterface[]) => {
    const [email, password] = data;
    const emailReq = validateEmail(email.value);
    const passwordReq = validatePassword(password.value);

    if (Move(email.value) && Move(password.value) && emailReq && passwordReq) {
      const Json = {
        email: email.value,
        password: password.value,
      };
      return { status: true, result: Json };
    } else {
      return { status: false, result: "please check your password or email" };
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
