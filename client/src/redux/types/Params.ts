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

export interface DataS {
  confirm: string;
  email: string;
  name: string;
  password: string;
}

export interface AvatarState {
  type: string;
  updateFiles: {
    file: File;
    ID: any;
  };
}
