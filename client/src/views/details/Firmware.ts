import { FormEvent, useState } from "react";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { ErrorObj, Props, IdProps } from "./Interfaces";
import { sagaActions } from "../../redux/saga/sagaActions";
import { InputChange } from "../../components/Types/Types";
import { useHistory, match } from "react-router-dom";
import { chunkString } from "../../hooks/index";

const FirmWare = ({
  match,
}: {
  match: match<{
    id?: string | undefined;
  }>;
}) => {
  const [comment, setComment] = useState("");
  const [Errors, setErrors] = useState<ErrorObj | undefined>(undefined);

  const Typed: TypedUseSelectorHook<Props> = useSelector;
  const userProfile = Typed((state) => state.back.registration.userData);
  const state = Typed((state) => state.back.posts.posts);
  const commentsResponse = Typed((state) => state.back.comments);
  const comments = commentsResponse.comments;
  const reply = Typed((state) => state.back.reply.reply);

  const dispatch = useDispatch();
  const history = useHistory();

  const { ID, id }: IdProps = {
    ID: new URLSearchParams(window.location.search).get("id") || null,
    id: match.params?.id,
  };

  const post = state.find((el) => (!id ? el._id === ID : el._id === id));

  const splitText = chunkString(post?.description || "", 1000);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let errors: ErrorObj = {};

    errors["post"] = !comment.length ? "comment is too short" : "";

    if (errors["post"] !== "") {
      setErrors(errors);
      return;
    } else setErrors(undefined);

    const data = { ...userProfile, post: comment, id: id };

    dispatch({ type: sagaActions.POST_COMMENT, data });
    setComment("");
  };

  const handleChange = (e: InputChange) => {
    const data = e.target.value;
    setComment(data);
  };

  const handleDelete = () => {
    const ids = { id, ID };
    dispatch({ type: sagaActions.DELETE_POST, ids });
    dispatch({ type: sagaActions.DELETE_COMMENT, ids });
    history.push("/");
  };

  return {
    comments,
    handleDelete,
    post,
    splitText,
    userProfile,
    handleSubmit,
    comment,
    handleChange,
    Errors,
    id,
    reply,
  };
};

export default FirmWare;
