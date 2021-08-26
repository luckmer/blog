import jwt from "jsonwebtoken";
const SECRET = 211534129078435750;

export const validateEmail = (email: string) => {
  const req: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return req.test(email);
};

export const validatePassword = (password: string) => {
  const req: RegExp = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  return req.test(password);
};

export const createToken = (id: number) => {
  return jwt.sign({ id }, SECRET.toString(), {
    expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
  });
};
