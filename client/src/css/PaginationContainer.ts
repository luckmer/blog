import styled from "styled-components";

interface Props {
  active: boolean;
}

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextPages = styled.div`
  padding: 10px;
`;

export const Btn = styled.button`
  border: none;
  padding: 6px 12px;
  border-radius: 3px;
  color: #ddd;
  cursor: pointer;
  background-color: #23272b;
`;

export const Pages = styled.div`
  transition: all 0.5s;
  margin: 2px;
  border: none;
  text-align: center;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 0;
  color: #00000066;

  border-radius: 4px;
  margin-right: 4px;
  box-shadow: 0px 10px 27px -20px rgb(0 0 0 / 33%);
  cursor: pointer;
`;

export const ActiveBtn = styled.button<Props>`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  background-color: ${({ active }) => (active ? "#23272b" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#23272b")};
  border: none;
`;
