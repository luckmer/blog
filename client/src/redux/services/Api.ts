import { sagaActions } from "./../saga/sagaActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Api = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.USER_ONLINE });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: sagaActions.BLOG_POSTS_DISPLAY });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: sagaActions.GET_COMMENTS });
  }, [dispatch]);
};

export default Api;
