import { combineReducers } from "redux";
import PaginationSlice from "./paginationReducer";
import registerReducer from "./registerReducer";
import UserReducer from "./UserReducer";
import CommentsSlice from "./comments";
import PostSlice from "./Posts";
import ReplySlice from "./reply";

const Index = combineReducers({
  registration: registerReducer,
  pagination: PaginationSlice,
  user: UserReducer,
  posts: PostSlice,
  comments: CommentsSlice,
  reply: ReplySlice,
});

export default Index;
