import { useState, useEffect, Fragment, memo, useMemo } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { NavBarState } from "../Types/NavBarState";
import { PostGenerator } from "./PostGenerator";
import { LoginPanel } from "./LoginPanel";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as nav from "../../css/Nav.css";

type filterType = { [key: string]: string }[];

const Index = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [filterResult, setFilterResult] = useState<filterType>([]);

  const Typed: TypedUseSelectorHook<NavBarState> = useSelector;
  const state = Typed((state) => state.back.registration);
  const user = Typed((state) => state.back.registration?.avatar);
  const posts = Typed((state) => state.back.posts.posts);

  const id = state.userData?._id;

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
  }, [menu]);

  useEffect(() => {
    let filterS: {
      [key: string]: string;
    }[] = posts.slice();

    filterS = search
      ? filterS.filter((el) =>
          el.header
            .trim()
            .toLowerCase()
            .toString()
            .includes(search.trim().toLowerCase().toString())
        )
      : [];

    setFilterResult(filterS);
  }, [posts, search]);

  const handleClear = () => setSearch("");

  const MemorizeMap = useMemo(() => {
    return filterResult.map((el, index) => (
      <NavDecorator key={index} onClick={handleClear}>
        <Link to={`/details/${el._id}?id=${el._id}&check=`}>
          <small>{el.header}</small>
        </Link>
      </NavDecorator>
    ));
  }, [filterResult]);

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
          <nav.Input
            type="text"
            value={search}
            placeholder="Enter your search..."
            onChange={(e) => setSearch(e.target.value)}
            list="postsResult"
          />
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
      <FilterNav>{MemorizeMap}</FilterNav>
    </Fragment>
  );
};

const NavDecorator = styled.div`
  margin: 10px;
  padding: 5px 10px 5px 10px;

  text-align: center;
  border-radius: 100px;
  background-color: #040d3e;
  background: rgb(238, 238, 238);
  z-index: 10;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #0056b3;
  }
`;

const FilterNav = styled.div`
  display: flex;
  max-width: 1140;
  margin: auto;
  flex-flow: row wrap;
  max-height: calc(100vh - 100px);
`;

export default memo(Index);
