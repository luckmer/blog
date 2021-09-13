import { ShortText } from "../../postCreator/postContent/ShortText";
import { Fragment } from "react";
import { dataProp } from "../../Types/PropsPosts.types";
import { Link } from "react-router-dom";

import * as P from "../../../css/Profile.css";

interface Props {
  postsByUser: dataProp[];
  Update: boolean;
}

export const PostPanel = ({ postsByUser, Update }: Props) => {
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
              {Update ? "" : <Link to="">Update Post</Link>}
              <small>{post.day}</small>
            </P.CardDesc>
          </P.CardPanel>
        </P.Card>
      ))}
    </Fragment>
  );
};
