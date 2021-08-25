import { useEffect } from "react";
import { sagaActions } from "../saga/sagaActions";
import { useDispatch } from "react-redux";

const Api = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.USER_ONLINE });
  }, [dispatch]);
};

export default Api;
