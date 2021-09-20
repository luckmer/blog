import { ShortText } from "../../components/postCreator/postContent/ShortText";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { uniqCategoryFilter } from "../../hooks/index";
import { Link } from "react-router-dom";

import * as P from "../../css/Posts.style";

interface Props {
  back: {
    posts: {
      posts: {
        [key: string]: string;
      }[];
    };
  };
}

const Index = () => {
  const Typed: TypedUseSelectorHook<Props> = useSelector;
  const state = Typed((state) => state.back.posts.posts);
  const categories = state.map((el) => el.category);
  const uniqCategory = uniqCategoryFilter(categories);

  return (
    <P.Section>
      {uniqCategory.map((el, i) => {
        const postByUniqData = state.filter(
          (post) =>
            post.category.trim().toLowerCase().toString() ===
            el.trim().toLowerCase().toString()
        );

        return (
          <P.PostsContainer key={i}>
            <P.PostsCategory>
              <P.H3>
                <Link to={`/categories/${el}?id=${el}&check=`}>
                  {el}
                  <P.Small>( {postByUniqData.length} )</P.Small>
                </Link>
              </P.H3>
              <P.UniquePost>
                {postByUniqData.slice(0, 4).map((el, i) => (
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
              </P.UniquePost>
            </P.PostsCategory>
            <P.More>
              <Link to={`/categories/${el}?id=${el}&check=`}>
                <small>read more &gt;&gt; </small>
              </Link>
            </P.More>
          </P.PostsContainer>
        );
      })}
    </P.Section>
  );
};

export default Index;
