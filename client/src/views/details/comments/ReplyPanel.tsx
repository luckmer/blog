import { useState, FormEvent, ChangeEvent } from "react";
import { Prop } from "../Interfaces";
import { Link } from "react-router-dom";
import * as C from "../../../css/ControlPanel.style";

export const ReplyPanel = ({
  el,
  status,
  handleUpdateComment,
  userReplyAvatar,
}: any) => {
  const [Err, setErr] = useState<Prop | undefined>(undefined);
  const [editing, setEditing] = useState(false);
  const [postValue, setPostValue] = useState("");
  const [replyFor, setReplyFor] = useState("");
  const [mode, setMode] = useState("");

  const handleModeControl = (mode: string, user: string) => {
    setReplyFor(user);
    setEditing(!editing);
    setMode(mode);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPostValue(e.target.value);

  const handleNewPost = (comment: string, errors: Prop, id: string) => {
    errors["post"] = !comment.length ? "comment is too short" : "";

    if (errors["post"] !== "") {
      setErr(errors);
      return;
    } else setErr(undefined);
    let flag = el.replyBy && mode === "updateComment" ? "updateReply" : mode;

    const newPost = {
      post: postValue,
      id,
      mode: flag,
      user: replyFor ? replyFor : el.email,
      avatar: el.avatar,
      replyBy: userReplyAvatar.avatar,
      replyData: userReplyAvatar.name,
      replyEmail: userReplyAvatar.email,
      replyID: el.replyID,
    };

    return newPost;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const comment = postValue;
    let errors: Prop = {};

    const newPost = handleNewPost(comment, errors, id);

    handleUpdateComment(newPost);

    setEditing(false);
    setPostValue("");
  };

  const handleDeleteMode = (type: string) => {
    let flag = el.replyBy && type === "delete" ? "deleteReply" : "delete";

    const DeleteOption = { mode: flag, replyID: el.replyID, id: el._id };

    handleUpdateComment(DeleteOption);
  };

  return (
    <C.CommentsSection id={el._id}>
      <C.CommentsUser>
        {!el.replyBy ? (
          <C.IMG src={!el.avatar ? el.replyBy : el.avatar} />
        ) : (
          <C.UniqueEmptyImg />
        )}
        <Link to="/">
          <C.Small>{el.name}</C.Small>
        </Link>
      </C.CommentsUser>
      <C.CommentSpacer>
        {editing ? (
          ""
        ) : (
          <div>
            {el.replyBy ? (
              <C.ReplySpacer>
                <div>
                  <small>{el.replyBy}</small>
                  <small>reply to {el.replyTo} </small>
                </div>
                <div>
                  <small>{el.replyPost} </small>
                </div>
              </C.ReplySpacer>
            ) : (
              <div>
                <p>{el.post}</p>
              </div>
            )}
          </div>
        )}
        <C.CommentPanel>
          {status ? (
            <div>
              {editing ? (
                <C.CommentsSection>
                  <C.CommentSpacer>
                    <C.Form onSubmit={(e) => handleSubmit(e, el._id)}>
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
                        <C.Button type="submit">
                          {mode === "form" ? "update" : "reply"}
                        </C.Button>
                        <C.Button onClick={() => setEditing(!editing)}>
                          cancel
                        </C.Button>
                      </C.Algin>
                    </C.Form>
                  </C.CommentSpacer>
                </C.CommentsSection>
              ) : (
                <C.Button
                  onClick={() => handleModeControl("reply", el.replyBy)}
                >
                  --reply--
                </C.Button>
              )}
            </div>
          ) : (
            ""
          )}
          <small>{el.dayResult}</small>
        </C.CommentPanel>
        {status ? (
          <div>
            {editing ? (
              ""
            ) : (
              <C.Algin>
                <C.Button
                  onClick={() => handleModeControl("updateComment", el.id)}
                  id={el.replyID}
                >
                  update
                </C.Button>
                <C.Button onClick={() => handleDeleteMode("delete")}>
                  delete
                </C.Button>
              </C.Algin>
            )}
          </div>
        ) : (
          ""
        )}
      </C.CommentSpacer>
    </C.CommentsSection>
  );
};
