import React, { useState } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { Move, validateEmail, validatePassword } from "../../../constants";
import { sagaActions } from "../../../redux/saga/sagaActions";
import { CreateRefs } from "../../../hooks/index";
import * as Type from "../../Types/FillInterface";
import { useHistory } from "react-router";

function Firmware() {
  const [fillForm, setFillForm] = useState<Type.FillInterface | undefined>(
    undefined
  );
  const Typed: TypedUseSelectorHook<Type.RegisterState> = useSelector;
  const state = Typed((state) => state.back.registration);
  const history = useHistory();

  const registerTypes: string[] = ["Email", "Password"];
  const footerDesc: string = "You don't have an account?";
  const footerName: string = "register";
  const buttonName: string = "Login";
  const arrLength = registerTypes.length;

  const dispatch = useDispatch();

  const { elRefs } = CreateRefs(arrLength);

  const createForm = (data: Type.registrationInterface[]) => {
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

    const formData = createForm(value);

    const statusForm: Type.FillInterface = {
      status: formData.status,
      result: formData.result,
    };

    !formData.status ? setFillForm(statusForm) : setFillForm(undefined);

    if (formData.status) {
      const data = formData.result;
      dispatch({ type: sagaActions.LOGIN_USER, data });
      setTimeout(() => {
        elRefs.forEach((el) => {
          if (el.current) el.current.value = "";
        });
        history.push("/");
      }, 100);
    }
  };
  const descriptions = ["password", "email"];

  return {
    descriptions,
    registerTypes,
    handleSubmit,
    elRefs,
    buttonName,
    footerDesc,
    footerName,
    fillForm,
    state,
  };
}

export default Firmware;
