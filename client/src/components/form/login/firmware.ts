import React, { useState } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { Move, validateEmail, validatePassword } from "../../../constants";
import { sagaActions } from "../../../redux/saga/sagaActions";
import { CreateRefs } from "../../../hooks/index";
import { useHistory } from "react-router";

import * as Type from "../../Types/FillInterface";

interface UtilsType {
  registerTypes: string[];
  footerDesc: string;
  footerName: string;
  buttonName: string;
  descriptions: string[];
}

export const createForm = (data: Type.registrationInterface[]) => {
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

export const Utility = () => {
  const utils: UtilsType = {
    registerTypes: ["Email", "Password"],
    footerDesc: "You don't have an account?",
    footerName: "register",
    buttonName: "Login",
    descriptions: ["password", "email"],
  };

  return { utils };
};

function Firmware() {
  const [fillForm, setFillForm] = useState<Type.FillInterface | undefined>(
    undefined
  );

  const Typed: TypedUseSelectorHook<Type.RegisterState> = useSelector;
  const state = Typed((state) => state.back.registration);
  const history = useHistory();

  const { utils }: { utils: UtilsType } = Utility();
  const { registerTypes, footerDesc, footerName, buttonName, descriptions } =
    utils;

  const arrLength = registerTypes.length;
  const dispatch = useDispatch();

  const { elRefs } = CreateRefs(arrLength);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = elRefs.map((el, i) => {
      const value: string = el.current.value;
      return { type: registerTypes[i], value: value };
    });

    console.log(value);
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
