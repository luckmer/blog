import { useSelector, TypedUseSelectorHook } from "react-redux";
import { PropsPosts } from "../../Types/PropsPosts.types";
import { UserProfile } from "./UserProfile";
import { PostPanel } from "./PostPanel";
import { Visitor } from "./Visitor";

import Paginations from "../../Pagination/Paginations";
import * as P from "../../../css/Profile.css";
import Firmware from "../firmware/firmware";

const Profile = () => {
  const Typed: TypedUseSelectorHook<PropsPosts> = useSelector;
  const state = Typed((state) => state.back.posts.posts);
  const pagination = Typed((state) => state.back.pagination);
  let { page, limit } = pagination;

  const firmware = Firmware();
  const id = firmware.ID;
  const user = firmware.multipleState;
  const data = firmware.state.userData;
  const userId = firmware.userById;

  const postsByUser = state.filter((el) => el.id === id);

  const pageNumbers = [];

  const length = page * limit;
  const indexOfFirst = length - limit;
  const ItemsForPage = postsByUser.slice(indexOfFirst, length);

  const PageLength = Math.ceil(postsByUser.length / limit);
  for (let i = 1; i <= PageLength; i++) {
    pageNumbers.push(i);
  }

  return (
    <P.ProfileMain>
      <P.ProfileSpacer>
        <P.UserPanel>
          {
            (user._id,
            id !== data._id ? (
              <Visitor firmware={userId} />
            ) : (
              <UserProfile firmware={firmware} />
            ))
          }
        </P.UserPanel>
      </P.ProfileSpacer>
      <P.ProfileSpacer>
        <P.PostContainer>
          <div>
            <PostPanel postsByUser={ItemsForPage} Update={id !== data._id} />
          </div>
          <Paginations pageNumbers={pageNumbers} />
        </P.PostContainer>
      </P.ProfileSpacer>
    </P.ProfileMain>
  );
};

export default Profile;
