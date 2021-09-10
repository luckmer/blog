import { Fragment } from "react";
import { Link } from "react-router-dom";

import * as nav from "../../css/Nav.css";

export const LoginPanel = () => {
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
