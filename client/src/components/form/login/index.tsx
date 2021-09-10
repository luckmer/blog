import { FormPanel } from "../FormPanel";

import * as register from "../../../css/Register.css";
import Firmware from "./firmware";

const Index = () => {
  const firmware = Firmware();

  return (
    <register.MainRegister>
      <register.MainPanel>
        <register.MainHeader>
          <register.HeaderPanel>{firmware.buttonName}</register.HeaderPanel>
        </register.MainHeader>
        {FormPanel(
          firmware.descriptions,
          firmware.registerTypes,
          firmware.handleSubmit,
          firmware.elRefs,
          firmware.buttonName,
          firmware.footerDesc,
          firmware.footerName,
          firmware.fillForm,
          1
        )}
        {(firmware.state.loginStatus !== null && !firmware.state.loginStatus) ||
        firmware.state.loginStatus ? (
          <span>{firmware.state.loginResult} </span>
        ) : (
          ""
        )}
      </register.MainPanel>
    </register.MainRegister>
  );
};

export default Index;
