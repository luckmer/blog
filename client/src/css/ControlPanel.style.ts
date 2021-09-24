import { fetchPostComment } from "./../redux/services/comments";
import styled from "styled-components";

export const ControlPanel = styled.div`
  margin-top: 10px;
`;

export const CommentPanel = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-between;
`;

export const CommentsUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50px;
  overflow: hidden;
  text-align: center;
`;

export const CommentSpacer = styled.div`
  width: 100%;
  word-break: break-all;
  margin: 10px;
  div {
    padding-bottom: 5px;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Small = styled.small`
  word-break: break-normal;
`;

export const Button = styled.button`
  font-weight: lighter;
  padding: 5px;
  margin: 0 10px 0 10px;
  letter-spacing: 1px;
  font-size: 15px;
  outline: 0;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);

  &:after {
    content: "";
    background-color: #6fc67c;
    width: 100%;
    z-index: -1;
    border-radius: 5px;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.5s;
  }
  &:hover::after {
    top: 0px;
    left: 0px;
  }
`;

export const CommentsPanel = styled.div`
  margin-top: 20px;
`;

export const Algin = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const CommentsSection = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const IMG = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    width: 60%;
  }

  @media screen and (min-width: 500px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

export const Input = styled.input`
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  background-color: #fff;
  border: 1px solid grey;
`;
