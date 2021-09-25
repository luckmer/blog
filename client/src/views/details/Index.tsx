import { RouteComponentProps } from "react-router-dom";
import { sagaActions } from "../../redux/saga/sagaActions";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { PostPanel } from "./PostPanel";
import { Comments } from "./comments/Comments";

import * as D from "../../css/detailsPost.style";
import * as C from "../../css/ControlPanel.style";
import Firmware from "./Firmware";

interface Prop {
  [key: string]: string;
}

interface UserType {
  back: {
    registration: {
      userStatus: boolean;
    };
  };
}

const Index = ({ match }: RouteComponentProps<{ id?: string }>) => {
  const firmware = Firmware({ match });
  const dispatch = useDispatch();
  const post = firmware.post;
  const Typed: TypedUseSelectorHook<UserType> = useSelector;
  const user = Typed((state) => state.back.registration.userStatus);

  if (!post) return <D.Section>loading...</D.Section>;

  const comments = firmware.comments;

  const commentsByArticle = firmware.comments.filter(
    (el) => el.id === firmware.id
  );

  const handleDesignPost = (props: Prop) => {
    if (!props) return;

    switch (props.option) {
      case "delete":
        dispatch({ type: sagaActions.DELETE_UNIQUE_COMMENT, props });
        break;
      case "reply":
        dispatch({ type: sagaActions.REPLY_COMMENT, props });
        break;
      default:
        break;
    }
  };

  const handleUpdateComment = (props: Prop) => {
    if (!props) return;

    switch (props.mode) {
      case "form":
        dispatch({ type: sagaActions.UPDATE_COMMENT, props });
        break;
      case "reply":
        dispatch({ type: sagaActions.REPLY_COMMENT, props });
        break;
      default:
        break;
    }
  };

  const userReplyAvatar = firmware.userProfile;

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
            <C.Button>Update</C.Button>
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
      {Comments(
        commentsByArticle,
        handleDesignPost,
        handleUpdateComment,
        comments,
        user,
        userReplyAvatar
      )}
    </D.Section>
  );
};

export default Index;
