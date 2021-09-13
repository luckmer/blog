import styled from "styled-components";
import { NavBar } from "./components";
import { Switch, Route, useLocation } from "react-router-dom";
import { routes } from "./routes";
import Api from "./redux/services/Api";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const location = useLocation();

  Api();

  return (
    <Main>
      <NavBar />
      <Switch location={location} key={location.pathname}>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
      </Switch>
    </Main>
  );
};

export default App;
