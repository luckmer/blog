import { Link } from "react-router-dom";
import * as C from "../../css/ControlPanel.style";

export const Comments = (commentsByArticle: { [key: string]: string }[]) => {
  return (
    <C.CommentsPanel>
      {commentsByArticle.map((el, i) => {
        const data = !el.createdAt ? new Date() : new Date(el.createdAt);

        const dayResult = `${data.getDate()}-${
          data.getMonth() + 1
        }-${data.getFullYear()}`;

        return (
          <C.CommentsSection key={i}>
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
                <button>--reply--</button>
                <small>{dayResult}</small>
              </C.CommentPanel>
            </C.CommentSpacer>
          </C.CommentsSection>
        );
      })}
    </C.CommentsPanel>
  );
};
