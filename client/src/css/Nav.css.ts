import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #3e457c;
  display: flex;
  align-items: center;
  padding: 2vmin;
  height: auto;
  box-shadow: rgb(17 17 26 / 10%) 0px 4px 0px;
`;

export const NavContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const Ul = styled.ul`
  list-style: none;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0 10px;
  cursor: pointer;
  display: flex;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:nth-child(2) {
    justify-content: flex-start;
  }
`;

export const Input = styled.input`
  border: none;
  display: block;
  width: 70%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  background: #3a4177;
  border-radius: 100px;
  border: none;
  color: #e9e7ea;
  transition: all 0.5s;
  &&:focus {
    outline: none;
    width: 100%;
  }
`;

export const NAVIMG = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  transform: translateY(-3px);
  border-radius: 50%;
  background-color: #fff;
`;
