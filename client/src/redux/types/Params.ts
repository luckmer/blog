export interface Params {
  data: {
    data: {
      confirm: string;
      email: string;
      name: string;
      password: string;
    };
    id: string;
  };

  type: string;
  ID: string;
  response: {
    confirm: string;
    email: string;
    name: string;
    password: string;
  };
}
