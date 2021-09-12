import * as Type from "./FillInterface";

export interface PropsPosts {
  back: {
    pagination: {
      [key: string]: number;
    };
    posts: {
      posts: {
        [key: string]: string;
      }[];
    };
  };
}
export interface Props {
  handleChangeImg: (e: Type.InputChange) => Promise<void>;
  handleLogout: () => void;
  flag: boolean;
  fillForm: Type.FillInterface | undefined;
  user: string;
  elRefs: HTMLFormElement[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  registerTypes: string[];
  descriptions: string[];
  state: {
    PasswordResult: string;
  };
}

export interface dataProp {
  [key: string]: string;
}
