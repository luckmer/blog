import { validateEmail, validatePassword } from "../index";

describe("index", () => {
  describe("password", () => {
    test("expect incorrect password", () => {
      const password = "Taklperta!";
      const passwordCheck = validatePassword(password);

      expect(passwordCheck).toBe(false);
    });

    test("expect correct password", () => {
      const password = "TaklopN23!";
      const passwordCheck = validatePassword(password);

      expect(passwordCheck).toBe(true);
    });
  });

  describe("email", () => {
    test("expect incorrect email", () => {
      const email = "test@!";
      const emailCheck = validatePassword(email);

      expect(emailCheck).toBe(false);
    });

    test("expect correct email", () => {
      const email = "test@onet.com";
      const emailCheck = validateEmail(email);

      expect(emailCheck).toBe(true);
    });
  });
});
