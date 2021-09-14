import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: auto;
  max-width: 1140px;
  margin: auto;
  padding-bottom: 100px;
`;
export const PostsContainer = styled.div``;
export const PostsCategory = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;

  a {
    text-transform: uppercase;
    color: #00008b;
    letter-spacing: 3;
    cursor: pointer;
    text-decoration: none;
    word-break: break-all;
  }
  h3 {
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
`;
export const Small = styled.small`
  padding-left: 10px;
  font-size: 80%;
  font-weight: 400;
  font-size: 15px;
`;
export const H3 = styled.h3`
  padding: 10px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 5px;
  padding-bottom: 10px;
  max-width: 250px;
  width: 100%;
  img {
    height: 180px;
    object-fit: cover;
  }
`;
export const UniquePost = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 10px;
  margin-bottom: 15px;

  @media screen and (max-width: 530px) {
    place-items: center;
  }
`;
export const TextSplit = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-all;
  padding: 0 10px 0 10px;
`;
export const P = styled.p`
  background: linear-gradient(to left, white 50%, #e0e0e0 40%) right;
  background-size: 200%;
  transition: 0.5s ease-out;
  padding-top: 10px;
  padding-bottom: 15px;
  color: #0056b3;
  cursor: pointer;
  &:hover {
    background-position: left;
  }
`;
export const Footer = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  align-items: center;
  width: 100%;
  small {
    color: #0056b3;
  }
`;
export const More = styled.div`
  text-align: right;
  padding: 0 30px 0 30px;
`;
