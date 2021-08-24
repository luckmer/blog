export const Move = (data: string) => data !== "" && data !== undefined;

export const validateEmail = (email: string) => {
  const req = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return req.test(email);
};

export const validatePassword = (password: string) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
};
