import { useState, useEffect, Fragment } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { NavBarState } from "../Types/NavBarState";
import { PostGenerator } from "./PostGenerator";
import { LoginPanel } from "./LoginPanel";
import { Link } from "react-router-dom";

import * as nav from "../../css/Nav.css";

const Index = () => {
  const [menu, setMenu] = useState(false);
  const Typed: TypedUseSelectorHook<NavBarState> = useSelector;
  const state = Typed((state) => state.back.registration);
  const user = Typed((state) => state.back.registration?.avatar);

  const id = state.userData?._id;

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
  }, [menu]);

  return (
    <Fragment>
      <nav.Menu state={menu} onClick={() => setMenu(!menu)}>
        <div />
        <div />
        <div />
      </nav.Menu>
      <nav.MobileNav state={menu}>
        <nav.Ul>
          <Link to="">
            <li>Fox</li>
            <span> | Blog</span>
          </Link>
        </nav.Ul>
      </nav.MobileNav>

      <nav.Nav state={menu}>
        <nav.NavSpacer>
          <nav.Ul onClick={() => setMenu(false)}>
            <Link to="">
              <li>Fox</li>
              <span> | Blog</span>
            </Link>
          </nav.Ul>
        </nav.NavSpacer>
        <nav.NavSpacer>
          <nav.Input />
        </nav.NavSpacer>
        <nav.NavSpacer>
          {id ? (
            <PostGenerator
              id={id}
              avatar={user && user ? user : ""}
              MenuControl={() => setMenu(false)}
            />
          ) : (
            <LoginPanel />
          )}
        </nav.NavSpacer>
      </nav.Nav>
    </Fragment>
  );
};

export default Index;
