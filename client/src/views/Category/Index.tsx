import { useSelector, TypedUseSelectorHook } from "react-redux";
import styled from "styled-components";
import * as P from "../../css/Posts.style";
import { ShortText } from "../../components/postCreator/postContent/ShortText";
import Paginations from "../../components/Pagination/Paginations";
import { Link } from "react-router-dom";

interface Props {
  ID: string | number | any;
  back: {
    posts: {
      posts: {
        [key: string]: string;
      }[];
    };
    pagination: {
      [key: string]: number;
    };
  };
}

const Index = () => {
  const Typed: TypedUseSelectorHook<Props> = useSelector;
  const state = Typed((state) => state.back.posts.posts);
  const pages = Typed((state) => state.back.pagination);
  const { ID }: Pick<Props, "ID"> = {
    ID: new URLSearchParams(window.location.search).get("id") || null,
  };

  const postsByCategory = state.filter(
    (el) => el.category.toLowerCase().toString() === ID.toLowerCase().toString()
  );
  const { page, limit } = pages;

  const length = page * limit * 2;
  const indexOfFirst = length - limit * 2;
  const itemsForPage = postsByCategory.slice(indexOfFirst, length);

  const pageNumbers = [];

  const pageLength = Math.ceil(postsByCategory.length / (limit * 2));

  for (let i = 1; i <= pageLength; i++) {
    pageNumbers.push(i);
  }

  return (
    <Section>
      <Spacer>
        {itemsForPage.map((el, i) => (
          <P.Card key={i}>
            <img src={el.image} alt="" />
            <P.TextSplit>
              <div>
                <Link to={`/details/${el._id}?id=${el._id}&check=`}>
                  <P.P>
                    <ShortText description={el.header} />
                  </P.P>
                </Link>
                <small>
                  <ShortText description={el.description} />
                </small>
              </div>
              <P.Footer>
                <Link to={`/profile/${el.id}?id=${el.id}&check=`}>
                  <small>By:{el.user}</small>
                </Link>
                <small>{el.day}</small>
              </P.Footer>
            </P.TextSplit>
          </P.Card>
        ))}
      </Spacer>
      <Paginations pageNumbers={pageNumbers} />
    </Section>
  );
};

export default Index;

const Section = styled.section`
  max-width: 1140px;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Spacer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 10px;
  margin-bottom: 15px;
  padding: 0 15px 0 15px;
  @media screen and (max-width: 565px) {
    place-items: center;
  }
`;
