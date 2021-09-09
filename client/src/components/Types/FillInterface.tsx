import { ChangeEvent } from "react";

export interface FillInterface {
  status: boolean;
  result:
    | string
    | { name?: string; email?: string; password?: string; confirm?: string }
    | { email?: string; password?: string };
}

export interface registrationInterface {
  type: string;
  value: string;
}

export interface RegisterState {
  back: {
    userStatus: boolean | null;
    registration: {
      registrationStatus: boolean;
      registrationResult: string;
      loginStatus: boolean;
      loginResult: string;
    };
  };
}

export interface CHECKPROPS {
  ID: string | number | any;
}

export interface ProfileState {
  back: {
    registration: {
      loginStatus: string;
      avatar: string;
      PasswordResult: string;
      PasswordStatus: boolean;
      userStatus: boolean;
      userData: {
        avatar: string;
        email: string;
        _id: string;
        name: string;
      };
    };
  };
}

export type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
