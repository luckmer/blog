import React, { useState } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { CreateRefs, RegistrationForm } from "../../../hooks/index";
import { sagaActions } from "../../../redux/saga/sagaActions";
import * as Type from "../../Types/FillInterface";

const Firmware = () => {
  const Typed: TypedUseSelectorHook<Type.RegisterState> = useSelector;
  const state = Typed((state) => state.back.registration);
  const [fillForm, setFillForm] = useState<Type.FillInterface | undefined>(
    undefined
  );

  const footerDesc: string = "already have an account ?";
  const buttonName: string = "register";
  const footerName: string = "login";
  const registerTypes: string[] = [
    "Name",
    "Email",
    "Password",
    "Confirm Password",
  ];

  const dispatch = useDispatch();
  const arrLength = registerTypes.length;
  const { elRefs } = CreateRefs(arrLength);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = elRefs.map((el, i) => {
      const value: string = el.current.value;
      return { type: registerTypes[i], value: value };
    });
    console.log(elRefs);

    const formData = RegistrationForm(value);

    const statusForm: Type.FillInterface = {
      status: formData.status,
      result: formData.result,
    };

    !formData.status ? setFillForm(statusForm) : setFillForm(undefined);

    if (formData.status) {
      const data = formData.result;
      dispatch({ type: sagaActions.REGISTER_USER, data });
      setTimeout(
        () =>
          elRefs.forEach((el) => {
            if (el.current) el.current.value = "";
          }),
        100
      );
    }
  };
  const descriptions = ["password", "data"];

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
};

export default Firmware;
