import { useState } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { CreateRefs, RegistrationForm } from "../../../hooks/index";
import { sagaActions } from "../../../redux/saga/sagaActions";

import * as Type from "../../Types/FillInterface";

interface UtilsType {
  registerTypes: string[];
  footerDesc: string;
  footerName: string;
  buttonName: string;
  descriptions: string[];
}

export const Utility = () => {
  const utils: UtilsType = {
    footerDesc: "already have an account ?",
    buttonName: "register",
    footerName: "login",
    registerTypes: ["Name", "Email", "Password", "Confirm Password"],
    descriptions: ["password", "data"],
  };

  return { utils };
};

const Firmware = () => {
  const Typed: TypedUseSelectorHook<Type.RegisterState> = useSelector;
  const state = Typed((state) => state.back.registration);
  const [fillForm, setFillForm] = useState<Type.FillInterface | undefined>(
    undefined
  );

  const { utils }: { utils: UtilsType } = Utility();
  const { registerTypes, footerDesc, footerName, buttonName, descriptions } =
    utils;

  const dispatch = useDispatch();
  const arrLength = registerTypes.length;
  const { elRefs } = CreateRefs(arrLength);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = elRefs.map((el, i) => {
      const value: string = el.current.value;
      return { type: registerTypes[i], value: value };
    });

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
