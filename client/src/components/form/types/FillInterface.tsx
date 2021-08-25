export interface FillInterface {
  status: boolean;
  result:
    | string
    | { name: string; email: string; password: string; confirm: string }
    | { email: string; password: string };
}

export interface registrationInterface {
  type: string;
  value: string;
}

export interface RegisterState {
  back: {
    registration: {
      registrationStatus: boolean;
      registrationResult: string;
      loginStatus: boolean;
      loginResult: string;
    };
  };
}
