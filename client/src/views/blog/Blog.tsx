import { Posts } from "../index";
import styled from "styled-components";

const MainBlog = styled.section`
  height: 100%;
`;

const Blog = () => {
  return (
    <MainBlog>
      <Posts />
    </MainBlog>
  );
};

export default Blog;
