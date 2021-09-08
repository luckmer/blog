import { Fragment } from "react";
import { Link } from "react-router-dom";
import * as nav from "../../css/Nav.css";
import { postState } from "../Constants/NavBarState";

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
