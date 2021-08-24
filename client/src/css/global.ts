import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
*{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  padding:0;
  margin:0;
  box-sizing: border-box;
}


body{
  background-color: #F5F6F6;
}
`;

export default globalStyle;
