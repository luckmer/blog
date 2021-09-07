import { FormPanel } from "../form/FormPanel";
import * as P from "../../css/Profile.css";
import Firmware from "./firmware";
import * as Constants from "./Constants";

const Profile = () => {
  const {
    handleChangeImg,
    handleLogout,
    handleSubmit,
    flag,
    fillForm,
    user,
    elRefs,
    state,
  } = Firmware();

  return (
    <P.ProfileMain>
      <P.ProfileSpacer>
        <P.UserPanel>
          <P.UserData>
            <P.IMG>
              <img src={user ? user : " "} alt="" />
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
              Constants.registerTypes,
              handleSubmit,
              elRefs,
              Constants.buttonName,
              Constants.footerDesc,
              Constants.footerName,
              fillForm
            )}
            <div>{flag ? <p>{state.PasswordResult}</p> : ""}</div>
          </P.UserData>
          <P.Logout>
            <P.Btn onClick={handleLogout}>Logout</P.Btn>
          </P.Logout>
        </P.UserPanel>
      </P.ProfileSpacer>
      <P.ProfileSpacer>
        <div>display user blog</div>
      </P.ProfileSpacer>
    </P.ProfileMain>
  );
};

export default Profile;
