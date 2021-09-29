import { FillInterface } from "../Types/FillInterface";
import * as register from "../../css/Register.css";

export const smallInformation = (
  fillForm: FillInterface | undefined,
  ref: any
) => {
  return (
    <register.Small>
      {fillForm !== undefined &&
      fillForm.status === false &&
      ref?.current &&
      ref.current.value === ""
        ? "required!"
        : ""}
    </register.Small>
  );
};
