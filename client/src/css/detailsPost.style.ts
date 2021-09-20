import styled from "styled-components";

export const Section = styled.section`
  padding: 15px;
  max-width: 1140px;
  margin: auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const H1 = styled.h1`
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: 30px;
  word-break: break-all;
`;
export const HeaderDesc = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column-reverse;
`;
export const Small = styled.small`
  &:nth-child(2) {
    padding-bottom: 5px;
  }
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
`;
export const Header = styled.header`
  text-align: center;
  width: 100%;
`;
export const Description = styled.div`
  word-break: break-all;
  line-height: 2;
`;
export const P = styled.p`
  padding: 15px;
  color: black;
`;
export const Footer = styled.footer`
  border-top: 1px solid #ddd;
`;
export const FooterH1 = styled.h1`
  padding: 10px;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
`;
export const FooterInput = styled.input`
  width: 400px;
  height: 50px;

  border: none;
  padding: 0 10px 0 10px;
`;
export const FooterForm = styled.form``;
export const FooterSpacer = styled.div`
  border: 1px solid #ddd;
  border-radius: 100px;
  display: flex;
  align-items: center;
  max-width: 500px;
  padding: 0 10px 0 10px;
  width: 100%;
  justify-content: flex-start;
`;
export const FooterFormSubmit = styled.button`
  background: none;
  border: none;
  width: auto;
  cursor: pointer;
  height: 100%;
  font-size: 20px;
`;
export const FooterAvatar = styled.div`
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
  }
`;

export const IMG = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: flex-start;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
