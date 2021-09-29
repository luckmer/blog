import reducer, {
  Next,
  Prev,
  MaxPage,
  MinPage,
} from "../../../redux/reducers/paginationReducer";

describe("pagination", () => {
  const previousState = {
    page: 1,
    limit: 9,
    maxPage: 9,
    minPage: 0,
  };
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      page: 1,
      limit: 4,
      maxPage: 4,
      minPage: 0,
    });
  });

  test("expect next page", () => {
    const Reducer = reducer(previousState, Next(previousState.page + 1));

    expect(Reducer).toEqual({
      limit: 9,
      maxPage: 9,
      minPage: 0,
      page: 2,
    });
  });

  test("should decrease page", () => {
    const Reducer = reducer(previousState, Prev(previousState.page - 1));

    expect(Reducer).toEqual({
      limit: 9,
      maxPage: 9,
      minPage: 0,
      page: 0,
    });
  });

  test("expect new number of pages", () => {
    const Max = reducer(
      previousState,
      MaxPage(previousState.maxPage + previousState.limit)
    );

    expect(Max).toEqual({
      limit: 9,
      maxPage: 18,
      minPage: 0,
      page: 1,
    });
  });

  test("expect decrease max page", () => {
    const Max = reducer(
      previousState,
      MaxPage(previousState.maxPage - previousState.limit)
    );

    expect(Max).toEqual({
      limit: 9,
      maxPage: 0,
      minPage: 0,
      page: 1,
    });
  });

  test("expect min page", () => {
    expect(
      reducer(
        previousState,
        MinPage(previousState.maxPage + previousState.limit)
      )
    ).toEqual({
      limit: 9,
      maxPage: 9,
      minPage: 18,
      page: 1,
    });
  });

  test("expect decreasing page", () => {
    expect(
      reducer(
        previousState,
        MinPage(previousState.maxPage - previousState.limit)
      )
    ).toEqual({
      limit: 9,
      maxPage: 9,
      minPage: 0,
      page: 1,
    });
  });
});
