import React, { useState, useEffect } from "react";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { sagaActions } from "../../redux/saga/sagaActions";
import { CreateRefs, CreateForm } from "../../hooks/index";
import * as Type from "../form/types/FillInterface";
import { useHistory } from "react-router";
import * as Constants from "../Constants/Constants";
import ApiImg from "../../api/ImgApi";

const Firmware = () => {
  const [flag, setFlag] = useState(false);
  const Typed: TypedUseSelectorHook<Type.ProfileState> = useSelector;
  const [fillForm, setFillForm] = useState<Type.FillInterface | undefined>(
    undefined
  );

  const { ID }: Type.CHECKPROPS = {
    ID: new URLSearchParams(window.location.search).get("id") || null,
  };

  const state = Typed((state) => state.back.registration);
  const user = Typed((state) => state.back.registration.avatar);
  const { elRefs } = CreateRefs(Constants.arrLength);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = elRefs.map((el, i) => {
      const value: string = el.current.value;
      return { type: Constants.registerTypes[i], value: value };
    });

    const formData = CreateForm(value);

    if (!formData.status) {
      const statusForm: Type.FillInterface = {
        status: formData.status,
        result: formData.result,
      };

      setFillForm(statusForm);
    } else setFillForm(undefined);

    if (formData.status) {
      const data = { data: formData.result, id: ID };
      dispatch({ type: sagaActions.UPDATE_USER, data });
      setTimeout(() => elRefs.forEach((el) => (el.current.value = "")), 100);
    }
  };

  const ImgStatus = async (e: Type.InputChange) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    if (!files) return;

    const file = files[0];

    const imgCheck = ApiImg.checkImg(file);

    if (!imgCheck) {
      const result = await ApiImg.Upload(file);
      const { url } = result;

      const updateFiles = { url, ID };

      return updateFiles;
    }
  };

  const handleChangeImg = async (e: Type.InputChange) => {
    const status = await ImgStatus(e);
    if (status) {
      const { url, ID } = status;
      const updateFiles = { url, ID };
      dispatch({ type: sagaActions.UPDATE_AVATAR, updateFiles });
    }
  };

  const handleLogout = () => dispatch({ type: sagaActions.LOGOUT_USER });

  useEffect(() => {
    if (state.PasswordStatus) {
      setFlag(true);
      setTimeout(() => setFlag(false), 3000);
    }
  }, [state.PasswordStatus]);

  useEffect(() => {
    if ({ ID }) {
      dispatch({ type: sagaActions.USER_BY_ID, ID });
    }
  }, [ID, dispatch]);

  useEffect(() => {
    if (!state.userStatus && state.userStatus !== null) {
      history.push("/login");
    }
  }, [history, state.userStatus]);

  return {
    handleChangeImg,
    handleLogout,
    handleSubmit,
    flag,
    fillForm,
    user,
    elRefs,
    state,
  };
};
export default Firmware;