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
