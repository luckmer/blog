import { RouteComponentProps } from "react-router-dom";
import { PostPanel } from "./PostPanel";
import { Comments } from "./Comments";

import * as D from "../../css/detailsPost.style";
import * as C from "../../css/ControlPanel.style";
import Firmware from "./Firmware";

const Index = ({ match }: RouteComponentProps<{ id?: string }>) => {
  const firmware = Firmware({ match });

  const post = firmware.post;

  if (!post) {
    return <D.Section>loading...</D.Section>;
  }

  const commentsByArticle = firmware.comments.filter(
    (el) => el.id === firmware.id
  );

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
            <button onClick={firmware.handleDelete}>Delete</button>
            <button>Update</button>
          </C.ControlPanel>
        ) : (
          ""
        )}

        <D.FooterH1>comments</D.FooterH1>
        <PostPanel
          userProfile={firmware.userProfile}
          handleSubmit={firmware.handleSubmit}
          comment={firmware.comment}
          handleChange={firmware.handleChange}
          Errors={firmware.Errors}
        />
      </D.Footer>
      {Comments(commentsByArticle)}
    </D.Section>
  );
};

export default Index;
