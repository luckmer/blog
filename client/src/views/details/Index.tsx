import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { sagaActions } from "../../redux/saga/sagaActions";
import { RouteComponentProps } from "react-router-dom";
import { ReplyPanel } from "./comments/ReplyPanel";
import { Prop, UserType } from "./Interfaces";
import { PostPanel } from "./PostPanel";

import * as D from "../../css/detailsPost.style";
import * as C from "../../css/ControlPanel.style";
import group from "../../hooks/CreateById";
import Firmware from "./Firmware";

const Index = ({ match }: RouteComponentProps<{ id?: string }>) => {
  const Typed: TypedUseSelectorHook<UserType> = useSelector;
  const user = Typed((state) => state.back.registration.userStatus);
  const userData = Typed((state) => state.back.registration.userData);

  const firmware = Firmware({ match });
  const dispatch = useDispatch();

  const post = firmware.post;

  if (!post) return <D.Section>loading...</D.Section>;

  const replies = firmware.reply.map((el) =>
    el.id ? { ...el, _id: el.id, replyID: el._id } : el
  );

  const commentsByArticle = firmware.comments.filter((el) => {
    return el.id === firmware.id;
  });

  const dataByGroup = group([...commentsByArticle, ...replies], "_id");

  const handleUpdateComment = (props: Prop) => {
    if (!props) return;

    switch (props.mode) {
      case "updateComment":
        dispatch({ type: sagaActions.UPDATE_COMMENT, props }); // works
        break;
      case "updateReply":
        dispatch({ type: sagaActions.UPDATE_REPLY, props });
        break;
      case "reply":
        dispatch({ type: sagaActions.POST_REPLY, props });
        break;
      case "delete":
        dispatch({ type: sagaActions.DELETE_UNIQUE_COMMENT, props });
        dispatch({ type: sagaActions.DELETE_REPLIES, props });
        break;
      case "deleteReply":
        dispatch({ type: sagaActions.DELETE_REPLY, props });
        break;
      default:
        break;
    }
  };

  return (
    <D.Section>
      <div>
        <D.Header>
          <div>
            <D.H1>{post.header}</D.H1>
          </div>
          <D.HeaderDesc>
            <D.Small>{post.day}</D.Small>
            <D.Small>By {post.user}</D.Small>
          </D.HeaderDesc>
        </D.Header>
        <D.IMG>
          <img src={post.image} alt="" />
        </D.IMG>

        <D.Description>
          {firmware.splitText.map((el, i) => (
            <D.P key={i}>{el}</D.P>
          ))}
        </D.Description>
      </div>
      <D.Footer>
        {post.id === firmware.userProfile._id ? (
          <C.ControlPanel>
            <C.Button onClick={firmware.handleDelete}>Delete</C.Button>
          </C.ControlPanel>
        ) : (
          ""
        )}

        <D.FooterH1>comments</D.FooterH1>
        {user ? (
          <PostPanel
            userProfile={firmware.userProfile}
            handleSubmit={firmware.handleSubmit}
            comment={firmware.comment}
            handleChange={firmware.handleChange}
            Errors={firmware.Errors}
          />
        ) : (
          ""
        )}
      </D.Footer>
      {dataByGroup.map((el, index) => {
        const indexData = el;
        return (
          <C.CommentsPanel key={index}>
            {indexData.map((el: string, index: number) => (
              <ReplyPanel
                el={el}
                key={index}
                status={user}
                handleUpdateComment={handleUpdateComment}
                userReplyAvatar={userData}
              />
            ))}
          </C.CommentsPanel>
        );
      })}
    </D.Section>
  );
};

export default Index;
