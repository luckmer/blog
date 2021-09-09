import * as register from "../../../css/Register.css";
import { FormPanel } from "../FormPanel";
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
          2
        )}
        {(firmware.state.registrationStatus !== null &&
          !firmware.state.registrationStatus) ||
        firmware.state.registrationStatus ? (
          <span>{firmware.state.registrationResult} </span>
        ) : (
          ""
        )}
      </register.MainPanel>
    </register.MainRegister>
  );
};

export default Index;
