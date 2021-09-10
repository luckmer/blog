import { ShortText } from "../postCreator/postContent/ShortText";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { dataProp } from "../Types/PropsPosts.types";
import * as P from "../../css/Profile.css";

export const PostPanel = ({ postsByUser }: { postsByUser: dataProp[] }) => {
  return (
    <Fragment>
      {postsByUser.map((post, i) => (
        <P.Card key={i}>
          <P.ImgDiv>
            <P.Img src={post.image} alt="" />
          </P.ImgDiv>
          <P.CardPanel>
            <div>
              <Link to="/">
                <P.BreakP>
                  <ShortText description={post.header} />
                </P.BreakP>
              </Link>
              <P.BreakP>
                <ShortText description={post.description} />
              </P.BreakP>
            </div>
            <P.CardDesc>
              <Link to="">Update Post</Link>
              <small>{post.day}</small>
            </P.CardDesc>
          </P.CardPanel>
        </P.Card>
      ))}
    </Fragment>
  );
};
