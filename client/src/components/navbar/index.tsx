import { Link } from "react-router-dom";
import * as nav from "../../css/Nav.css";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { NavBarState } from "../Types/NavBarState";
import { PostGenerator } from "./PostGenerator";
import { LoginPanel } from "./LoginPanel";

const Index = () => {
  const Typed: TypedUseSelectorHook<NavBarState> = useSelector;
  const state = Typed((state) => state.back.registration);
  const user = Typed((state) => state.back.registration?.avatar);

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
          {id ? (
            <PostGenerator id={id} avatar={user && user ? user : ""} />
          ) : (
            <LoginPanel />
          )}
        </nav.NavSpacer>
      </nav.NavContent>
    </nav.Nav>
  );
};

export default Index;
