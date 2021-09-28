export interface NavBarState {
  back: {
    posts: {
      posts: {
        [key: string]: string;
      }[];
    };
    registration: {
      avatar: string;
      userStatus: boolean;
      userData: {
        email: string;
        name: string;
        _id: string;
        avatar: string;
      };
    };
  };
}
export interface postState {
  id: string;
  avatar: string;
  MenuControl: () => void;
}
