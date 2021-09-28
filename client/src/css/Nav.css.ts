import styled from "styled-components";
interface Props {
  state: boolean;
}

interface Test {
  value: string;
}

export const Ul = styled.ul`
  list-style: none;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 10px;
  cursor: pointer;
  display: flex;
  user-select: none;
  -webkit-user-select: none;
  -html-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  a {
    padding: 10px;
    &:nth-child(1) {
      text-transform: none;
    }

    display: flex;
    color: #eee7ea;
    text-decoration: none;
  }
`;

export const NavSpacer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NAVIMG = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  transform: translateY(-3px);
  border-radius: 50%;
  background-color: #fff;
`;

export const Nav = styled.nav<Props>`
  z-index: 998;
  max-width: 1140px;
  margin: auto;
  background-color: #040d3e;

  @media screen and (min-width: 910px) {
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 910px) {
    transform: ${({ state }) =>
      state ? "translateX(0)" : "translateX(-200%)"};
    background: linear-gradient(222.26deg, #3b1d60 1.22%, #040d3e 106.28%);
    display: flex;
    width: 100%;
    height: 100%;
    padding: 4vh 4vw 4vh 4vw;
    font-size: 16px;
    position: fixed;
    align-items: center;
    transition: transform 1s ease;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
export const Spacer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  &&:nth-child(2) {
    justify-content: flex-end;
  }
  @media (max-width: 910px) {
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    &&:nth-child(2) {
      height: auto;
    }
  }
`;

export const UserPanel = styled.div`
  display: flex;
  @media screen and (max-width: 910px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const UserSpacer = styled.div`
  padding: 0 10px 0 30px;
  @media screen and (max-width: 910px) {
    height: 100%;
    padding-top: 20px;
    font-size: 3vh;
    padding-bottom: 20px;
  }
`;

export const LoginSpacer = styled.div`
  padding: 0 10px 0 30px;
`;

export const P = styled.p`
  color: #b5b5b5;
  cursor: pointer;
`;

export const Sizer = styled.div<Test>`
  cursor: pointer;
  box-shadow: ${({ value }) =>
    value === "SIGN IN " || value === "DEMO"
      ? ""
      : " -11.09px 18.13px 36.6483px rgba(242, 153, 74, 0.13);"};
  padding: 10px 30px 10px 30px;
  border: 1px solid #f2994a;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${({ value }) =>
    value === "SIGN IN " || value === "DEMO" ? " " : "#f2994a"};
  p {
    color: ${({ value }) =>
      value === "SIGN IN " || value === "DEMO" ? " #f2994a" : "#FFFFFF"};
    letter-spacing: 2px;
  }

  @media screen and (max-width: 910px) {
    margin-bottom: 20px;
    p {
      font-size: ${({ value }) => (value === "GET STARTED" ? "10px" : "")};
    }
  }

  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Menu = styled.div<Props>`
  display: none;
  @media screen and (max-width: 910px) {
    cursor: pointer;
    z-index: 999;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-flow: column;
    width: 3rem;
    height: 2em;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 999;
    div {
      background-color: ${({ state }) => (state ? "#ddd" : "#f2994a")};
      transform: rotate();
      width: 30px;
      height: 3px;
      transition: all 1s ease;
      &:nth-child(1) {
        transform-origin: 0% 50%;
        transform: rotateZ(${({ state }) => (state ? "45deg" : " 0deg")});
        width: ${({ state }) => (state ? "30" : "40px")};
      }
      &:nth-child(2) {
        width: ${({ state }) => (state ? "0" : "25px")};
      }
      &:nth-child(3) {
        transform-origin: 0% 100%;
        transform: rotateZ(${({ state }) => (state ? "-45deg" : " 0deg")});
        width: ${({ state }) => (state ? "30" : "15px")};
      }
    }
  }
`;

export const MobileNav = styled.div<Props>`
  display: none;
  @media screen and (max-width: 910px) {
    display: block;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    background-color: #040d3e;
    margin-bottom: 30px;
    a {
      color: #dddd;
    }
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  border: 1px solid #ddd;
  width: 100%;
  border-radius: 10px;
  padding: 5px;
`;
