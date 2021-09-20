import { Fragment } from "react";
import { PropPanel } from "./Interfaces";
import * as D from "../../css/detailsPost.style";

export const PostPanel = (props: PropPanel) => {
  const { userProfile, handleSubmit, comment, handleChange, Errors } = props;

  return (
    <Fragment>
      {userProfile["_id"] ? (
        <D.FooterForm onSubmit={handleSubmit}>
          <D.FooterSpacer>
            <D.FooterAvatar>
              <img src={userProfile.avatar} alt="" />
            </D.FooterAvatar>
            <D.FooterInput
              placeholder="write a comment"
              value={comment}
              type="string"
              onChange={handleChange}
            />
            <D.FooterFormSubmit type="submit">&rarr;</D.FooterFormSubmit>
          </D.FooterSpacer>
          {Errors ? <small>{Errors["post"]}</small> : ""}
        </D.FooterForm>
      ) : (
        ""
      )}
    </Fragment>
  );
};
