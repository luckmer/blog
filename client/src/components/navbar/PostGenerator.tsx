import { Fragment } from "react";
import { Link } from "react-router-dom";
import { postState } from "../Types/NavBarState";

import * as nav from "../../css/Nav.css";

export const PostGenerator = ({ id, avatar }: postState) => {
  return (
    <Fragment>
      <nav.Ul>
        <Link to="/postCreator">
          <li>Create Post</li>
        </Link>
        <Link to={`/profile/${id}?id=${id}&check=`}>
          <nav.NAVIMG src={avatar} alt="" />
        </Link>
      </nav.Ul>
    </Fragment>
  );
};
