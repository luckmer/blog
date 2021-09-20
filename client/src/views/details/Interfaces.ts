import { InputChange } from "../../components/Types/Types";
import { FormEvent } from "react";

export interface IdProps {
  ID: string | number | any;
  id: string | undefined;
}

export interface Props {
  back: {
    registration: {
      userData: {
        [key: string]: string;
      };
    };
    comments: {
      comments: {
        [key: string]: string;
      }[];
    };
    posts: {
      posts: {
        [key: string]: string;
      }[];
    };
  };
}

export interface ErrorObj {
  [key: string]: string;
}

export interface PropPanel {
  userProfile: {
    [key: string]: string;
  };
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  comment: string;
  handleChange: (e: InputChange) => void;
  Errors: ErrorObj | undefined;
}
