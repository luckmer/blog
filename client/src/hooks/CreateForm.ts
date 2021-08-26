import * as Type from "../components/form/types/FillInterface";
import { Move, validateEmail, validatePassword } from "../constants";

const CreateForm = (data: Type.registrationInterface[]) => {
  const [name, email, password, confirm] = data;
  const emailReq = validateEmail(email.value);
  const passwordReq = validatePassword(password.value);
  const confirmReq = validatePassword(confirm.value);

  if (
    Move(name.value) &&
    Move(email.value) &&
    Move(password.value) &&
    Move(confirm.value) &&
    emailReq &&
    passwordReq &&
    confirmReq &&
    password.value === confirm.value
  ) {
    const Json = {
      name: name.value,
      email: email.value,
      password: password.value,
      confirm: confirm.value,
    };
    return { status: true, result: Json };
  } else {
    if (!emailReq && !passwordReq) {
      return { status: false, result: "please check your password or email" };
    }

    if (password.value !== confirm.value) {
      return {
        status: false,
        result: "check password or confirm password",
      };
    }
    return {
      status: false,
      result:
        "Password must have minimum 8 characters and contain at least 1 UPPERCASE, 1 lower case, 1 number, 1 special character.",
    };
  }
};

export default CreateForm;
