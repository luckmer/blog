import styled from "styled-components";

export const MainRegister = styled.section`
  width: 100%;
  max-width: 400px;
  margin: auto;
  height: 100%;
  display: flex;
  padding-top: 90px;
  flex-direction: column;
`;
export const Form = styled.form`
  width: 100%;
`;

export const MainPanel = styled.div`
  height: auto;
  border: 1px solid #ddd;
  padding: 40px 25px;
`;

export const MainHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 25px;
  box-sizing: border-box;
`;

export const HeaderPanel = styled.h3`
  font-weight: 500;
  text-transform: uppercase !important;
  line-height: 1.2;
  font-size: 1.75rem;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  display: block;
  width: 100%;
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
`;

export const FormSubmit = styled.button`
  color: #fff;
  background-color: #23272b;
  border-color: #1d2124;
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  padding: 10px 0 10px 0;
  display: flex;
  && :nth-child(2) {
    color: red;
    padding-left: 10px;
    text-decoration: none;
    cursor: pointer;
  }

  span {
    color: red;
    font-weight: bold;
  }
`;
