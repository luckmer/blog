import * as Constants from "../Types/Constants";
import { FormPanel } from "../form/FormPanel";
import * as P from "../../css/Profile.css";
import Firmware from "./firmware";

const Profile = () => {
  const firmware = Firmware();

  return (
    <P.ProfileMain>
      <P.ProfileSpacer>
        <P.UserPanel>
          <P.UserData>
            <P.IMG>
              <img src={firmware.user ? firmware.user : " "} alt="" />
              <div>
                <span>
                  <label htmlFor="file_up">Import</label>
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    id="file_up"
                    style={{ display: "none" }}
                    onChange={firmware.handleChangeImg}
                  />
                </span>
              </div>
            </P.IMG>
            {FormPanel(
              Constants.registerTypes,
              firmware.handleSubmit,
              firmware.elRefs,
              Constants.buttonName,
              Constants.footerDesc,
              Constants.footerName,
              firmware.fillForm
            )}
            <div>
              {firmware.flag ? <p>{firmware.state.PasswordResult}</p> : ""}
            </div>
          </P.UserData>
          <P.Logout>
            <P.Btn onClick={firmware.handleLogout}>Logout</P.Btn>
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
