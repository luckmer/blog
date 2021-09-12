import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { PropsPosts } from "../Types/PropsPosts.types";
import { MouseEvent } from "react";

import * as Pagination from "../../redux/reducers/paginationReducer";

const Firmware = (pageNumbers: number[]) => {
  const Typed: TypedUseSelectorHook<PropsPosts> = useSelector;
  const pagination = Typed((state) => state.back.pagination);
  let { page, limit, maxPage, minPage } = pagination;

  const dispatch = useDispatch();

  const prev = () => {
    if (page - 1 >= 1) {
      const update = (page -= 1);
      dispatch(Pagination.Prev(update));
    }
    if (page >= maxPage) {
      dispatch(Pagination.MaxPage(maxPage - limit));
      dispatch(Pagination.MinPage(minPage - limit));
    }
  };

  const next = () => {
    if (pageNumbers.length > maxPage) {
      const update = (page += 1);
      dispatch(Pagination.Next(update));

      if (page > maxPage) {
        dispatch(Pagination.MaxPage(maxPage + limit));
        dispatch(Pagination.MinPage(minPage + limit));
      }
    }
  };

  const setNumber = (e: MouseEvent<HTMLButtonElement>) => {
    let button = e.target as HTMLInputElement;
    const value = Number(button.value);

    dispatch(Pagination.SetNumber(value));
  };

  return {
    page,
    limit,
    maxPage,
    minPage,
    setNumber,
    next,
    prev,
  };
};

export default Firmware;
