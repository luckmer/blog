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
    user: {
      userByIdStatus: {
        [key: string]: string;
      };
    };
    registration: {
      _id: string;
      loginStatus: string;
      avatar: string;
      PasswordResult: string;
      PasswordStatus: boolean;
      userStatus: boolean;

      userData: {
        [key: string]: string;
      };
    };
  };
}

export type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
