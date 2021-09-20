import { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Section = styled.section`
  font-family: "Notable", sans-serif;
  font-size: 30vw;
  max-width: 1140px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Index = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push("/"), 1500);
  }, [history]);

  return <Section>404</Section>;
};

export default Index;
