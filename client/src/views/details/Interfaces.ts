import { InputChange } from "../../components/Types/Types";
import { FormEvent } from "react";

export interface IdProps {
  ID: string | number | any;
  id: string | undefined;
}

export interface Props {
  back: {
    reply: {
      reply: {
        [key: string]: string;
      }[];
    };
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

export type HandleType = (props: {
  id: string;
  option?: string;
  post?: string;
  user?: string;
}) => void;

export interface PropsS {
  replies: {
    [key: string]: string;
  }[];
  userReplyAvatar: {
    [key: string]: string;
  };
  status: boolean;
  comments: {
    [key: string]: string;
  }[];
  el: {
    [key: string]: string;
  };

  handleDesignPost: HandleType;
  handleUpdateComment: HandleType;
}

export interface Prop {
  [key: string]: string;
}

export interface UserType {
  back: {
    registration: {
      userStatus: boolean;
      userData: {
        [key: string]: string;
      };
    };
  };
}
