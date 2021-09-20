import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import registerReducer from "./registerReducer";
import PostSlice from "./Posts";
import PaginationSlice from "./paginationReducer";
import CommentsSlice from "./comments";

const Index = combineReducers({
  registration: registerReducer,
  pagination: PaginationSlice,
  user: UserReducer,
  posts: PostSlice,
  comments: CommentsSlice,
});

export default Index;
