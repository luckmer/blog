import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import * as C from "../../css/ControlPanel.style";

interface Props {
  el: {
    [key: string]: string;
  };
  handleDesignPost: (id: string, option: string) => void;
  handleUpdateComment: (props: { post: string; id: string }) => void;
}

interface Prop {
  [key: string]: string;
}

export const Comments = (commentsByArticle: { [key: string]: string }[]) => {
  const handleDesignPost = (id: string, option: string) => {
    console.log(id, option);
  };

  const handleUpdateComment = (props: Prop) => {
    console.log(props);
  };

  return (
    <C.CommentsPanel>
      {commentsByArticle.map((el, i) => (
        <CommentsMap
          el={el}
          key={i}
          handleDesignPost={handleDesignPost}
          handleUpdateComment={handleUpdateComment}
        />
      ))}
    </C.CommentsPanel>
  );
};

const CommentsMap = ({ el, handleDesignPost, handleUpdateComment }: Props) => {
  const [editing, setEditing] = useState(false);
  const [postValue, setPostValue] = useState("");
  const [Err, setErr] = useState<Prop | undefined>(undefined);
  const data = !el.createdAt ? new Date() : new Date(el.createdAt);

  const dayResult = `${data.getDate()}-${
    data.getMonth() + 1
  }-${data.getFullYear()}`;

  const handleSetMode = () => setEditing(!editing);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPostValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const comment = postValue;
    let errors: Prop = {};
    errors["post"] = !comment.length ? "comment is too short" : "";

    if (errors["post"] !== "") {
      setErr(errors);
      return;
    } else setErr(undefined);

    const newPost = { post: postValue, id };

    handleUpdateComment(newPost);
  };

  const displayUpdateComment = (
    <C.CommentsSection>
      <C.CommentsUser>
        <C.IMG src={el.avatar} alt="" />
        <Link to="/">
          <C.Small>{el.name}</C.Small>
        </Link>
      </C.CommentsUser>
      <C.CommentSpacer>
        <C.Form onSubmit={(e) => handleSubmit(e, el.id)}>
          <div>
            <C.Input
              type="text"
              placeholder="update comment"
              onChange={handleChange}
            />
            <div>
              <p>{Err ? Err && Err["post"] : ""}</p>
            </div>
          </div>
          <C.Algin>
            <C.Button type="submit">update</C.Button>
            <C.Button onClick={() => handleSetMode()}>cancel</C.Button>
          </C.Algin>
        </C.Form>
      </C.CommentSpacer>
    </C.CommentsSection>
  );

  const displayComments = (
    <C.CommentsSection>
      <C.CommentsUser>
        <C.IMG src={el.avatar} alt="" />
        <Link to="/">
          <C.Small>{el.name}</C.Small>
        </Link>
      </C.CommentsUser>
      <C.CommentSpacer>
        <div>
          <p>{el.post}</p>
        </div>
        <C.CommentPanel>
          <C.Button onClick={() => handleDesignPost(el.id, "reply")}>
            --reply--
          </C.Button>
          <small>{dayResult}</small>
        </C.CommentPanel>
        <C.Algin>
          <C.Button onClick={() => handleSetMode()}>update</C.Button>
          <C.Button onClick={() => handleDesignPost(el.id, "delete")}>
            delete
          </C.Button>
        </C.Algin>
      </C.CommentSpacer>
    </C.CommentsSection>
  );

  return (
    <Fragment>{!editing ? displayComments : displayUpdateComment}</Fragment>
  );
};
