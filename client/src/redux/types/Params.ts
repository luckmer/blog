export interface Params {
  ids: {
    [key: string]: string;
  };
  props: {
    [key: string]: string;
  };
  data: {
    data: {
      confirm: string;
      email: string;
      name: string;
      password: string;
      avatar?: string;
      _id?: string;
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
  id?: string;
  post?: string;
  confirm?: string;
  email?: string;
  name?: string;
  password?: string;
}

export interface AvatarState {
  type: string;
  updateFiles: {
    file: File;
    ID: any;
  };
}
