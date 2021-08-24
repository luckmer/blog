import { Link } from "react-router-dom";
import * as nav from "../../css/Nav.css";

const Index = () => {
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
        </nav.NavSpacer>
      </nav.NavContent>
    </nav.Nav>
  );
};

export default Index;
