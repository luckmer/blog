import { combineReducers } from "redux";
import PaginationSlice from "./paginationReducer";
import registerReducer from "./registerReducer";
import UserReducer from "./UserReducer";
import CommentsSlice from "./comments";
import PostSlice from "./Posts";

const Index = combineReducers({
  registration: registerReducer,
  pagination: PaginationSlice,
  user: UserReducer,
  posts: PostSlice,
  comments: CommentsSlice,
});

export default Index;
