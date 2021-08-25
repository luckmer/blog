import React, { useState } from "react";
import * as Type from "../types/FillInterface";
import { Move, validateEmail, validatePassword } from "../../../constants";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { sagaActions } from "../../../redux/saga/sagaActions";
import * as register from "../../../css/Register.css";
import { CreateRefs } from "../../../hooks/index";
import { FormPanel } from "../FormPanel";

const Index = () => {
  const Typed: TypedUseSelectorHook<Type.RegisterState> = useSelector;
  const state = Typed((state) => state.back.registration);

  const [fillForm, setFillForm] = useState<Type.FillInterface | undefined>(
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
  const dispatch = useDispatch();

  const arrLength = registerTypes.length;

  const { elRefs } = CreateRefs(arrLength);

  const createForm = (data: Type.registrationInterface[]) => {
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
      confirmReq &&
      password.value === confirm.value
    ) {
      const Json = {
        name: name.value,
        email: email.value,
        password: password.value,
        confirm: confirm.value,
      };
      return { status: true, result: Json };
    } else {
      if (!emailReq && !passwordReq) {
        return { status: false, result: "please check your password or email" };
      }

      if (password.value !== confirm.value) {
        return {
          status: false,
          result: "check password or confirm password",
        };
      }
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

    const formData = createForm(value);

    if (!formData.status) {
      const statusForm: Type.FillInterface = {
        status: formData.status,
        result: formData.result,
      };
      setFillForm(statusForm);
    } else setFillForm(undefined);

    if (formData.status) {
      const data = formData.result;
      dispatch({ type: sagaActions.REGISTER_USER, data });
      setTimeout(() => {
        elRefs.forEach((el) => {
          el.current.value = "";
        });
      }, 100);
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
        {(state.registrationStatus !== null && !state.registrationStatus) ||
        state.registrationStatus ? (
          <span>{state.registrationResult} </span>
        ) : (
          ""
        )}
      </register.MainPanel>
    </register.MainRegister>
  );
};

export default Index;
