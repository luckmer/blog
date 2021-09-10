import { useSelector, TypedUseSelectorHook } from "react-redux";
import { PropsPosts } from "../Types/PropsPosts.types";
import { UserProfile } from "./UserProfile";
import { Visitor } from "./Visitor";

import * as P from "../../css/Profile.css";
import Firmware from "./firmware";
import { PostPanel } from "./PostPanel";

const Profile = () => {
  const Typed: TypedUseSelectorHook<PropsPosts> = useSelector;
  const state = Typed((state) => state.back.posts.posts);

  const firmware = Firmware();
  const id = firmware.ID;
  const user = firmware.multipleState;
  const data = firmware.state.userData;

  const postsByUser = state.filter((el) => el.id === id);

  return (
    <P.ProfileMain>
      <P.ProfileSpacer>
        <P.UserPanel>
          {
            (user._id,
            id !== data._id ? (
              <Visitor firmware={data} />
            ) : (
              <UserProfile firmware={firmware} />
            ))
          }
        </P.UserPanel>
      </P.ProfileSpacer>
      <P.ProfileSpacer>
        <P.PostContainer>
          <PostPanel postsByUser={postsByUser} />
        </P.PostContainer>
      </P.ProfileSpacer>
    </P.ProfileMain>
  );
};

export default Profile;
