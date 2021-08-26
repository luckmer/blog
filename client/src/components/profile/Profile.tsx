import React, { useState, useEffect } from "react";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { sagaActions } from "../../redux/saga/sagaActions";
import { CreateRefs, CreateForm } from "../../hooks/index";
import * as Type from "../form/types/FillInterface";
import { FormPanel } from "../form/FormPanel";
import * as P from "../../css/Profile.css";

const Profile = () => {
  const [flag, setFlag] = useState(false);
  const [avatar, setAvatar] = useState<string | File>("");
  const Typed: TypedUseSelectorHook<Type.ProfileState> = useSelector;
  const [fillForm, setFillForm] = useState<Type.FillInterface | undefined>(
    undefined
  );
  const { ID }: Type.CHECKPROPS = {
    ID: new URLSearchParams(window.location.search).get("id") || null,
  };

  const state = Typed((state) => state.back.registration);

  const dispatch = useDispatch();

  const registerTypes: string[] = [
    "Name",
    "Email",
    "Password",
    "Confirm Password",
  ];
  const buttonName: string = "update";
  const footerName: string = "";
  const footerDesc: string = "";
  const arrLength = registerTypes.length;

  const { elRefs } = CreateRefs(arrLength);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = elRefs.map((el, i) => {
      const value: string = el.current.value;
      return { type: registerTypes[i], value: value };
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

  const handleChangeImg = (e: Type.InputChange) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (files) {
      const file = files[0];
      dispatch({ type: sagaActions.UPDATE_AVATAR, file });
      setAvatar(file);
    }
  };

  const handleLogout = () => {};

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

  return (
    <P.ProfileMain>
      <P.ProfileSpacer>
        <P.UserPanel>
          <P.UserData>
            <P.IMG>
              <img src={avatar ? URL.createObjectURL(avatar) : ""} alt="" />
              <div>
                <span>
                  <label htmlFor="file_up">Import</label>
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    id="file_up"
                    style={{ display: "none" }}
                    onChange={handleChangeImg}
                  />
                </span>
              </div>
            </P.IMG>
            {FormPanel(
              registerTypes,
              handleSubmit,
              elRefs,
              buttonName,
              footerDesc,
              footerName,
              fillForm
            )}
            <div>{flag ? <p>{state.PasswordResult}</p> : ""}</div>
          </P.UserData>
          <P.Logout>
            <P.Btn onClick={handleLogout}>Logout</P.Btn>
          </P.Logout>
        </P.UserPanel>
      </P.ProfileSpacer>
      <P.ProfileSpacer>display user blog</P.ProfileSpacer>
    </P.ProfileMain>
  );
};

export default Profile;
