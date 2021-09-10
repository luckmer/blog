import * as Constants from "../Types/Constants";
import { Props } from "../Types/PropsPosts.types";
import { FormPanel } from "../form/FormPanel";
import * as P from "../../css/Profile.css";
import { Fragment } from "react";

export const UserProfile = ({ firmware }: { firmware: Props }) => {
  return (
    <Fragment>
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
          firmware.descriptions,
          firmware.registerTypes,
          firmware.handleSubmit,
          firmware.elRefs,
          Constants.buttonName,
          Constants.footerDesc,
          Constants.footerName,
          firmware.fillForm,
          2
        )}
        <div>{firmware.flag ? <p>{firmware.state.PasswordResult}</p> : ""}</div>
      </P.UserData>
      <P.Logout>
        <P.Btn onClick={firmware.handleLogout}>Logout</P.Btn>
      </P.Logout>
    </Fragment>
  );
};
