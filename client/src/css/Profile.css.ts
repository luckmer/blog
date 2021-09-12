import styled from "styled-components";

export const ProfileMain = styled.section`
  display: flex;
  justify-content: space-space-between;
  max-width: 1140px;
  width: 100%;
  height: 100%;
  margin: auto;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

export const ProfileSpacer = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 25px;
  justify-content: center;
`;

export const UserPanel = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Logout = styled.div`
  width: 100%;
  text-align: right;
`;

export const Btn = styled.button`
  color: #fff;
  margin: 2px;
  background-color: red;
  border: none;
  width: 20%;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

export const UserData = styled.div`
  border: 1px solid #ddd;
  height: 100%;
  width: 100%;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const IMG = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  margin: 0 auto 15px;
  border: 1px solid #ddd;

  div {
    transition: all 0.5s;
    top: 50%;
    background-color: #f5f6f6;
    position: relative;
    text-align: center;
    height: 100%;
    width: 100%;
  }
  label {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #23272b;
    font-weight: bold;
    cursor: pointer;
  }

  &:hover {
    div {
      top: -50%;
    }
  }

  img {
    background-color: #fff;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const VisitorSpacer = styled.div`
  width: 180px;
  overflow: hidden;
  margin: 0 auto 15px;
`;

export const Small = styled.small`
  font-weight: 600;
  opacity: 0.8;
  line-height: 1.3;
  color: #3e457c;
`;

export const NextP = styled.p`
  color: grey;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
`;

export const Card = styled.div`
  display: flex;
  border: 1px solid #ddd;
  padding: 0.5rem !important;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const Img = styled.img`
  height: 100% !important;
  width: 100% !important;
  object-fit: cover;
  border-radius: 10px;
`;

export const ImgDiv = styled.div`
  max-height: 170px;
  overflow: hidden;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`;

export const BreakP = styled.p`
  word-break: break-all;
`;

export const CardPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
`;

export const CardDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-radius: 10px;
`;
