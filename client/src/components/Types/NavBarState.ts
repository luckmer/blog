export interface NavBarState {
  back: {
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
