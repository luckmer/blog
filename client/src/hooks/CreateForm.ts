import * as Type from "../components/Types/FillInterface";
import { validateEmail, validatePassword } from "../constants";

const CreateForm = (data: Type.registrationInterface[]) => {
  const [name, email, password, confirm] = data;
  const emailReq = validateEmail(email.value);
  const passwordReq = validatePassword(password.value);
  const confirmReq = validatePassword(confirm.value);

  if (name && email) {
    if (name && emailReq) {
      const json = {
        name: name.value,
        email: email.value,
      };
      return { status: true, result: json };
    }
  }

  if (password && confirm) {
    if (passwordReq && confirmReq && password.value === confirm.value) {
      const json = {
        password: password.value,
        confirm: confirm.value,
      };
      return { status: true, result: json };
    }
  } else if (password.value !== confirm.value) {
    return {
      status: false,
      result: "check password or confirm password",
    };
  } else
    return {
      status: false,
      result:
        "Password must have minimum 8 characters and contain at least 1 UPPERCASE, 1 lower case, 1 number, 1 special character.",
    };

  return {
    status: false,
    result: "fill empty fields",
  };
};

export default CreateForm;
