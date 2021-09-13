import { Link } from "react-router-dom";
import { uniqCategoryFilter } from "../../hooks/index";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import styled from "styled-components";

interface Props {
  back: {
    posts: {
      posts: {
        [key: string]: string;
      }[];
    };
  };
}

const Section = styled.section`
  width: 100%;
  height: auto;
  max-width: 1140px;
  margin: auto;
`;

const PostsContainer = styled.div``;

const PostsCategory = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;

  a {
    text-transform: uppercase;
    color: #00008b;
    letter-spacing: 3;
    margin-top: 1rem;
    cursor: pointer;
    text-decoration: none;
    word-break: break-all;
  }
  h3 {
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
`;
const Small = styled.small`
  padding-left: 10px;
  font-size: 80%;
  font-weight: 400;
  font-size: 15px;
`;

const H3 = styled.h3`
  padding: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 5px;
  padding-bottom: 10px;

  img {
    height: 180px;
    object-fit: cover;
  }
`;

const UniquePost = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Index = () => {
  const Typed: TypedUseSelectorHook<Props> = useSelector;
  const state = Typed((state) => state.back.posts.posts);
  const categories = state.map((el) => el.category);

  const uniqCategory = uniqCategoryFilter(categories);

  console.log(state);

  return (
    <Section>
      {uniqCategory.map((el, i) => {
        const postByUniqData = state.filter(
          (post) => post.category.trim() === el.trim()
        );

        return (
          <PostsContainer key={i}>
            <PostsCategory>
              <H3>
                <Link to="/">
                  {el}
                  <Small>( {postByUniqData.length} )</Small>
                </Link>
              </H3>
              <UniquePost>
                {postByUniqData.map((el, i) => (
                  <Card key={i}>
                    <img src={el.image} alt="" />
                    <div>
                      <Link to={`/profile/${el.id}?id=${el.id}&check=`}>
                        {el.user}
                      </Link>
                    </div>
                  </Card>
                ))}
              </UniquePost>
            </PostsCategory>
          </PostsContainer>
        );
      })}
    </Section>
  );
};

export default Index;
