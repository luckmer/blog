import styled from "styled-components";
interface Test {
  Off?: boolean;
}

interface PreviewState {
  Type: string;
}

export const Small = styled.small<Test>`
  color: ${({ Off }) => (Off ? "red" : "#7f82cf")};
  opacity: 0.5;
`;
export const P = styled.p<PreviewState>`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin: 10px;
  max-height: 100px;
  word-break: break-word;
  overflow: hidden;

  font-size: ${({ Type }) => (Type === "header" ? "1.25rem" : "")};
  line-height: ${({ Type }) => (Type === "header" ? "1.2" : "")};
  color: ${({ Type }) => (Type === "header" ? " #7f82cf" : "black")};
  margin-bottom: ${({ Type }) => (Type === "header" ? " 0.75rem" : "")};
`;
export const IMGPreview = styled.div`
  display: flex;
  margin: 5px;
  img {
    width: 200px !important;
    height: 200px;
    object-fit: cover;
  }
`;
export const PreviewPanel = styled.div`
  width: 100%;
  margin-left: 15px;
  border-radius: 5px;
  min-height: 100px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23D6D6D6FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
`;
export const FormStatus = styled.div`
  width: 100%;
  text-align: right;
`;
export const FormButton = styled.button`
  border-radius: 5px;
  border: none;
  margin: 10px 5px 10px 5px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  font-weight: bold;
  font-family: "Inter", sans-serif;

  &:nth-child(2) {
    color: #d6d6d6;
    background-color: #00575b;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Main = styled.section`
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin: auto;
`;
export const H1 = styled.h1`
  font-weight: 500;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-size: 2.5rem;
  color: #282626;
  font-family: "Inter", sans-serif;
`;
export const Content = styled.div`
  display: flex;
`;
export const Spacer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Span = styled.label`
  padding-top: 20px;
  padding-bottom: 10px;
  color: #282626;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.2;
`;
export const Input = styled.input`
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  padding: 10px;
`;
export const TextArea = styled.textarea`
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  padding: 10px;
  resize: none;
  min-height: 150px;
`;
export const Label = styled.label`
  padding: 20px;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23D6D6D6FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  transition: all 1s;
  border-radius: 5px;
  position: relative;
  width: 100px;

  &:hover {
    width: 100%;
    border-radius: 5px;
  }
`;
