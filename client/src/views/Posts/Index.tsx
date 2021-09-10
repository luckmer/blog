import { Link } from "react-router-dom";
import { uniqCategoryFilter } from "../../hooks/index";
import { useSelector, TypedUseSelectorHook } from "react-redux";

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
    <div>
      {uniqCategory.map((el, i) => {
        const FilterByCategory = state.filter(
          (item) => item.category.trim() === el.trim()
        );
        return (
          <div key={i}>
            <p>{el}</p>
            {FilterByCategory.map((el, i) => (
              <div key={i}>
                <Link to={`/profile/${el.id}?id=${el.id}&check=`}>
                  {el.user}
                </Link>
              </div>
            ))}
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Index;
