import { Fragment } from "react";
import { Link } from "react-router-dom";
import * as nav from "../../css/Nav.css";
import { useSelector, TypedUseSelectorHook } from "react-redux";

interface NavBarState {
  back: {
    registration: {
      userStatus: boolean;
      userData: {
        email: string;
        name: string;
        _id: string;
      };
    };
  };
}

interface postState {
  id: string;
}

const Index = () => {
  const Typed: TypedUseSelectorHook<NavBarState> = useSelector;
  const state = Typed((state) => state.back.registration);

  const id = state.userData?._id;

  return (
    <nav.Nav>
      <nav.NavContent>
        <nav.NavSpacer>
          <nav.Ul>
            <Link to="">
              <li>Fox</li>
              <span> | Blog</span>
            </Link>
          </nav.Ul>
        </nav.NavSpacer>
        <nav.NavSpacer>
          <nav.Input placeholder="search content" />
        </nav.NavSpacer>
        <nav.NavSpacer>
          {id ? <PostGenerator id={id} /> : <LoginPanel />}
        </nav.NavSpacer>
      </nav.NavContent>
    </nav.Nav>
  );
};

export default Index;

const PostGenerator = ({ id }: postState) => {
  return (
    <Fragment>
      <nav.Ul>
        <Link to="/postCreator">
          <li>Create Post</li>
        </Link>
        <Link to={`/profile/${id}?id=${id}&check=`}>
          <nav.NAVIMG src=" " alt="" />
        </Link>
      </nav.Ul>
    </Fragment>
  );
};

const LoginPanel = () => {
  return (
    <Fragment>
      <nav.Ul>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </nav.Ul>
      <nav.Ul>
        <Link to="/register">
          <li>Register</li>
        </Link>
      </nav.Ul>
    </Fragment>
  );
};
